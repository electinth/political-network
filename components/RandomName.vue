<template>
  <div id="random-name" class="flex flex-col duration-1000 bg-black-400">
    <div id="random-title-wrapper" class="text-white duration-700 opacity-100">
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
      <div id="lastname-wrapper">
        <p class="text-yellow-400 lastname" id="lastname">
          {{ sampling[counter].name }}
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
        @click="picked_lastname"
      >
        เลือก
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      sampling: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' },
        { name: 'F' },
        { name: 'G' },
        { name: 'H' },
        { name: 'I' },
        { name: 'J' },
        { name: 'K' },
        { name: 'L' },
        { name: 'M' },
        { name: 'N' },
        { name: 'O' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' },
        { name: 'F' },
        { name: 'G' },
        { name: 'H' },
        { name: 'I' },
        { name: 'J' },
        { name: 'K' },
        { name: 'L' },
      ],
      random: [
        { name: 'เทียนทอง' },
        { name: 'ศรีสุวรรณ' },
        { name: 'จำปาซ่อนกลิ่น' },
        { name: 'Jame' },
      ],
      counter: 0,
      interval: null,
      timer: 50,
      stop: false,
    }
  },

  mounted() {
    this.random_lastname()
  },
  methods: {
    picked_lastname() {
      let selected = _.sample(this.random)
      this.sampling = [...this.sampling, selected]
      this.stop = true
      this.timer *= 2.5
      document.getElementById('choose-bottom').style.display = 'none'
    },

    random_lastname() {
      this.counter++
    },
    re_random() {
      this.stop = false
      this.timer = 50
      this.counter = 0
      this.sampling.pop()
      document.getElementById('random-title-wrapper').style.opacity = '1'
      document.getElementById('random-wrapper').style.transform =
        'translateY(0)'
      document.getElementById('lastname').style.color = 'white'
      document.getElementById('random-name').style.background = 'black'
      document.getElementById('rerandom').style.opacity = '0'
      document.getElementById('choose-bottom').style.display = 'block'
    },
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue < this.sampling.length - 1) {
        setTimeout(this.random_lastname, this.timer)
      } else if (!this.stop) {
        this.counter = 0
      } else {
        document.getElementById('random-title-wrapper').style.opacity = '0'
        document.getElementById('random-wrapper').style.transform =
          'translateY(-100%)'
        document.getElementById('lastname').style.color = 'black'
        document.getElementById('random-name').style.background = '#F2FFA6'
        document.getElementById('rerandom').style.opacity = '1'
      }
    },
  },
}
</script>

<style></style>
