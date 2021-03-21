<template>
  <div class="mt-16" id="check-surname">
    <div id="title" class="font-bold h1">
      <p>นอกจากตระกูลเทียนทอง</p>
      <p>ยังมีอีกหลายตระกูลที่ทรงอิทธิพลใน</p>
      <p>สนามการเมืองไทย</p>
    </div>
    <div id="check-box" class="flex justify-center mt-16">
      <div
        id="target"
        v-for="(target, index) in targets"
        :key="'target' + index"
        class="flex justify-center mx-3"
        style="width: fit-content"
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
      class="relative flex flex-wrap justify-center h-screen mx-10 mt-10 overflow-hidden"
      :style="{ fontSize: '15vh' }"
    >
      <div
        v-for="(r, i) in results"
        :key="i"
        @mouseover="active_tooltip(r)"
        @mouseleave="tooltip = false"
        style="width: fit-content; height: fit-content; font-family: 'Tiga'"
        :style="{ 'line-height': '100%' }"
        class="mx-2 cursor-pointer hover:bg-black-400 hover:text-yellow-400 li"
      >
        {{ r.surname }}
      </div>
      <div
        v-if="tooltip"
        class="absolute bg-white pointer-events-none"
        style="transform: translateY(-50%); top: 50%"
      >
        tooltip
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
      tooltip: false,
    }
  },
  computed: {
    ...mapState(['categories', 'categories_names']),
  },
  methods: {
    active_tooltip(hover) {
      this.tooltip = true
      let filter = _.filter(this.categories_names, function (c) {
        return c.surname === hover.surname
      })
    //   console.log(filter)
    },
  },
  watch: {
    checked_target: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.results = _.filter(this.categories, (c) =>
          newValue.every((n) => c[n] === 1)
        )
      },
    },
  },
}
</script>

<style></style>
