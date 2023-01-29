<template lang="">
    <article id="homeImageBanner" class="w-full sm:h-[500px] h-[250px] flex items-center justify-center overflow-hidden relative">
        <section class="h-full w-full flex items-center justify-center">
            <span class="bg-black absolute w-full h-full bg-opacity-70 z-20"></span>
            <section class="absolute w-[45%] max-w-[500px] h-full flex items-center justify-center z-30 flex-col">
                <h1 class="text-white md:text-4xl text-xl font-bold text-center">Edge Hill University</h1>
                <span class="w-full h-[1px] inline-block bg-white rounded-md mt-4 mb-4"></span>
                <h2 class="text-white md:text-xl text-md text-center font-thin mt-2">Public Transport Information</h2>
                <!-- <h2 class="text-white md:text-lg text-sm font-extralight text-center">Train / Bus Information</h2> -->
            </section>
            <section class="imageContainer">
                <div v-for="(slide,index) in carouselImages" :key="index">
                    <img :src="require(`@/assets/${slide}.jpg`)"  class="carouselImage object-cover w-full h-full absolute bannerImg blur-sm top-0 left-0" :key="slide" :class="{slideActive : index == this.slideStage}">
                </div>
                <!-- <img src="@/assets/20221125_112618.jpg" class="object-cover w-full h-full absolute bannerImg blur-sm" id="image1"/>
                <img src="@/assets/20230106_073903.jpg" class="object-cover w-full h-full absolute bannerImg blur-sm" style="opacity: 0" id="image2"/>
                <img src="@/assets/150ormskirk.jpg" class="object-cover w-full h-full absolute bannerImg blur-sm" style="opacity: 0" id="image3"/> -->
            </section>
        </section>
    </article>
</template>
<script>

export default {
    name: 'homeImgBanner',
    data(){
        return{
            carouselImages: ["20221125_112618","20230106_073903","150ormskirk"],
            slideStage: 0
        }
    },
    methods:{
        async cycleCarousel(){
            const sleep = async (milliseconds) => {
                await new Promise(resolve => {
                    return setTimeout(resolve, milliseconds)
                });
            };

            while(true){
                await sleep(10000)
                if(this.slideStage == this.carouselImages.length - 1){
                    this.slideStage = 0
                }else{
                    this.slideStage = this.slideStage + 1
                }
                console.log(this.slideStage)
            }
        },
    },
    mounted(){
        this.cycleCarousel()
    }
}
</script>
<style>
.bannerImg{
    transition: 5s;
}

.carouselImage{
    opacity: 0;
    transition: 3s opacity
}

.slideActive{
    opacity: 1
}

</style>