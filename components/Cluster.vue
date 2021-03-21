<template>
  <div class="pt-16 bg-white">
    <span id="title" class="flex justify-center body2">
      <p>หากดู</p>
      <p
        class="font-bold"
        :class="
          type === 'surname-cluster' ? 'text-orange-400' : 'text-green-400'
        "
      >
        {{
          type === 'surname-cluster'
            ? 'การกระจุกตัวของอิทธิพลทางการเมืองของตระกูลต่างๆ'
            : 'การผูกขาดอิทธิพลทางการเมืองของพรรคต่างๆ'
        }}
      </p>
    </span>
    <div id="Autocomplete" class="flex justify-center mt-2 body2">
      <p>ในจังหวัด</p>
      <Autocomplete :items="district" holder="เลือกจังหวัด" />
      <span class="flex"
        ><p>ในจังหวัด</p>
        <p class="font-bold">
          {{ type === 'surname-cluster' ? 'สูง' : 'ต่ำ' }}
        </p></span
      >
    </div>
    <p class="mt-5 opacity-50 body5">(คลิกเพื่อดูจังหวัดอื่นๆ ได้)</p>
    <div id="wrapper-body" class="flex mt-16">
      <div class="flex justify-end flex-1 mx-16">
        <Map :data="HHI_Overall" :type="type" />
      </div>
      <div class="flex-1 mx-16">
        <div
          id="card-surname"
          class="flex flex-col px-5 overflow-hidden rounded-lg shadow"
          style="width: 320px; max-height: 480px"
        >
          <div id="title" class="pt-5 font-bold body1">
            {{ selected_district }}
          </div>
          <span class="flex items-center justify-center mt-3">
            <p class="body6">Herfindahl-Hirschman Index (HHI)</p>
            <p
              class="ml-1 font-bold body5"
              :class="
                type === 'surname-cluster'
                  ? 'text-orange-400'
                  : 'text-green-400'
              "
            >
              {{ type === 'surname-cluster' ? '0.2' : '0.8' }}
            </p>
          </span>
          <div id="progrss-bar" class="flex w-full mt-3">
            <div
              v-for="(s, i) in data"
              :key="i"
              :style="{
                width: s.percent * 100 + '%',
                height: '40px',
                margin: '0 1px',
              }"
              class="rounded-md"
              :class="
                type === 'surname-cluster' ? 'bg-orange-400' : 'bg-green-400'
              "
            ></div>
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
                    {{ (s.percent * 100).toFixed(0) }}%
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
      },
    },
  },
}
</script>

<style></style>
