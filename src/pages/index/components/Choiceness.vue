<template>
  <div class="choiceness">
    <swiper :options="swiperOption" ref="mySwiper"  >
        <!-- slides -->
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1618436305,3925384720&fm=27&gp=0.jpg"/></swiper-slide>
        <swiper-slide><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1606707426,193463240&fm=27&gp=0.jpg"/></swiper-slide>
        <swiper-slide><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4020151906,3078372930&fm=27&gp=0.jpg"/></swiper-slide>
        <swiper-slide><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3997234067,1506366728&fm=27&gp=0.jpg"/></swiper-slide>
        <swiper-slide><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3895431171,923216766&fm=27&gp=0.jpg"/></swiper-slide>
   
        <!-- Optional controls -->
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Choiceness",
  props: {
    msg: String
  },
  comments: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination-h"
        },
      
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    slideChangeTransitionEnd(a,b,c) {
      console.log(this.swiper.activeIndex);
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    //this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maxWidth {
  width: 100%;
}
img {
  width: 100%;
  height: 20rem;
}
</style>
