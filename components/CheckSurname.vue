<template>
  <div class="relative mt-16" id="check-surname">
    <div id="title" class="mx-4 font-bold h1 md:mx-0">
      <p v-if="$mq != 'mobile'">นอกจากตระกูล{{ selected.surname }}</p>
      <span v-if="$mq === 'mobile'">
        <p>นอกจากตระกูล</p>
        <p>{{ selected.surname }}</p>
      </span>
      <p>ยังมีอีกหลายตระกูลที่ทรงอิทธิพลใน</p>
      <p>สนามการเมืองไทย</p>
    </div>
    <div
      id="check-box"
      class="flex flex-wrap justify-start w-10/12 mx-auto mt-16 md:justify-center md:w-full"
    >
      <div
        id="target"
        v-for="(target, index) in targets"
        :key="'target' + index"
        class="flex justify-center py-2 mx-3 md:py-1 md:my-0"
        style="width: max-content"
      >
        <label class="flex flex-row check">
          <p
            class="pl-10 font-bold p2 body4"
            :class="
              target.name === 'มีตำแหน่งระดับท้องถิ่น ในอดีต' ||
              target.name === 'มีตำแหน่งระดับท้องถิ่น ในปัจจุบัน'
                ? 'text-purple-400'
                : 'text-blue-400'
            "
          >
            {{ target.name }}
          </p>
          <input
            type="checkbox"
            checked="checked"
            v-model="checked_target"
            :value="target.value"
            :disabled="
              checked_target.length === 1 &&
              checked_target.indexOf(target.value) != -1
            "
          />
          <span
            class="checkmark"
            :class="
              target.name === 'มีตำแหน่งระดับท้องถิ่น ในอดีต' ||
              target.name === 'มีตำแหน่งระดับท้องถิ่น ในปัจจุบัน'
                ? ' bg-purple-400 '
                : ' bg-blue-400 '
            "
          ></span>
        </label>
      </div>
    </div>
    <div
      id="name"
      class="relative flex flex-wrap justify-center py-5 mx-10 mt-10 overflow-hidden"
      :style="{ fontSize: fontSize }"
    >
      <div
        v-for="(r, i) in results"
        :key="i"
        @click="active_tooltip(r)"
        style="width: max-content; height: max-content; font-family: 'Tiga'"
        :style="{ 'line-height': '100%' }"
        class="mx-2 cursor-pointer hover:bg-black-400 hover:text-yellow-400 li"
      >
        {{ r.surname }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as d3 from 'd3'
export default {
  data() {
    return {
      checked_target: [
        'past_local',
        'present_local',
        'past_national',
        'present_national',
      ],
      targets: [
        {
          name: 'มีตำแหน่งระดับท้องถิ่น ในอดีต',
          value: 'past_local',
        },
        {
          name: 'มีตำแหน่งระดับท้องถิ่น ในปัจจุบัน',
          value: 'present_local',
        },
        {
          name: 'มีตำแหน่งระดับประเทศ ในอดีต',
          value: 'past_national',
        },
        {
          name: 'มีตำแหน่งระดับประเทศ ในปัจจุบัน',
          value: 'present_national',
        },
      ],
      results: [],
      fontSize: 0,
      groupBy: null,
      X: require('~/assets/images/X.svg'),
    }
  },
  computed: {
    ...mapState([
      'categories',
      'categories_names',
      'selected',
      'selected_name',
      'tooltip',
    ]),
  },

  methods: {
    ...mapMutations(['SET_SELECTED_NAME', 'SET_TOOLTIP']),
    active_tooltip(hover) {
      this.SET_TOOLTIP(true)
      let filter = _.filter(this.categories_names, function (c) {
        return c.surname === hover.surname
      })
      this.groupBy = _.groupBy(filter, 'position')
      let นายก = this.groupBy['นายก'] ? this.groupBy['นายก'] : []
      let รองนายก = this.groupBy['นายก/รองนายก']
        ? this.groupBy['นายก/รองนายก']
        : []
      let สภา = this.groupBy['สภา'] ? this.groupBy['สภา'] : []
      let ครม = this.groupBy['ครม'] ? this.groupBy['ครม'] : []
      let สส = this.groupBy['สส.'] ? this.groupBy['สส.'] : []
      this.groupBy = {
        ท้องถิ่น: [...นายก, ...รองนายก, ...สภา],
        ทั่วประเทศ: [...ครม, ...สส],
      }
      _.assign(this.groupBy, { surname: hover.surname })
      this.SET_SELECTED_NAME(this.groupBy)
    },
  },
  watch: {
    checked_target: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.SET_TOOLTIP(false)
        this.results = _.filter(this.categories, (c) =>
          newValue.every((n) => c[n] === 1)
        )
        if (newValue.length === 4) {
          this.fontSize = '7vw'
        } else if (
          newValue.length === 3 &&
          newValue.indexOf('present_local') != -1
        ) {
          this.fontSize = '6vw'
        } else if (newValue.length === 2) {
          this.fontSize = '3vw'
        } else if (newValue.length === 1) {
          this.fontSize = '2vw'
        } else if (newValue.indexOf('present_local') === -1) {
          this.fontSize = '3vw'
        }
      },
    },
  },
}
</script>

<style></style>
