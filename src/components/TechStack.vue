<script setup>
import { ref } from 'vue'
import categories from '../data/techstack.json'

const getGridClass = (index) => {
  const layouts = [
    'lg:col-span-2 lg:row-span-3',                                
    'lg:col-span-2 lg:row-span-3 lg:col-start-3',                 
    'lg:col-span-2 lg:row-span-3 lg:col-start-5',                 
    'lg:col-span-3 lg:row-span-3 lg:row-start-4', // Increased span for balance
    'lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-4'   
  ]
  return layouts[index] || 'lg:col-span-2'
}

const getImageUrl = (name) => {
  if (!name) return '';
  return name.startsWith('http') ? name : new URL(`../assets/img/${name}`, import.meta.url).href;
}
</script>

<template>
  <section id="stack" class="max-w-7xl mx-auto px-6 py-24 md:py-32 scroll-mt-32">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
      <div class="space-y-4">
        <span class="text-accent text-[10px] uppercase tracking-[0.6em] font-bold block opacity-80">Capabilities</span>
        <h2 class="font-serif text-6xl md:text-8xl tracking-tighter leading-none">
          Engine<span class="italic text-zinc-600">.</span>
        </h2>
      </div>
      <div class="border-l border-white/10 pl-6 py-2 max-w-sm">
        <p class="text-zinc-400 text-[11px] leading-relaxed uppercase tracking-[0.25em]">
          A precision-engineered stack for <span class="text-white font-semibold">secure scaling</span> and <span class="text-white font-semibold">cloud automation</span>.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-6 gap-4 auto-rows-[minmax(200px,auto)]">
      <div 
        v-for="(cat, index) in categories.slice(0, 5)" 
        :key="cat.title"
        :class="[getGridClass(index)]"
        class="group relative glass-panel p-6 md:p-8 rounded-4xl border border-white/5 hover:border-accent/30 transition-all duration-700 flex flex-col justify-between overflow-hidden"
      >
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none noise-bg"></div>
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/15 transition-colors duration-1000"></div>

        <div class="flex justify-between items-start mb-10 relative z-10">
          <div class="space-y-2">
            <h3 class="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold group-hover:text-accent transition-colors">
              {{ cat.title }}
            </h3>
            <div class="h-px w-8 group-hover:w-full bg-accent/40 transition-all duration-700 ease-out"></div>
          </div>
          <span class="text-[10px] font-mono opacity-20 font-bold tracking-widest">0{{ index + 1 }}</span>
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-10">
          <div v-for="tech in cat.icons" :key="tech.name" class="relative group/icon">
            <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[8px] font-bold uppercase tracking-widest rounded opacity-0 group-hover/icon:opacity-100 transition-all duration-300 pointer-events-none z-20 border border-white/10 whitespace-nowrap">
              {{ tech.name }}
            </div>

            <a :href="tech.link" target="_blank"
              class="w-11 h-11 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center p-2.5 hover:border-accent/40 hover:bg-accent/10 transition-all duration-500 group-hover/icon:-translate-y-1.5 shadow-xl shadow-black/20">
              <img :src="getImageUrl(tech.icon)" :alt="tech.name"
                class="w-full h-full object-contain opacity-50 grayscale group-hover/icon:opacity-100 group-hover/icon:grayscale-0 transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-panel {
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.noise-bg {
  background-image: url('https://grainy-gradients.vercel.app/noise.svg');
}

@keyframes bentoReveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.glass-panel {
  animation: bentoReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

/* Precise Staggering */
.glass-panel:nth-child(1) { animation-delay: 0.1s; }
.glass-panel:nth-child(2) { animation-delay: 0.2s; }
.glass-panel:nth-child(3) { animation-delay: 0.3s; }
.glass-panel:nth-child(4) { animation-delay: 0.4s; }
.glass-panel:nth-child(5) { animation-delay: 0.5s; }

/* Fixed Mobile Responsiveness */
@media (max-width: 1023px) {
  .grid {
    display: grid !important; /* Forces grid instead of flex column */
  }
}
</style>