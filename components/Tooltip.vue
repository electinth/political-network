<template>
  <div
    v-if="tooltip"
    id="surname_checklist"
    class="fixed z-40 px-5 pt-8 overflow-y-hidden bg-white"
    style="transform: translate(-50%, -50%); left: 50%; top: 50%"
    :style="{ width: $mq === 'mobile' ? '90%' : '450px', minHeight: '400px' }"
  >
    <div class="font-bold body1" id="header">{{ selected_name.surname }}</div>
    <img
      :src="X"
      class="absolute top-0 right-0 z-50 p-3 cursor-pointer"
      @click="SET_TOOLTIP(false)"
    />
    <div id="body" class="flex pt-5 text-left">
      <div class="flex-1 body6">
        <div id="title" class="font-bold text-purple-400">
          ระดับท้องถิ่น

          <div id="circle" class="flex my-2">
            <div
              v-for="i in selected_name['ท้องถิ่น'].length"
              :key="i"
              class="mt-1 mr-1 bg-purple-400 rounded-full"
              style="width: 10px; height: 10px"
            ></div>
          </div>
        </div>
        <div id="body" class="overflow-y-auto" style="height: 250px">
          <div
            v-for="(item, index) in selected_name['ท้องถิ่น']"
            :key="item.id"
          >
            <span class="flex font-bold">
              <p>{{ index + 1 }}.</p>
              <p>{{ item.name }}</p>
              <p class="ml-1">{{ item.surname }}</p>
            </span>
            <p>{{ item.position }}</p>
            <p>พรรค {{ item.party ? item.party : '-' }}</p>
            <p>ปี​​ {{ item.start_year }}</p>
          </div>
        </div>
      </div>
      <div class="flex-1 body6">
        <div id="title" class="font-bold text-blue-400">
          ระดับประเทศ
          <div id="circle" class="flex flex-wrap my-2">
            <div
              v-for="i in selected_name['ทั่วประเทศ'].length"
              :key="i"
              class="mt-1 mr-1 bg-blue-400 rounded-full"
              style="width: 10px; height: 10px"
            ></div>
          </div>
        </div>
        <div id="body" class="overflow-y-auto" style="height: 250px">
          <div
            v-for="(item, index) in selected_name['ทั่วประเทศ']"
            :key="item.id"
          >
            <span class="flex font-bold">
              <p>{{ index + 1 }}.</p>
              <p>{{ item.name }}</p>
              <p class="ml-1">{{ item.surname }}</p>
            </span>
            <p>{{ item.position }}</p>
            <p>พรรค {{ item.party ? item.party : '-' }}</p>
            <p>ปี​​ {{ item.start_year }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['selected_name', 'tooltip']),
  },
  methods: {
    ...mapMutations(['SET_TOOLTIP']),
  },
  data() {
    return {
      X: require('~/assets/images/X.svg'),
    }
  },
}
</script>

<style></style>
