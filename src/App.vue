<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppNav from './components/AppNav.vue'
import Lenis from '@studio-freight/lenis'

let lenis

onMounted(() => {
  // Initialize Smooth Scroll
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
})
</script>

<template>
  <div class="min-h-screen relative selection:bg-accent/30 selection:text-accent overflow-x-hidden">
    <div class="fixed inset-0 bg-[#050505] -z-30"></div>

    <div class="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/5 blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <div class="fixed inset-0 pointer-events-none opacity-[0.07] z-50 mix-blend-overlay"
         style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>

    <AppNav />

    <main class="relative z-10">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition duration-700 ease-out"
          enter-from-class="opacity-0 translate-y-8"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0 -translate-y-4"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="py-20 border-t border-white/5 text-center relative z-10">
      <div class="mb-6 flex justify-center gap-4 opacity-30">
        <div class="w-1 h-1 rounded-full bg-white"></div>
        <div class="w-1 h-1 rounded-full bg-white"></div>
        <div class="w-1 h-1 rounded-full bg-white"></div>
      </div>
      <p class="text-[10px] uppercase tracking-[0.8em] opacity-30">© 2026 Joshua Sarmiento</p>
    </footer>
  </div>
</template>

<style>
/* Slower, more organic pulse */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>