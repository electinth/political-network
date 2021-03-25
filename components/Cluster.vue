<template>
  <div class="pt-16 bg-white">
    <span id="title" class="flex justify-center body2" v-if="$mq != 'mobile'">
      <p>หากดู</p>
      <p
        class="font-bold"
        :class="
          type === 'surname-cluster' ? 'text-orange-400' : 'text-green-400'
        "
        v-html="
          type === 'surname-cluster'
            ? 'อิทธิพลทางการเมืองของตระกูลต่างๆ'
            : 'อิทธิพลทางการเมืองของพรรคต่างๆ'
        "
      />
    </span>
    <p v-if="$mq === 'mobile'" class="w-5/6 m-auto body2">
      หากดู<span
        class="font-bold"
        :class="
          type === 'surname-cluster' ? 'text-orange-400' : 'text-green-400'
        "
        >{{
          type === 'surname-cluster'
            ? 'อิทธิพลทางการเมืองของตระกูลต่างๆ'
            : 'อิทธิพลทางการเมืองของพรรคต่างๆ'
        }}</span
      >ในจังหวัด
    </p>
    <div id="Autocomplete" class="flex flex-wrap justify-center mt-2 body2">
      <p v-if="$mq != 'mobile'">ในจังหวัด</p>
      <Autocomplete :items="district" holder="เลือกจังหวัด" />
      <span class="flex"
        ><p>พบว่ามีการกระจุกตัวของอิทธิพลทางการเมือง</p>
        <p class="font-bold">
          {{
            type === 'surname-cluster'
              ? heightLow(HHI[0].HHI_surname)
              : heightLow(HHI[0].HHI_party)
          }}
        </p></span
      >
    </div>
    <p class="mt-16 opacity-50 body5">(คลิกเพื่อดูจังหวัดอื่นๆ ได้)</p>
    <div id="wrapper-body" class="flex flex-col mt-3 md:flex-row">
      <div class="relative flex justify-center flex-1 md:justify-end xl:mx-16">
        <Map :data="HHI_Overall" :type="type" />
        <div
          id="scale"
          class="absolute"
          :style="{ top: '70%', right: $mq === 'mobile' ? '10%' : '-10%' }"
        >
          <p class="body6">Herfindahl-Hirschman Index (HHI)</p>
          <div
            class="w-4/12"
            style="width: 180px; height: 10px"
            :style="{
              background:
                type === 'surname-cluster'
                  ? ' linear-gradient(90deg,rgba(241, 90, 41, 0) 0%,#f15a29 100%)'
                  : 'linear-gradient(90deg, rgba(43, 163, 180, 0) 0%, #2BA3B4 100%)',
            }"
          ></div>
          <div class="flex justify-between body6">
            <p>ต่ำ (0.0)</p>
            <p>สูง (1.0)</p>
          </div>
        </div>
      </div>
      <div class="flex-1 md:mx-16">
        <div
          id="card-surname"
          class="flex flex-col px-5 mx-auto mt-10 overflow-hidden rounded-lg shadow md:mt-0"
          style="width: 320px"
          :style="{
            height: $mq === 'mobile' ? '400px' : '',
            maxHeight: $mq === 'mobile' ? '' : '480px',
          }"
        >
          <div id="title" class="pt-5 font-bold body1">
            {{ selected_district }}
          </div>
          <div class="flex items-center justify-center mt-3">
            <p class="body6">Herfindahl-Hirschman Index (HHI)</p>
            <p
              class="ml-1 font-bold body5"
              :class="
                type === 'surname-cluster'
                  ? 'text-orange-400'
                  : 'text-green-400'
              "
            >
              {{
                type === 'surname-cluster'
                  ? HHI[0].HHI_surname.toFixed(2)
                  : HHI[0].HHI_party.toFixed(2)
              }}
            </p>
            <img
              :src="info"
              class="ml-2 cursor-pointer"
              @click="openInfo"
              v-if="!is_open"
            />
            <img
              :src="close"
              class="ml-2 cursor-pointer"
              @click="openInfo"
              v-if="is_open"
            />
          </div>
          <div class="mt-4 body6" style="color: #828282" v-if="is_open">
            <p class="text-left">
              HHI เป็นค่าที่วัดระดับความเข้มข้นในการแข่งขัน
              โดยดูจากส่วนแบ่งการตลาด ค่า HHI ที่ใกล้ 1
              สื่อถึงการที่มีคน/กลุ่มเดียวถือครองอำนาจส่วนใหญ่ ส่วนค่า HHI
              ที่ใกล้ 0
              สื่อถึงตลาดที่อำนาจถูกแบ่งให้กับหลากหลายกลุ่มในปริมาณที่เท่าๆ กัน
            </p>

            <p class="pt-2 text-left">
              ค่า HHI ในงานชิ้นนี้
              คำนวณจากจำนวนครั้งที่แต่ละตระกูลได้รับเลือกเป็น
              ส.ส.เขตจังหวัดนั้นในช่วงปี 2535-2563 (ชุด 48-62)
            </p>
          </div>
          <div id="progrss-bar" class="flex w-full mt-3">
            <div
              v-for="(s, i) in data"
              :key="i"
              :style="{
                width: s.percent * 100 + '% ' || '1px',
                height: '40px',
                margin:
                  selected_district === 'กรุงเทพมหานคร' ? '0 0.7px' : '0 1px',
              }"
              class="rounded-md"
              :class="
                type === 'surname-cluster' ? 'bg-orange-400' : 'bg-green-400'
              "
            >
              <p
                v-if="i < 3 && selected_district != 'กรุงเทพมหานคร'"
                class="flex items-center justify-center h-full text-white"
              >
                {{ i + 1 }}
              </p>
            </div>
          </div>
          <div id="rank-surname" class="mt-3 mb-3 overflow-y-auto">
            <div v-for="(s, index) in data" :key="index" class="py-1">
              <span class="flex">
                <div class="flex flex-1">
                  <p
                    class="flex items-center justify-center text-white rounded-full body6"
                    style="width: 21px; height: 21px"
                    :class="
                      type === 'surname-cluster'
                        ? 'bg-orange-400'
                        : 'bg-green-400'
                    "
                  >
                    {{ index + 1 }}
                  </p>
                  <p
                    class="ml-3 font-bold body4"
                    :class="
                      type === 'surname-cluster'
                        ? 'text-orange-400'
                        : 'text-green-400'
                    "
                  >
                    {{
                      selected_district === 'กรุงเทพมหานคร'
                        ? (s.percent * 100).toFixed(1)
                        : (s.percent * 100).toFixed(0)
                    }}%
                  </p>
                </div>
                <p class="flex justify-start text-left body4" style="flex: 2">
                  {{ type === 'surname-cluster' ? s.surname : s.party }}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'HHI_Overall',
      'HHI_Surname',
      'HHI_Party',
      'selected_district',
      'district',
    ]),
  },
  data() {
    return {
      data: [],
      HHI: null,
      info: require('~/assets/images/info.svg'),
      close: require('~/assets/images/close.svg'),
      is_open: false,
    }
  },
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  watch: {
    selected_district: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (this.type === 'surname-cluster') {
          this.data = _.filter(this.HHI_Surname, (s) => s.district === newValue)
        } else {
          this.data = _.filter(this.HHI_Party, (s) => s.district === newValue)
        }
        this.data = this.data.sort(function (a, b) {
          return b.percent - a.percent
        })
        this.HHI = _.filter(this.HHI_Overall, (d) => d.district === newValue)
      },
    },
  },
  methods: {
    openInfo() {
      this.is_open = !this.is_open
    },
    heightLow(HHI) {
      if (HHI <= 1 && HHI > 0.7) {
        return 'สูง'
      } else if (HHI < 0.69 && HHI > 0.31) {
        return 'ปานกลาง'
      } else {
        return 'ต่ำ'
      }
    },
  },
}
</script>

<style>
.orgrange {
  color: #f15a29;
}
.green {
  color: #2ba3b4;
}
</style>
