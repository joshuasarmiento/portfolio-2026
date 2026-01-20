<script setup>
import jobs from '../data/job.json'
const currentJob = jobs.JobDetails[0]
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 pt-44 pb-32">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-8">
        <div class="overflow-hidden mb-8 flex flex-wrap items-center gap-4">
           <span class="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block animate-reveal-up">
             Currently: {{ currentJob.position }} @ {{ currentJob.companyName }}
           </span>
           
           <span class="w-1 h-1 rounded-full bg-white/20 animate-reveal-up delay-100"></span>

           <span class="text-zinc-500 text-[10px] uppercase tracking-[0.5em] font-bold block animate-reveal-up delay-200">
             Based in Philippines 🇵H
           </span>
        </div>

        <h1 class="font-serif text-7xl md:text-[11rem] leading-[0.8] tracking-tighter mb-12">
          Engineering <br>
          <span class="relative inline-block">
            Digital
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </span>
          <span class="italic text-zinc-600">Futures.</span>
        </h1>
      </div>

      <div class="lg:col-span-4 flex flex-col justify-end pb-4">
        <div class="p-8 border-l border-accent/20 bg-white/1 backdrop-blur-sm rounded-r-2xl">
          <p class="text-zinc-400 text-xl leading-relaxed font-light">
            Bridging the gap between <span class="text-white">seamless interfaces</span> and <span class="text-white font-medium">scalable logic</span>. Specialized as a <span class="text-accent">Full Stack Developer</span> from the <span class="text-white">Philippines</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes reveal-up {
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.animate-reveal-up { 
  animation: reveal-up 1s cubic-bezier(0.19, 1, 0.22, 1) both; 
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
</style>