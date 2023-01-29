<template>
  <main class="h-full dark:bg-stone-900 bg-neutral-200 overflow-x-hidden">
    <Nav/>
    <router-view/>
    <Footer/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default{
  data(){
    return{
      darkMode: true
    }
  },
  components: {
    Nav
  },
  mounted(){
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.darkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      this.darkMode = false
    }

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }
}
</script>

<style>
#app {
  font-family: 'Arimo', sans-serif;
}

</style>
