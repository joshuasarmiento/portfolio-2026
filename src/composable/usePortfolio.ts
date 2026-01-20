import { ref, computed } from 'vue'
import jobsData from '../data/job.json'
import projectsData from '../data/projects.json'

// State is created outside the function to persist across components if needed
const jobs = ref(jobsData.JobDetails)
const projects = ref(projectsData.projectDetails)
const uiUxDesign = ref(projectsData.UIUXdesign)
const openSource = ref(projectsData.OpenSource)

export function usePortfolio() {
  const currentJob = computed(() => jobs.value[0])

  const getProjectById = (id: number) => {
    return computed(() => projects.value.find(p => p.id == id))
  }

  // Helper to resolve images consistently
  const getImageUrl = (name: string) => {
    if (!name) return ''
    return name.startsWith('http') 
      ? name 
      : new URL(`../assets/img/${name}`, import.meta.url).href
  }

  return {
    jobs,
    projects,
    uiUxDesign,
    openSource,
    currentJob,
    getProjectById,
    getImageUrl
  }
}