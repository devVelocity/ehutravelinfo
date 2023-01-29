<template lang="">
    <article id="homeImageBanner" class="w-full sm:h-[500px] h-[250px] flex items-center justify-center overflow-hidden relative">
        <section class="h-full w-full flex items-center justify-center">
            <span class="bg-black absolute w-full h-full bg-opacity-70 z-20"></span>
            <section class="absolute w-[45%] h-full flex items-center justify-center z-30 flex-col gap-4">
                <h1 class="text-white text-4xl font-bold">Edge Hill Travel Information</h1>
                <span class="w-full h-[1px] inline-block bg-white rounded-md"></span>
                <h2 class="text-white text-lg font-extralight">Train / Bus Information</h2>
            </section>
            <img src="@/assets/20221125_112618.jpg" class="object-cover w-full h-full absolute bannerImg blur-sm" style="opacity: 1" id="image1"/>
            <img src="@/assets/20230106_073903.jpg" class="object-cover w-full h-full absolute bannerImg blur-sm" style="opacity: 0" id="image2"/>
            <img src="@/assets/150ormskirk.jpg" class="object-cover w-full h-full absolute bannerImg blur-sm" style="opacity: 0" id="image3"/>
        </section>
    </article>
</template>
<script>
export default {
    methods:{
        async bannerMove(){
            while(true){
                // console.log("hi")
                const delay = ms => new Promise(res => setTimeout(res, ms));
                var img1 = document.getElementById("image1")
                var img2 = document.getElementById("image2")
                var img3 = document.getElementById("image3")


                img3.style.opacity = 0
                img1.style.opacity = 1
                img2.style.opacity = 0
                
                await delay(20000)

                img2.style.opacity = 1
                img1.style.opacity = 0

                await delay(20000)

                img1.style.opacity = 0
                img3.style.opacity = 1
                img2.style.opacity = 0

                await delay(20000)

            }
        }
    },
    mounted(){
        this.bannerMove()
    }
}
</script>
<style>
.bannerImg{
    transition: 5s;
}
</style>