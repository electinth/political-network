<template>
  <div id="scatter-pot " class="pt-40 bg-white">
    <div id="header">
      <div>
        <div class="flex justify-center">
          <p>เมื่อนำการผูกขาดของตระกูลและพรรคมาเทียบกัน จังหวัด</p>
          <Autocomplete :items="district" holder="เลือกจังหวัด" />
        </div>
        <p
          class="mt-3"
          v-html="
            'มีการผูกขาดของตระกูล <b>สูง</b> ขณะที่การผูกขาดของพรรค <b>ต่ำ</b>'
          "
        />
        <p class="mt-5 opacity-50 body5">(คลิกเพื่อดูจังหวัดอื่นๆ ได้)</p>
      </div>
      <div id="pot" class="relative"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as d3 from 'd3'
import _ from 'lodash'
export default {
  computed: {
    ...mapState(['HHI_Overall', 'selected_district', 'district']),
  },
  data() {
    return {
      pot: null,
      svg: null,
    }
  },

  mounted() {
    let data = this.HHI_Overall
    let drop = _.remove(data, (d) => d.district === this.selected_district)
    this.SET_HHI_OVERALL([...data, ...drop])

    this.draw()
  },
  methods: {
    ...mapMutations(['SET_HHI_OVERALL', 'SET_DISTRICT']),
    draw() {
      this.pot = d3.select('#pot')
      let margin = { top: 10, right: 30, bottom: 60, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom

      this.svg = d3
        .select('#pot')
        .append('svg')
        .attr('class', 'mx-auto mt-16')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      var x = d3.scaleLinear().domain([0, 1]).range([0, width])
      this.svg
        .append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .call((g) => g.selectAll('line').remove())

      // Add Y axis
      var y = d3.scaleLinear().domain([0, 1]).range([height, 0])
      this.svg
        .append('g')
        .call(d3.axisLeft(y))
        .call((g) => g.selectAll('line').remove())

      // Add dots
      this.svg
        .append('g')
        .selectAll('dot')
        .data(this.HHI_Overall)
        .enter()
        .append('circle')
        .attr('class', (d) => d.district)
        .attr('cx', function (d) {
          return x(d.HHI_surname)
        })
        .attr('cy', function (d) {
          return y(d.HHI_party)
        })
        .attr('r', 5)
        .style('fill', function (d) {
          if (d.HHI_party > 0.7) {
            return '#F15A29'
          } else if (d.HHI_surname > 0.7) {
            return '#2BA3B4'
          } else if (d.HHI_party < 0.7 && d.HHI_party > 0.5) {
            return '#CBA295'
          } else if (d.HHI_surname < 0.7 && d.HHI_surname > 0.5) {
            return '#95B6BA'
          } else {
            return '#BDBDBD'
          }
          console.log(d)
          return 'red'
        })
        .style('cursor', 'pointer')
        .on('mouseenter', (e) => this.mouseenter(e))
        .on('mouseout', (e) => this.mouseout(e))
        .on('click', (e) => this.click(e))

      this.pot.append('div').attr('class', 'tooltip')
      // gridlines in x axis function
      function make_x_gridlines() {
        return d3.axisBottom(x).ticks(10)
      }

      // gridlines in y axis function
      function make_y_gridlines() {
        return d3.axisLeft(y).ticks(10)
      }

      // add the X gridlines
      this.svg
        .append('g')
        .attr('class', 'grid')
        .attr('transform', 'translate(0,' + height + ')')
        .style('opacity', '0.1')
        .call(make_x_gridlines().tickSize(-height).tickFormat(''))

      // add the Y gridlines
      this.svg
        .append('g')
        .attr('class', 'grid')
        .style('opacity', '0.1')
        .call(make_y_gridlines().tickSize(-width).tickFormat(''))

      this.svg.selectAll('text').style('opacity', (d) => {
        if (d != 0 && d != 0.5 && d != 1) {
          return 0.5
        } else {
          return 1
        }
      })

      this.svg
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', width / 2 + 35)
        .attr('y', height + margin.top + 35)
        .text('ยึดโยงตระกูล')
        .style('font-size', '14px')
        .style('font-weight', 'bold')

      // Y axis label:
      this.svg
        .append('text')
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', -margin.left + 15)
        .attr('x', -margin.top - width / 2 + 60)
        .text('ยึดโยงพรรค')
        .style('font-size', '14px')
        .style('font-weight', 'bold')

      this.svg
        .selectAll(`.${this.selected_district}`)
        .style('stroke', 'black')
        .style('stroke-width', '2px')
    },

    mouseenter(e) {
      let district = _.get(e, 'target.className.baseVal')

      this.pot
        .select(`.tooltip`)
        .style('top', e.offsetY + 'px')
        .style('left', e.clientX + 15 + 'px')
        .style('display', 'inline')
        .text(district)
    },
    mouseout() {
      d3.selectAll('.tooltip').style('display', 'none')
    },
    click(e) {
      let district = _.get(e, 'target.className.baseVal')
      this.SET_DISTRICT(district)
    },
  },
  watch: {
    selected_district(newValue, oldValue) {
      this.svg
        .selectAll(`.${oldValue}`)
        .style('stroke', 'black')
        .style('stroke-width', '0')
      this.svg
        .selectAll(`.${newValue}`)
        .style('stroke', 'black')
        .style('stroke-width', '2px')
    },
  },
}
</script>

<style></style>
