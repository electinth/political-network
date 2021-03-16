<template>
  <div id="PassAndFuture" class="flex m-auto mt-8" style="width: fit-content">
    <div class="flex-1 mx-8" id="pass">
      <div id="header" class="font-bold body2">อดีต</div>
      <div id="year" class="flex my-5 body4">
        <div class="flex-1 text-purple-400">(2555-2562)</div>
        <div class="flex-1 text-blue-400">(2535-2557)</div>
      </div>
      <div id="body" class="flex justify-center mt-3">
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-white bg-purple-400 rounded-full bubble body5"
          >
            นายก/รองนายกอบจ
          </div>
          <div v-for="(s, index) in role1" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-purple-400 rounded-full bubble body5"
            style="border: 1px solid #a97eef"
          >
            ส.อบจ
          </div>
          <div v-for="(s, index) in role2" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-white bg-blue-400 rounded-full bubble body5"
          >
            สส.
          </div>
          <div v-for="(s, index) in role3" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-blue-400 rounded-full bubble body"
            style="border: 1px solid #1861f0"
          >
            ครม.
          </div>
          <div v-for="(s, index) in role4" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 mx-8" id="future">
      <div id="header" class="font-bold body2">ปัจจุบัน</div>
      <div id="year" class="flex my-5 body4">
        <div class="flex-1 text-purple-400">(2563)</div>
        <div class="flex-1 text-blue-400">(2562)</div>
      </div>
      <div id="body" class="flex justify-center mt-3">
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-white bg-purple-400 rounded-full bubble body5"
          >
            นายก/รองนายกอบจ
          </div>
          <div v-for="(s, index) in role5" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-purple-400 rounded-full bubble body5"
            style="border: 1px solid #a97eef"
          >
            ส.อบจ
          </div>
          <div v-for="(s, index) in role6" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-white bg-blue-400 rounded-full bubble body5"
          >
            สส.
          </div>
          <div v-for="(s, index) in role7" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 mb-6 font-bold text-white bg-blue-400 rounded-full bubble body"
            style="border: 1px solid #1861f0"
          >
            ครม.
          </div>
          <div v-for="(s, index) in role8" :key="index" class="mb-2">
            <img
              :src="replaceByDefault(s.name, s.surname)"
              class="rounded-full"
              style="width: 65px"
            />
            <div class="mt-1 body6">{{ s.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter_name: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      separate: [],
      role1: [],
      role2: [],
      role3: [],
      role4: [],
      role5: [],
      role6: [],
      role7: [],
      role8: [],
    }
  },
  mounted() {
    this.separate = _.groupBy(this.filter_name, 'position')

    this.role1 = this.format_data(this.separate['1_นายก/รองนายก_อดีต'])
    this.role2 = this.format_data(this.separate['2_สอบจ_อดีต'])
    this.role3 = this.format_data(this.separate['3_สส_อดีต'])
    this.role4 = this.format_data(this.separate['4_ครม_อดีต'])
    this.role5 = this.format_data(this.separate['5_นายก_ปัจจุบัน'])
    this.role6 = this.format_data(this.separate['6_สอบจ_ปัจจุบัน'])
    this.role7 = this.format_data(this.separate['7_สส_ปัจจุบัน'])
    this.role8 = this.format_data(this.separate['8_ครม_ปัจจุบัน'])
  },
  methods: {
    format_data(role) {
      return _.uniqBy(role, 'name')
    },
    replaceByDefault(name, surname) {
      try {
        return require(`~/assets/face/${name}_${surname}.jpg`)
      } catch (error) {
        console.log(error)
        return require('~/assets/face/no_pic.svg')
      }
    },
  },
}
</script>

<style></style>
