<script setup>
import Hero from '../components/Hero.vue'
import Experience from '../components/Experience.vue'
import TechStack from '../components/TechStack.vue'
import ProjectCard from '../components/ProjectCard.vue'
import jobs from '../data/job.json'
import projects from '../data/projects.json'

// Helper for OpenSource icons
const getImageUrl = (name) => {
  if (!name) return '';
  return name.startsWith('http') ? name : new URL(`../assets/img/${name}`, import.meta.url).href;
}
</script>

<template>
  <main class="bg-zinc-950 text-white selection:bg-accent selection:text-black">
    <Hero />
    <Experience :jobs="jobs.JobDetails" />
    <TechStack />

    <section id="projects" class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex justify-between items-end mb-16">
        <div>
          <span class="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">Case Studies</span>
          <h2 class="font-serif text-6xl md:text-7xl">Production.</h2>
        </div>
        <span class="text-[10px] font-mono opacity-40 mb-4 border border-white/10 px-3 py-1 rounded-full">
          Index: {{ projects.projectDetails.length }}
        </span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in projects.projectDetails" :key="project.id" :project="project" />
      </div>
    </section>

    <section id="design" class="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div class="mb-16">
        <span class="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">Visual Systems</span>
        <h2 class="font-serif text-6xl md:text-7xl">Architectural Design.</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="design in projects.UIUXdesign" :key="design.id"
          class="glass-panel group rounded-[40px] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-700">
          <div class="p-8 border-b border-white/5 flex justify-between items-center bg-white/2">
            <div>
              <h3 class="font-serif text-2xl tracking-tight group-hover:text-accent transition-colors">{{ design.subject
                }}</h3>
              <p class="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">{{ design.titleDesc }} — {{
                design.date }}</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center p-2">
              <img :src="design.icons[0]" class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="aspect-video w-full bg-zinc-900/50 relative">
            <iframe class="w-full h-full grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000"
              :src="design.embedLink" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section id="opensource" class="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div class="flex flex-col md:flex-row justify-between gap-8 mb-16">
        <div class="max-w-xl">
          <span class="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">Public
            Contributions</span>
          <h2 class="font-serif text-6xl md:text-7xl">Source Registry.</h2>
        </div>
        <p class="text-zinc-500 text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-xs md:text-right self-end">
          A collection of <span class="text-white">API starters</span>, <span class="text-white">UI kits</span>, and
          <span class="text-white">logic modules</span> released to the community.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
        <a v-for="repo in projects.OpenSource" :key="repo.id" :href="repo.link" target="_blank"
          class="group flex items-center justify-between p-6 glass-panel rounded-2xl border border-white/5 hover:bg-accent/3 hover:border-accent/40 transition-all">
          <div class="flex items-center gap-6">
            <span class="text-[10px] opacity-20 group-hover:text-accent group-hover:opacity-100 transition-all">
              [{{ repo.date.split(' ')[1] || '2024' }}]
            </span>
            <div class="space-y-1">
              <h4 class="text-xs tracking-tighter text-zinc-300 group-hover:text-white">{{ repo.subject }}</h4>
            </div>
          </div>
          <svg class="w-4 h-4 text-zinc-600 group-hover:text-accent transition-colors" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-32">
      <div class="relative group rounded-[50px] overflow-hidden border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all duration-700 hover:border-accent/20">
        
        <div class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
          style="background-image: radial-gradient(#2dd4bf 0.5px, transparent 0); background-size: 24px 24px;">
        </div>
        
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/30 transition-all duration-1000"></div>

        <div class="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6 md:py-32">
          <span class="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6 border border-accent/20 px-4 py-2 rounded-full bg-accent/5">
            Open for Collaboration
          </span>
          
          <h2 class="font-serif text-5xl md:text-7xl max-w-4xl leading-[0.9] tracking-tight mb-10">
            Ready to <span class="italic text-zinc-500 font-light">architect</span> your next <br>
            <span class="text-white relative inline-block">
              digital legacy?
              <svg class="absolute -bottom-2 left-0 w-full h-2 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10, 100 5" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </span>
          </h2>

          <a href="mailto:sarmientojoshuaalvarez@gmail.com" 
             class="group/btn relative px-8 py-4 bg-white text-black rounded-full font-mono text-xs font-bold tracking-widest uppercase hover:bg-accent transition-colors duration-300">
            <span class="relative z-10 flex items-center gap-2">
              Start Project
              <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(20px);
}
</style>