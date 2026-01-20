<script setup>
const props = defineProps(['project', 'isSmall'])

const getImageUrl = (name) => {
  if (!name) return '';
  return name.startsWith('http') ? name : new URL(`../assets/img/${name}`, import.meta.url).href;
}

// Logic to determine how many "bars" of complexity to show
const getComplexityLevel = () => {
  const score = (props.project.tools?.length || 0) + (props.project.challenge?.length || 0)
  if (score >= 5) return 3
  if (score >= 3) return 2
  return 1
}
</script>

<template>
  <router-link :to="{ name: 'detail', params: { id: project.id } }"
    class="glass-panel group relative flex flex-col p-1 overflow-hidden rounded-[40px] transition-all duration-700 hover:scale-[1.02]">
    <div
      class="p-8 h-full flex flex-col bg-zinc-950/40 rounded-[38px] border border-white/5 group-hover:border-accent/30 transition-colors">

      <div class="flex justify-between items-start mb-12">
        <div class="flex -space-x-3">
          <img v-for="icon in project.icons.filter(i => i)" :key="icon" :src="getImageUrl(icon)"
            class="w-11 h-11 rounded-full bg-zinc-900 p-2.5 border-2 border-zinc-950 group-hover:border-accent/40 group-hover:translate-x-1 transition-all duration-500" />
        </div>

        <div class="flex flex-col items-end gap-2">
          <span class="text-[8px] uppercase tracking-widest opacity-40">Complexity</span>
          <div class="flex gap-1">
            <div v-for="n in 3" :key="n" class="w-6 h-1 rounded-full transition-all duration-1000"
              :class="n <= getComplexityLevel() ? 'bg-accent shadow-[0_0_15px_#2dd4bf]' : 'bg-white/5'">
            </div>
          </div>
        </div>
      </div>

      <div class="mt-auto">
        <div class="overflow-hidden rounded-2xl mb-6 aspect-video bg-zinc-900 border border-white/5 relative">
          <img :src="getImageUrl(project.img[0])"
            class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
          <div class="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent opacity-60"></div>
        </div>

        <div class="flex justify-between items-end">
          <div>
            <span class="text-[9px] text-accent font-bold uppercase tracking-[0.4em] block mb-3">{{ project.date
              }}</span>
            <h3 class="font-serif text-3xl leading-none  tracking-tight group-hover:text-accent transition-colors">
              {{ project.subject }}
            </h3>
          </div>
          <div>
            <div
              class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500 -rotate-45 group-hover:rotate-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
