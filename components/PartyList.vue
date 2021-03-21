<template>
  <div id="party-wrapper">
    <div
      id="title"
      class="pt-12 body2"
      v-html="
        ` ในช่วงปี 2535-2562 คนในตระกูล${selected.surname} เคยสังกัดพรรคการเมืองดังนี้`
      "
    />
    <div class="mb-8 body6">
      ข้อมูลพรรคของ นายกและสภา อบจ. 63 เป็นสังกัดสันนิษฐานจาก Rocket Media Lab
    </div>
    <div v-for="(party, key) in party_list" :key="key" class="my-3">
      <div id="list" v-if="key != 'null'" class="flex w-1/2 mx-auto">
        <div
          id="party-name"
          class="flex items-center flex-1 font-bold text-left"
        >
          {{ key }}
        </div>
        <div id="party-images" class="flex" style="flex: 2">
          <div
            v-for="(people, index) in party"
            :key="index"
            class="mx-1"
            style="width: 40px"
          >
            <img
              :src="replaceByDefault(people.name, people.surname)"
              class="rounded-full"
            />
            <div id="people-name" class="body6">{{ people.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    filter_name: {
      type: Array,
      default: [],
    },
    selected: {
      type: Object,
      default: [],
    },
  },
  data() {
    return {
      party_list: {},
    }
  },
  mounted() {
    this.party_list = _.groupBy(this.filter_name, 'party')
  },
  methods: {
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
