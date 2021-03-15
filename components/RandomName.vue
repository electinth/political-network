<template>
  <div
    id="random-name"
    class="flex flex-col bg-black-400"
    style="transition-duration: 1300ms"
  >
    <div id="random-title-wrapper" class="text-white duration-500 opacity-100">
      <span>
        <p id="title" class="font-bold body1">
          ที่สุดของตระกูลการเมืองไทย ถิ่นไหน.. ใครครอง
        </p>
        <p id="subtitle" class="body3">
          มีเลือกตั้งหรือวาระการเมืองทีไร คุ้นๆ กันไหมกับนามสกุลนี้
        </p>
      </span>
    </div>
    <div id="random-wrapper" class="w-full" style="transition-duration: 1.5s">
      <div id="surname-wrapper">
        <p class="text-yellow-400 surname" id="surname">
          {{ sampling[counter].surname }}
        </p>
        <div
          v-if="stop"
          class="px-3 py-1 m-auto duration-1000 rounded-lg opacity-0 cursor-pointer body5 text-black-300"
          id="rerandom"
          style="border: 1px solid #3d3d3d; width: fit-content"
          @click="re_random"
        >
          สุ่มตระกูลใหม่
        </div>
      </div>
      <div
        id="choose-bottom"
        class="flex justify-center px-8 py-1 m-auto text-pink-400 rounded opacity-100 cursor-pointer hover:bg-pink-400 hover:text-black-400 body3"
        style="border: 1px solid #fc6cff; width: fit-content"
        @click="picked_surname"
      >
        เลือก
      </div>
      <div id="wrapper" class="relative opacity-0" v-if="is_wrapper">
        <div
          id="content"
          class="absolute w-full bg-black-400"
          style="
            transition-duration: 1300ms;
            transform: translateX(-50%);
            left: 50%;
          "
        >
          <span class="flex flex-col items-center mt-5">
            <p class="body2">เป็น 1 ในตระกูลที่ทรงอิทธิพลทางการเมือง</p>
            <span class="flex">
              <p class="body2">ในช่วง 3 ทศวรรษที่ผ่านมาทั้งใน</p>
              <p class="font-bold text-purple-400 body1">ระดับท้องถิ่น</p>
              <p class="body2">และ</p>
              <p class="font-bold text-blue-400 body1">ระดับประเทศ</p>
            </span>
          </span>
          <PassAndFuture :filter_name="filter_name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      sampling: [{ name: 'sampling' }],
      counter: 0,
      interval: null,
      timer: 50,
      stop: false,
      diff_top: 0,
      is_wrapper: false,
      filter_name: [],
    }
  },
  computed: {
    ...mapState(['categories', 'top_20', 'top_20_name']),
  },

  mounted() {
    this.random_surname()
    this.sampling = _.sampleSize(this.categories, 25)
    setTimeout(() => {
      this.diff_top = document
        .getElementById('random-wrapper')
        .getBoundingClientRect().top
    }, 0)
  },
  methods: {
    picked_surname() {
      let selected = _.sample(this.top_20)
      this.sampling = [...this.sampling, selected]
      this.filter_name = _.filter(
        this.top_20_name,
        (n) => n.surname === selected.surname
      )
      this.stop = true
      this.timer *= 2.5
      document.getElementById('choose-bottom').style.display = 'none'
    },

    random_surname() {
      this.counter++
    },
    re_random() {
      this.stop = false
      this.is_wrapper = false
      this.timer = 50
      this.counter = 0
      this.sampling.pop()
      document.getElementById('random-title-wrapper').style.opacity = '1'
      document.getElementById('random-wrapper').style.transform =
        'translateY(0)'
      document.getElementById('surname').style.color = 'white'
      document.getElementById('random-name').style.background = 'black'
      document.getElementById('rerandom').style.opacity = '0'
      document.getElementById('wrapper').style.opacity = '0'
      document.getElementById('choose-bottom').style.display = 'block'
      document.getElementById('surname').style.color = '#F2FFA6'
    },
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue < this.sampling.length - 1) {
        setTimeout(this.random_surname, this.timer)
      } else if (!this.stop) {
        this.counter = 0
      } else {
        this.is_wrapper = true
        document.getElementById(
          'random-wrapper'
        ).style.transform = `translateY(-${this.diff_top}px)`
        document.getElementById('random-title-wrapper').style.opacity = '0'
        setTimeout(() => {
          document.getElementById('surname').style.color = 'black'
          document.getElementById('content').style.background = '#F2FFA6'
          document.getElementById('random-name').style.background = '#F2FFA6'
          document.getElementById('rerandom').style.opacity = '1'
          document.getElementById('wrapper').style.opacity = '1'
        }, 500)
      }
    },
  },
}
</script>

<style></style>
