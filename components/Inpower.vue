<template>
  <div id="Inpower" class="my-16">
    <span class="body2" id="header" v-if="$mq != 'mobile'">
      <p>ในการเลือกตั้ง อบจ. ที่ผ่านมา (พ.ศ. 2563)</p>
      <p>หลายตระกูลคว้าตำแหน่งทั้ง นายก อบจ. และ ส.อบจ. ในสมัยเดียวกัน</p>
      <p>
        และนายก อบจ.
        บางคนยังมีความสัมพันธ์ทางเครือญาติกับนักการเมืองในระดับประเทศ
      </p>
    </span>
    <div v-if="$mq === 'mobile'" class="w-9/12 mx-auto">
      ในการเลือกตั้ง อบจ. ที่ผ่านมา (พ.ศ. 2563) หลายตระกูลคว้าตำแหน่งทั้ง นายก
      อบจ. และ ส.อบจ. ในสมัยเดียวกัน และนายก อบจ.
      บางคนยังมีความสัมพันธ์ทางเครือญาติกับนักการเมืองในระดับประเทศ
    </div>
    <p class="w-6/12 mx-auto mt-3 body5 md:w-full">
      *ระดับประเทศ พิจารณาจาก ครม. และ ส.ส. เขต
      ที่มีความเกี่ยวข้องกับพื้นที่จังหวัดเดียวกัน
    </p>
    <div
      id="chart"
      class="relative flex flex-col mx-5 mt-16 md:mx-auto md:w-4/6"
    >
      <div id="header" class="z-20 flex">
        <div :style="{ flex: $mq === 'mobile' ? '2' : '1' }">
          <div style="height: 100px" />
        </div>
        <div
          class="flex-1 font-bold text-purple-400 body4"
          style="height: 100px"
        >
          <p v-if="$mq != 'mobile'" v-html="'นายก อบจ.63'"></p>
          <p v-if="$mq === 'mobile'" v-html="'นายก<br>อบจ.<br>2563'"></p>
        </div>
        <div
          class="flex-1 font-bold text-purple-400 body4"
          style="height: 100px"
        >
          <p v-if="$mq != 'mobile'" v-html="'สภา อบจ.63'"></p>
          <p v-if="$mq === 'mobile'" v-html="'สภา<br>อบจ.<br>2563'"></p>
        </div>
        <div class="flex-1 font-bold text-blue-400 body4" style="height: 100px">
          <p v-if="$mq != 'mobile'" v-html="'สส. เขต62'"></p>
          <p v-if="$mq === 'mobile'" v-html="'สส.<br>เขต<br>2562'"></p>
        </div>
        <div class="flex-1 font-bold text-blue-400 body4" style="height: 100px">
          <p v-if="$mq != 'mobile'" v-html="'ครม. 62'"></p>
          <p v-if="$mq === 'mobile'" v-html="'ครม.<br>2562'"></p>
        </div>
      </div>
      <div class="relative z-10 flex-1">
        <div
          v-for="(item, key) in position"
          :key="key"
          class="my-2 text-left body6"
        >
          <div id="chart-list" class="flex">
            <div
              id="name"
              class="relative flex flex-col justify-center"
              :style="{ flex: $mq === 'mobile' ? '2' : '1' }"
            >
              <p
                class="relative z-30 pr-3 font-bold bg-yellow-400 body3"
                style="width: max-content"
              >
                {{ item.surname }}
              </p>
              <p class="body6">{{ item.district }}</p>
              <div
                id="time-line"
                class="absolute z-10 w-full h-full border-b-2 border-purple-400"
                style="height: 1px; top: 50%"
              />
            </div>
            <div class="relative flex flex-col flex-1 text-center">
              <div
                v-for="(i, index) in item['นายก อบจ.']"
                :key="index"
                class="flex items-center flex-1"
              >
                <div
                  id="wrapper"
                  class="relative z-30 flex flex-col items-center mx-auto text-center bg-yellow-400"
                  style="width: max-content"
                >
                  <img
                    :src="replaceByDefault(i.name, i.surname)"
                    class="rounded-full"
                    style="width: 25px"
                  />
                  <p>{{ i.name }}</p>
                </div>

                <div
                  v-if="index === 0"
                  id="time-line"
                  class="absolute z-10 w-full h-full border-b-2 border-purple-400"
                  style="height: 1px; top: 50%"
                  :style="{
                    width:
                      item['ส. อบจ.'] ||
                      item['ส.ส. เขต'] ||
                      item['ส. อบจ.'] ||
                      item['ครม.']
                        ? '100%'
                        : '50%',
                  }"
                />
              </div>
            </div>
            <div class="relative flex flex-col flex-1 text-center">
              <div
                v-for="(i, index) in item['ส. อบจ.']"
                :key="index"
                class="flex items-center flex-1"
              >
                <div
                  id="wrapper"
                  class="relative z-30 flex flex-col items-center mx-auto text-center bg-yellow-400"
                  style="width: max-content"
                >
                  <img
                    :src="replaceByDefault(i.name, i.surname)"
                    class="rounded-full"
                    style="width: 25px"
                  />
                  <p>{{ i.name }}</p>
                </div>
              </div>
              <div
                id="time-line"
                class="absolute z-10 h-full border-b-2 border-purple-400"
                style="height: 1px; top: 50%"
                :style="{
                  width: item['ส.ส. เขต'] || item['ครม.'] ? '100%' : '50%',
                }"
              />
              <div
                v-if="item['ส.ส. เขต'] || item['ครม.']"
                id="time-line"
                class="absolute right-0 z-10 h-full border-b-2 border-blue-400"
                style="height: 1px; top: 50%; width: '50%'"
              />
            </div>
            <div class="relative flex flex-col flex-1 text-center">
              <div
                v-for="(i, index) in item['ส.ส. เขต']"
                :key="index"
                class="flex items-center flex-1"
              >
                <div
                  id="wrapper"
                  class="relative z-30 flex flex-col items-center mx-auto text-center bg-yellow-400"
                  style="width: max-content"
                >
                  <img
                    :src="replaceByDefault(i.name, i.surname)"
                    class="rounded-full"
                    style="width: 25px"
                  />
                  <p>{{ i.name }}</p>
                </div>
              </div>
              <div
                v-if="item['ครม.'] || item['ส.ส. เขต']"
                id="time-line"
                class="absolute z-10 h-full border-b-2 border-blue-400"
                style="height: 1px; top: 50%"
                :style="{
                  width: item['ครม.'] ? '100%' : '50%',
                }"
              />
            </div>
            <div class="relative flex flex-col flex-1 text-center">
              <div
                v-for="(i, index) in item['ครม.']"
                :key="index"
                class="flex items-center flex-1"
              >
                <div
                  id="wrapper"
                  class="relative z-30 flex flex-col items-center mx-auto text-center bg-yellow-400"
                  style="width: max-content"
                >
                  <img
                    :src="replaceByDefault(i.name, i.surname)"
                    class="rounded-full"
                    style="width: 25px"
                  />
                  <p>{{ i.name }}</p>
                </div>

                <div
                  v-if="i.position === 'ครม.'"
                  id="time-line"
                  class="absolute z-10 h-full border-b-2 border-blue-400"
                  style="height: 1px; top: 50%; width: 50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  computed: {
    ...mapState(['in_power']),
  },
  data() {
    return {
      groups: null,
      position: null,
      diff_top: 0,
    }
  },
  created() {
    this.diff_top = document
      .getElementById('random-wrapper')
      .getBoundingClientRect().top
  },
  mounted() {
    this.groups = _.groupBy(this.in_power, 'surname')
    this.position = _.map(this.groups, (item) => {
      let map_position = _.groupBy(item, 'position')
      _.assign(
        map_position,
        { surname: item[0].surname },
        { district: item[0].district }
      )
      return map_position
    })
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

<style></style>
