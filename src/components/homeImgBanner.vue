<template lang="">
    <article id="homeImageBanner" class="w-full sm:h-[500px] h-[250px] flex items-center justify-center overflow-hidden relative">
        <section class="h-full w-full">
            <span class="bg-black absolute w-full h-full bg-opacity-50 z-20"></span>
            <section class="absolute w-full h-full flex items-center justify-center">
                <h1></h1>
            </section>
            <img src="@/assets/20221125_112618.jpg" class="object-cover w-full h-full absolute bannerImg" style="opacity: 1" id="image1"/>
            <img src="@/assets/20230106_073903.jpg" class="object-cover w-full h-full absolute bannerImg" style="opacity: 0" id="image2"/>
            <img src="@/assets/150ormskirk.jpg" class="object-cover w-full h-full absolute bannerImg" style="opacity: 0" id="image3"/>
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