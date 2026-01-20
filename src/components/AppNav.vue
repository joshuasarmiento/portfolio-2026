<template>
  <nav class="fixed top-0 w-full z-50 border-b border-white/3 bg-black/20 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex justify-between items-center">
      <router-link
        to="/"
        class="font-serif text-xl md:text-2xl tracking-tighter hover:opacity-70 transition-opacity duration-500 relative group"
        @click="activeSection = ''" 
      >
        Joshua<span class="text-accent">.</span>
        <div class="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full"></div>
      </router-link>

      <div class="flex items-center gap-4 md:gap-10">
        <div class="hidden md:flex gap-8 text-[9px] uppercase tracking-[0.4em] font-medium">
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="`#${item.id}`" 
            class="nav-link transition-colors duration-300"
            :class="{ 'text-accent opacity-100': activeSection === item.id }"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.label }}
          </a>
        </div>

        <a
          href="mailto:sarmientojoshuaalvarez@gmail.com"
          class="relative group overflow-hidden bg-white/3 border border-white/10 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:border-accent/40"
        >
          <span class="relative z-10 group-hover:text-accent transition-colors duration-500">Get in Touch</span>
          <div class="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeSection = ref('')

// Define your sections here
const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Work' }
]

// Smooth scroll handler (manual override for perfect control)
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    // If element exists on current page, scroll to it
    element.scrollIntoView({ behavior: 'smooth' })
    // Update URL without reload
    history.pushState(null, null, `#${id}`)
    activeSection.value = id
  } else {
    // If not on home page, route to home with hash
    router.push({ path: '/', hash: `#${id}` })
  }
}

// Scroll Spy Logic
let observer = null

onMounted(() => {
  // Create intersection observer to track active section
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    // Adjust rootMargin to trigger the active state a bit earlier/later
    // -50% means the section becomes active when it hits the middle of the screen
    rootMargin: '-50% 0px -50% 0px' 
  })

  // Observe the sections
  navItems.forEach(item => {
    const section = document.getElementById(item.id)
    if (section) observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>