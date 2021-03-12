<template>
  <div id="random-name" class="flex flex-col">
    <span>
      <p id="title" class="font-bold body1">
        ที่สุดของตระกูลการเมืองไทย ถิ่นไหน.. ใครครอง
      </p>
      <p id="subtitle" class="body3">
        มีเลือกตั้งหรือวาระการเมืองทีไร คุ้นๆ กันไหมกับนามสกุลนี้
      </p>
    </span>
    <div id="lastname" class="lastname">{{ sampling[counter].name }}</div>
    <div
      class="px-10 py-2 border-white rounded cursor-pointer body3"
      style="border: 1px solid #ffffff"
      @click="picked_lastname"
    >
      เลือก
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
      ],
      random: [
        { name: 'Pooh' },
        { name: 'Aum' },
        { name: 'Max' },
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
    },

    random_lastname() {
      this.counter++
    },
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue < this.sampling.length - 1) {
        setTimeout(this.random_lastname, this.timer)
      } else if (!this.stop) {
        this.counter = 0
      }
    },
  },
}
</script>

<style></style>
