<template>
  <div class="swiperpages">
    <swiper :options="swiperOption" ref="mySwiper" @slide-change="slideChange">
        <!-- slides -->
        <swiper-slide><Choiceness/>sdkjlf11</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    js
    {{ count }}
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Choiceness from "./Choiceness.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "SwiperPages",
  props: {
    msg: String
  },

  components: {
    swiper,
    swiperSlide,
    Choiceness
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        spaceBetween: 0
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState({
      count: state => {
        return state.pageIndexChoiceness.count;
      }
    })
  },
  methods: {
    slideChange(a, b, c) {
      this.$store.dispatch('pageIndexChoiceness/increment', this.swiper.activeIndex)
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
</style>
