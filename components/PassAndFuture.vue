<template>
  <div id="PassAndFuture" class="flex m-auto mt-8" style="width: fit-content">
    <div class="flex-1 mx-8" id="pass">
      <div id="header" class="font-bold body2">อดีต</div>
      <div id="body" class="flex justify-center mt-3">
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-white bg-purple-400 rounded-full bubble body5"
          >
            นายก/รองนายกอบจ
          </div>
          <div v-for="(s, index) in role1" :key="index">
            <div>{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-purple-400 rounded-full bubble body5"
            style="border: 1px solid #a97eef"
          >
            ส.อบจ
          </div>
          <div v-for="(s, index) in role2" :key="index">
            <div>{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-white bg-blue-400 rounded-full bubble body5"
          >
            สส.
          </div>
          <div v-for="(s, index) in role3" :key="index">
            <div>{{ s.name }}</div>
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-blue-400 rounded-full bubble body5"
            style="border: 1px solid #1861f0"
          >
            ครม.
          </div>
          <div v-for="(s, index) in role4" :key="index">
            <div>{{ s.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 mx-8" id="future">
      <div id="header" class="font-bold body2">ปัจจุบัน</div>
      <div id="body" class="flex justify-center mt-3">
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-white bg-purple-400 rounded-full bubble body5"
          >
            นายก/รองนายกอบจ
          </div>
          <div>2</div>
          <div>3</div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-purple-400 rounded-full bubble body5"
            style="border: 1px solid #a97eef"
          >
            ส.อบจ
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-white bg-blue-400 rounded-full bubble body5"
          >
            สส.
          </div>
        </div>
        <div class="flex flex-col items-center mx-1">
          <div
            class="px-3 font-bold text-blue-400 rounded-full bubble body5"
            style="border: 1px solid #1861f0"
          >
            ครม.
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
    console.log('this.separate => ', this.separate)
    this.role1 = this.format_data(this.separate['1_นายก/รองนายก_อดีต'])
    this.role2 = this.format_data(this.separate['2_สอบจ_อดีต'])
    this.role3 = this.format_data(this.separate['3_สส_อดีต'])
    this.role4 = this.format_data(this.separate['4_ครม_อดีต'])
  },
  methods: {
    format_data(role) {
      return _.uniqBy(role, 'name')
    },
  },
}
</script>

<style></style>
