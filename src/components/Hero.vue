<script setup>
import jobs from '../data/job.json'
const currentJob = jobs.JobDetails[0]
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 md:pt-44 md:pb-32">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
      <div class="lg:col-span-8">
        <div class="overflow-hidden mb-6 md:mb-8 flex flex-wrap items-center gap-3 md:gap-4">
           <span class="text-accent text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold block animate-reveal-up">
             {{ currentJob.position }} @ {{ currentJob.companyName }}
           </span>
           
           <span class="w-1 h-1 rounded-full bg-white/20 animate-reveal-up delay-100 hidden sm:block"></span>
        </div>

        <h1 class="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12">
          Engineering <br>
          <span class="relative inline-block">
            Digital
            <svg class="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
          </span>
          <span class="italic text-zinc-600">Futures.</span>
        </h1>
      </div>

      <div class="lg:col-span-4 flex flex-col justify-end pb-0 md:pb-4">
        <div class="p-6 md:p-8 border-l border-accent/20 bg-white/1 backdrop-blur-sm rounded-r-2xl">
          <p class="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
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