<template>
  <nav class="fixed top-0 w-full z-50 border-b border-white/3 bg-black/20 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <router-link
        to="/"
        class="font-serif text-2xl tracking-tighter hover:opacity-70 transition-opacity duration-500 relative group"
      >
        Joshua<span class="text-accent">.</span>
        <div class="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full"></div>
      </router-link>

      <div class="flex items-center gap-10">
        <div class="hidden md:flex gap-8 text-[9px] uppercase tracking-[0.4em] font-medium">
          <router-link
            to="/"
            class="nav-link"
            active-class="text-accent opacity-100"
          >
            Index
          </router-link>

          <a href="#experience" class="nav-link">Experience</a>
          <a href="#stack" class="nav-link">Stack</a>
          <a href="#projects" class="nav-link">Work</a>
        </div>

        <a
          href="mailto:sarmientojoshuaalvarez@gmail.com"
          class="relative group overflow-hidden bg-white/3 border border-white/10 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:border-accent/40"
        >
          <span class="relative z-10 group-hover:text-accent transition-colors duration-500">Get in Touch</span>
          <div class="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
      </div>
    </div>
  </nav>
</template>