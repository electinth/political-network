<template>
  <div
    id="PassAndFuture"
    class="flex flex-col m-auto mt-8 md:flex-row"
    style="width: max-content"
  >
    <div
      class="flex-1 pb-10 md:pb-0 md:px-2 xl:px-8"
      id="pass"
      :style="{
        'border-right': $mq === 'mobile' ? '' : '4px dotted black',
        'border-bottom': $mq != 'mobile' ? '' : '4px dotted black',
      }"
    >
      <div id="header" class="font-bold body2">อดีต</div>
      <div id="year" class="flex my-5 body4">
        <div class="flex-1 text-purple-400">(2555-2562)</div>
        <div class="flex-1 text-blue-400">(2535-2557)</div>
      </div>
      <div id="body" class="flex justify-center mt-3">
        <div class="flex flex-col items-center mx-1">
          <div
            class="mb-6 font-bold rounded-full md:px-3 bubble body5"
            style="border: 1px solid #a97eef"
            :class="
              role1.length ? ' bg-purple-400 text-white' : ' text-purple-400'
            "
          >
           นายก/รอง อบจ.
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
            class="px-3 mb-6 font-bold rounded-full bubble body5"
            style="border: 1px solid #a97eef"
            :class="
              role2.length ? ' bg-purple-400 text-white' : ' text-purple-400'
            "
          >
            ส.อบจ.
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
            class="px-3 mb-6 font-bold rounded-full bubble body5"
            style="border: 1px solid #1861f0"
            :class="role3.length ? ' bg-blue-400 text-white' : ' text-blue-400'"
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
            class="px-3 mb-6 font-bold rounded-full bubble body"
            style="border: 1px solid #1861f0"
            :class="role4.length ? 'bg-blue-400 text-white' : ' text-blue-400'"
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
    <div class="flex-1 pt-10 md:mx-2 xl:mx-8 md:pt-0" id="future">
      <div id="header" class="font-bold body2">ปัจจุบัน</div>
      <div id="year" class="flex my-5 body4">
        <div class="flex-1 text-purple-400">(2563)</div>
        <div class="flex-1 text-blue-400">(2562)</div>
      </div>
      <div id="body" class="flex justify-center mt-3">
        <div class="flex flex-col items-center mx-1">
          <div
            class="mb-6 font-bold rounded-full md:px-3 bubble body5"
            style="border: 1px solid #a97eef"
            :class="
              role5.length ? ' bg-purple-400 text-white' : ' text-purple-400'
            "
          >
           นายก/รอง อบจ.
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
            class="px-3 mb-6 font-bold rounded-full bubble body5"
            style="border: 1px solid #a97eef"
            :class="
              role6.length ? ' bg-purple-400 text-white' : ' text-purple-400'
            "
          >
            ส.อบจ.
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
            class="px-3 mb-6 font-bold rounded-full bubble body5"
            style="border: 1px solid #1861f0"
            :class="role7.length ? ' bg-blue-400 text-white' : ' text-blue-400'"
          >
            ส.ส.
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
            class="px-3 mb-6 font-bold rounded-full bubble body"
            style="border: 1px solid #1861f0"
            :class="role8.length ? 'bg-blue-400 text-white' : ' text-blue-400'"
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
        return require('~/assets/face/no_pic.svg')
      }
    },
  },
}
</script>

<style></style>
