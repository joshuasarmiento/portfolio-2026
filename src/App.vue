<template>
  <div class="min-h-screen relative selection:bg-accent/30 selection:text-accent overflow-x-hidden">
    <div class="fixed inset-0 bg-[#050505] -z-30"></div>

    <div class="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <div class="fixed inset-0 -z-10 opacity-[0.15] mask-[radial-gradient(ellipse_at_center,black,transparent)]"
         style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4='); background-size: 40px 40px;">
    </div>

    <div class="fixed inset-0 pointer-events-none opacity-[0.09] z-50 contrast-150 brightness-100"
         style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>

    <AppNav />

    <main class="relative z-10">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition duration-700 ease-out"
          enter-from-class="opacity-0 translate-y-8"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-400 ease-in"
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

<script setup>
import AppNav from './components/AppNav.vue'
</script>

<style>
/* Global page transitions */
.page-enter-active, .page-leave-active { transition: all 0.4s ease-in-out; }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }

/* Custom pulse for the mesh gradient */
@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}
.animate-pulse {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>