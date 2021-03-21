<template>
  <div id="autocomplete" class="relative">
    <input
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.enter="onEnter"
      class="flex mx-3 text-center outline-none"
      style="border-bottom: 1px solid black"
      :placeholder="holder"
    />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="results.length === 0 || isLoading">
        ไม่พบข้อมูล
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result['จังหวัด'])"
        @keyup.enter="setResult(result['จังหวัด'])"
        class="px-5 py-1 autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result['จังหวัด'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import _ from 'lodash'
export default {
  name: 'autocomplete',

  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
    holder: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: 0,
    }
  },

  computed: {
    ...mapState(['selected_district', 'top_20']),
  },
  methods: {
    ...mapMutations(['SET_DISTRICT']),
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit('input', this)

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true
      } else {
        // Let's  our flat array
        this.filterResults()
        this.isOpen = true
      }
    },

    filterResults() {
      this.results = this.items.filter((item) => {
        return (
          item['จังหวัด'].toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      })
    },
    setResult(result) {
      this.SET_DISTRICT(result)

      this.search = result
      this.isOpen = false
    },
    onEnter() {
      if (this.arrowCounter != -1) {
        this.search = this.results[this.arrowCounter]['จังหวัด']
      } else {
        this.search = this.selected_district
      }
      this.isOpen = false
      this.arrowCounter = -1

      this.SET_DISTRICT(this.search)
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
  },
  watch: {
    items: function (val, oldValue) {
      if (val.length !== oldValue.length) {
        this.results = val
        this.isLoading = false
      }
    },
    selected_district(newValue, oldValue) {
      this.search = newValue
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
    this.search = this.selected_district
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<style lang="scss" scoped>
input::-webkit-input-placeholder {
  opacity: 0.3;
}
.autocomplete-results {
  padding: 0;
  margin: 0;
  height: fit-content;
  max-height: 40vh;
  overflow: auto;
  // width: 100%;
  min-width: 170px;
  border: 1px solid #787982;
  position: absolute;
  background: white;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  font-size: 18px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background: rgba(220, 225, 230, 0.25);
  color: black;
}
</style>
