<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import projects from '../data/projects.json'

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const route = useRoute()
const props = defineProps(['id'])

const project = computed(() =>
  projects.projectDetails.find(p => p.id == (props.id || route.params.id))
)

const modules = [Pagination, Autoplay, EffectFade]

// Image Resolver for assets/img/
const getImg = (name) => {
  if (!name) return ''
  return name.startsWith('http') ? name : new URL(`../assets/img/${name}`, import.meta.url).href
}
</script>

<template>
  <div v-if="project" class="max-w-7xl mx-auto px-6 py-24">
    <div class="mb-20">
      <router-link to="/" class="text-[10px] uppercase tracking-[0.5em] text-accent font-bold hover:opacity-70 transition-opacity">
        ← Back to Index
      </router-link>
      <h1 class="font-serif text-6xl md:text-8xl mt-10 mb-6 leading-[0.9] tracking-tighter">
        {{ project.subject }}
      </h1>
      <p class="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
        {{ project.titleDesc }}
      </p>
    </div>

    <div class="glass-panel rounded-[40px] md:rounded-[60px] overflow-hidden mb-24 relative group border border-white/10">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :effect="'fade'"
        :loop="project.img?.length > 1"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="aspect-video w-full"
      >
        <swiper-slide v-for="(image, index) in project.img" :key="index">
          <img :src="getImg(image)" class="w-full h-full object-cover" :alt="project.subject" />
        </swiper-slide>
      </swiper>

      <div class="absolute bottom-8 left-8 z-10 flex gap-3">
        <img v-for="icon in project.icons.filter(i => i)" :key="icon" :src="icon"
             class="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md p-2 border border-white/20 shadow-2xl" />
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-4 space-y-12">
        <div>
          <span class="text-[10px] uppercase tracking-widest text-accent font-bold block mb-4">Core Stack</span>
          <div class="flex flex-wrap gap-2">
            <span v-for="tool in project.tools" :key="tool"
                  class="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-medium">
              {{ tool }}
            </span>
          </div>
        </div>

        <div v-if="project.link" class="pt-8 border-t border-white/5">
          <a :href="project.link" target="_blank" class="group flex items-center gap-3">
            <span class="font-serif text-2xl group-hover:text-accent transition-colors">Launch Project</span>
            <span class="text-accent group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>
      </div>

      <div class="lg:col-span-8 space-y-10">
        <span class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block">Analysis & Implementation</span>
        <div v-for="(paragraph, index) in project.challenge" :key="index" class="relative pl-8 border-l border-white/5">
          <div class="absolute -left-px top-0 h-4 w-0.5 bg-accent"></div>
          <p class="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Swiper Pagination Styling */
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.2;
}
:deep(.swiper-pagination-bullet-active) {
  background: var(--color-accent);
  opacity: 1;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
}
</style>
