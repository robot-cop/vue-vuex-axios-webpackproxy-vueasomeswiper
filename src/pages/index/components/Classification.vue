<template>
  <div class="classification">
      <!-- <ul>
        <li v-for="l in list"  :key="l.value">
          {{l.name}}
        </li>
      </ul> -->
      <swiper :options="swiperOption" ref="mySwiper" @slide-change="slideChange">
        <!-- slides -->
        <swiper-slide v-for="l in list"  :key="l.value">
          {{l.name}}
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
      {{count}}
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Classification",
  comments: {
    swiper
  },
  data() {
    return {
      list: [
        { name: "精选", value: "choiceness" },
        { name: "箱包", value: "bags" },
        { name: "手表", value: "watch" },
        { name: "首饰", value: "jewelry" },
        { name: "服装", value: "clothing" },
        { name: "鞋靴", value: "boots" },
        { name: "配饰", value: "ornament" },
        { name: "配件", value: "parts" }
      ],
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      }
    };
  },
  props: {
    msg: String
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState({
      count: state => {
        console.log(state, "state");
        return state.pageIndexChoiceness.count;
      }
    })
  },
  methods: {
    slideChange(a, b, c) {
       this.$store.dispatch('pageIndexChoiceness/increment', this.swiper.activeIndex)
      console.log(this.swiper.activeIndex);
    }
  },
  mounted() {
    // current swiper instance
     this.$store.dispatch('pageIndexChoiceness/getIndexChoiceness')
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    //this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.maxWidth {
  width: 100%;
}
.classification {

  ul {
    margin: 0;
    padding: 0;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.3rem;
    li {
      list-style: none;
      display: inline-block;
      margin: 0 2rem;
    }
  }
  .swiper-slide {
    font-size: 1.3rem;
  }
}
</style>
