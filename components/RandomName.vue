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
    <div id="lastname" class="lastname">เทียนทอง</div>
    <div
      class="px-10 py-2 border-white rounded cursor-pointer body3"
      style="border: 1px solid #ffffff"
      @click="random_lastname"
    >
      เลือก
    </div>
  </div>
</template>

<script>
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
        { name: 'P' },
        { name: 'Q' },
        { name: 'R' },
        { name: 'S' },
        { name: 'T' },
      ],
      random: [{ name: 'A' }, { name: 'J' }, { name: 'S' }, { name: 'T' }],
    }
  },
  methods: {
    random_lastname() {
      console.log('random JA 🛩 ')
    },
  },
}
</script>

<style></style>
