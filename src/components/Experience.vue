<script setup>
defineProps(['jobs'])

const getImg = (name) => {
  if (!name) return '';
  return name.startsWith('http') ? name : new URL(`../assets/img/${name}`, import.meta.url).href;
}

// Data for the diagnostic dashboard
const metrics = [
  { label: 'Security', value: '88%', color: 'zinc' },
  { label: 'Systems', value: '94%', color: 'teal' },
  { label: 'Full-Stack', value: '99%', color: 'accent' }
]
</script>

<template>
  <section id="experience" class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32 relative">
    <div class="mb-12 md:mb-20 text-center md:text-left">
      <div class="inline-flex items-center gap-3 mb-4">
        <span class="h-px w-8 bg-accent/50"></span>
        <span class="text-accent text-[10px] uppercase tracking-[0.6em] font-bold">Execution Engine</span>
      </div>
      <h2 class="font-serif text-4xl sm:text-6xl md:text-8xl tracking-tighter">
        Career <span class="italic text-zinc-600">Logic.</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div class="lg:col-span-7 relative">
        <div class="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-accent/50 via-white/5 to-transparent hidden md:block"></div>

        <div class="space-y-6">
          <div v-for="(job, index) in jobs" :key="job.id" 
               class="group relative pl-0 md:pl-20 transition-all duration-500">
            
            <div class="absolute left-7 top-8 w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_#2dd4bf] hidden md:block z-20 group-hover:scale-150 transition-transform"></div>

            <div class="glass-panel p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all duration-700 relative overflow-hidden">
              <div class="absolute inset-0 opacity-[0.02] pointer-events-none noise-bg"></div>
              
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div class="flex items-center gap-4 md:gap-6">
                  <div class="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center p-2.5 md:p-3 group-hover:rotate-6 transition-transform duration-500">
                    <img :src="getImg(job.companyLogo)" :alt="job.companyName" class="w-full h-full rounded-lg object-contain grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  
                  <div>
                    <h3 class="text-lg md:text-2xl font-serif text-zinc-100 group-hover:text-accent transition-colors leading-none mb-2">
                      {{ job.position }}
                    </h3>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">{{ job.companyName }}</span>
                      <span class="w-1 h-1 rounded-full bg-white/10 hidden sm:block"></span>
                      <span class="text-zinc-500 text-[9px] font-mono tracking-tighter w-full sm:w-auto">{{ job.startDate }} — {{ job.endDate }}</span>
                    </div>
                  </div>
                </div>

                <a :href="job.link" target="_blank" 
                   class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all group-hover:border-accent/50 self-end md:self-auto">
                   <svg class="w-4 h-4 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
        <div class="glass-panel rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl shadow-black/50">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none noise-bg"></div>
          
          <div class="flex justify-between items-start mb-8 md:mb-12 relative z-10">
            <div>
              <p class="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-1">Diagnostic</p>
              <h4 class="font-serif text-2xl md:text-3xl">Impact Analysis</h4>
            </div>
            <div class="flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-full">
              <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span class="text-[8px] font-bold uppercase text-accent tracking-tighter">Live Status</span>
            </div>
          </div>

          <div class="space-y-6 md:space-y-8 relative z-10">
            <div v-for="stat in metrics" :key="stat.label" class="space-y-3 group/stat">
              <div class="flex justify-between items-end">
                <span class="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-hover/stat:text-white transition-colors">{{ stat.label }}</span>
                <span class="text-xs font-mono text-zinc-400">{{ stat.value }}</span>
              </div>
              <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-1000 ease-out bar-fill"
                     :class="stat.color === 'accent' ? 'bg-accent' : stat.color === 'teal' ? 'bg-teal-500/50' : 'bg-zinc-700'"
                     :style="{ width: stat.value }">
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 relative z-10">
            <p class="text-[9px] md:text-[10px] text-zinc-500 leading-relaxed uppercase tracking-[0.2em]">
              Data synchronized with <span class="text-white">full-stack logic</span> & <span class="text-white">active security protocols</span>.
            </p>
          </div>
        </div>

        <div class="glass-panel rounded-[2rem] md:rounded-4xl p-6 border border-white/5 flex items-center gap-6 group hover:border-accent/20 transition-all">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent text-lg md:text-xl group-hover:scale-110 transition-transform">✦</div>
          <p class="text-[9px] md:text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest">
            Specialized in <span class="text-white">high-availability architecture</span> and security-hardened systems.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-panel {
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.noise-bg {
  background-image: url('https://grainy-gradients.vercel.app/noise.svg');
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.group {
  animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Stagger animation for timeline nodes */
.group:nth-child(1) { animation-delay: 0.1s; }
.group:nth-child(2) { animation-delay: 0.2s; }
.group:nth-child(3) { animation-delay: 0.3s; }

.bar-fill {
  box-shadow: 0 0 10px rgba(45, 212, 191, 0.1);
}
</style>