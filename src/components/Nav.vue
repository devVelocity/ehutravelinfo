<template lang="">
  <nav class="p-0 flex flex-col relative w-full z-40">
    <div class="w-full bg-purple-900 min-h-16 flex items-between p-4 sticky" id="topbar">
        <section class="w-full h-auto flex items-center">
            <h1 class="text-white font-bold sm:text-lg text-sm">Edge Hill Travel Info</h1>
        </section>
        <section class="items-center sm:flex hidden">
            <div @click="darkModeChange()" class="group">
                <svg v-if="this.$root.darkMode" class="w-[30px] stroke-white stroke-[1px] opacity-50 group-hover:opacity-100 duration-100 group-hover:cursor-pointer" aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg  v-if="!this.$root.darkMode" class="w-[30px] stroke-white stroke-[1px] opacity-50 group-hover:opacity-100 duration-100 group-hover:cursor-pointer" aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </section>
        <section class="sm:hidden flex">
            <div class="group" @click="mobileMenu = !mobileMenu">
                <svg v-if="!mobileMenu" xmlns="http://www.w3.org/2000/svg" class=" w-[30px] stroke-white stroke-[1px] opacity-50 group-hover:opacity-100 duration-100 group-hover:cursor-pointer" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg v-if="mobileMenu" xmlns="http://www.w3.org/2000/svg" class=" w-[30px] stroke-white stroke-[1px] opacity-50 group-hover:opacity-100 duration-100 group-hover:cursor-pointer" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </section>
    </div>
  </nav>   
    <div id="mobileNav" class="h-full w-full bg-black sm:hidden mobileNav absolute z-50" :class="{ mobileNavActive : mobileMenu}">

    </div> 
</template>
<script>
export default {
    data(){
        return{
            mobileMenu: false
        }
    },
    methods:{
        darkModeChange(){
            if(this.$root.darkMode == false){
                this.$root.darkMode = true
                // Whenever the user explicitly chooses dark mode
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
                
            }else{
                this.$root.darkMode = false
                // Whenever the user explicitly chooses light mode
                localStorage.theme = 'light'
                document.documentElement.classList.remove('dark')
            }
        }
    },
}
</script>
<style>
    .mobileNav{
        opacity: 0%;
        transition: 0.3s
    }

    .mobileNavActive{
        opacity: 80%;
    }
</style>