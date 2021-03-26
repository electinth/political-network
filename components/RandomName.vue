<template>
  <div
    id="random-name"
    class="flex flex-col bg-black-400"
    style="transition-duration: 1300ms"
  >
    <Tooltip />
    <div id="random-title-wrapper" class="text-white duration-500 opacity-100">
      <span class="relative z-20">
        <p id="title" class="w-2/3 mx-auto font-bold md:w-full body1">
          ที่สุดของตระกูลการเมืองไทย ถิ่นไหน.. ใครครอง
        </p>
        <p id="subtitle" class="w-2/3 mx-auto md:w-full body3">
          มีเลือกตั้งหรือวาระการเมืองทีไร คุ้นๆ กันไหมกับนามสกุลนี้
        </p>
      </span>
    </div>
    <div id="random-wrapper" class="w-full" style="transition-duration: 1.5s">
      <div id="surname-wrapper">
        <div
          class="overflow-hidden text-yellow-400 whitespace-no-wrap surname"
          id="surname"
        >
          {{ sampling[counter].surname }}
        </div>
        <div
          v-if="stop"
          class="px-3 py-1 m-auto duration-1000 rounded-lg opacity-0 cursor-pointer body5 text-black-300"
          id="rerandom"
          style="border: 1px solid #3d3d3d; width: max-content"
          @click="re_random"
        >
          สุ่มตระกูลใหม่
        </div>
      </div>
      <div
        id="choose-bottom"
        class="flex justify-center px-8 py-1 m-auto mt-10 text-pink-400 rounded opacity-100 cursor-pointer hover:bg-pink-400 hover:text-black-400 body3"
        style="border: 1px solid #fc6cff; width: max-content"
        @click="picked_surname"
      >
        เลือก
      </div>
      <div id="wrapper" class="relative opacity-0" v-if="is_wrapper">
        <div
          id="content"
          class="absolute w-full bg-black-400"
          style="
            transition-duration: 1300ms;
            transform: translateX(-50%);
            left: 50%;
          "
        >
          <span class="flex flex-col items-center mt-5" v-if="$mq != 'mobile'">
            <p class="body2">เป็น 1 ในตระกูลที่ทรงอิทธิพลทางการเมือง</p>
            <span class="flex items-center">
              <p class="body2">ในช่วง 3 ทศวรรษที่ผ่านมาทั้งใน</p>
              <p class="font-bold text-purple-400 body1">ระดับท้องถิ่น</p>
              <p class="body2">และ</p>
              <p class="font-bold text-blue-400 body1">ระดับประเทศ</p>
            </span>
          </span>

          <span class="flex flex-col items-center mt-5" v-if="$mq === 'mobile'">
            <p class="body2">เป็น 1 ในตระกูลที่ทรงอิทธิพลทาง</p>
            <p class="body2">การเมืองในช่วง 3 ทศวรรษที่ผ่านมา</p>
            <span class="flex items-center">
              <p class="body2">ทั้งใน</p>
              <p class="font-bold text-purple-400 body1">ระดับท้องถิ่น</p>
              <p class="ml-1 body2">และ</p>
              <p class="ml-1 font-bold text-blue-400 body1">ระดับประเทศ</p>
            </span>
          </span>
          <PassAndFuture :filter_name="filter_name" />
          <div
            id="insight"
            class="w-5/6 m-auto mt-20 mb-6 md:w-6/12 body2"
            v-html="selected.insight"
          ></div>
          <PartyList :filter_name="filter_name" :selected="selected" />
          <p class="mt-20 body2">และยังเป็นผู้มีอิทธิพลในพื้นที่จังหวัด</p>
          <p class="mt-5 mb-20 font-bold h2">{{ selected.district }}</p>
          <Cluster type="surname-cluster" />
          <Cluster type="party-cluster" />
          <ScatterPot />
          <CheckSurname />
          <Inpower />
          <div
            id="relation"
            class="relative flex flex-col items-center justify-center h-screen overflow-hidden text-white bg-black-400"
          >
            <div class="relative z-10 mx-5 font-bold md:mx-0 md:w-1/2 h1">
              ความสัมพันธ์ทางเครือญาติ และการครองอำนาจของตระกูลใหญ่
              ในระบบการเมืองไทย
            </div>
            <div class="relative z-10 mx-5 mt-10 body2 md:w-1/2 md:mx-0">
              เมื่อมีการเลือกตั้งหรือวาระทางการเมือง
              เรามักจะคุ้นเคยกับชื่อตระกูลที่ทรงอิทธิพลทางการเมือง
              หรือที่เรียกกันว่า “บ้านใหญ่”
              ซึ่งตระกูลเหล่านี้มักเป็นตระกูลที่ทรงอิทธิพลทางการเมืองมาเป็น
              เวลานาน และมีความยึดโยงกับพื้นที่ในแต่ละจังหวัด
            </div>

            <lottie
              class="absolute inset-0 z-0"
              :style="{
                transform: $mq === 'mobile' ? 'scale(4)' : 'scale(1.5)',
              }"
              id="lottie_relation"
              :options="{
                animationData: relation,
                loop: true,
              }"
            />
          </div>
          <div id="why" class="pt-24 bg-white">
            <div id="title" class="mx-5 font-bold h3 md:w-5/12 md:mx-auto">
              ทำไมการเมืองไทยจึงมีตระกูลที่ทรงอิทธิพล ทางการเมือง?
            </div>
            <div id="body-why" class="py-16 body2">
              <div v-for="item in why" :key="item.id">
                <p class="pt-10 font-bold">{{ item.title }}</p>
                <p class="pt-8 mx-5 md:mx-auto md:w-2/5">{{ item.body }}</p>
              </div>
            </div>
          </div>
          <div id="county" style="background: #fcffed">
            <div id="title-county" class="pt-20 font-bold body2">
              <p>ในต่างประเทศ มีตระกูลทรงอิทธิพล</p>
              <p>
                แบบเครือญาติ (Political Families หรือ Political Dynasties)
                เช่นกัน
              </p>
            </div>
            <div
              id="body"
              class="flex flex-col py-20 mx-auto md:flex-row"
              :style="{ width: $mq === 'mobile' ? '95%' : '75%' }"
            >
              <div
                v-for="item in country"
                :key="item.id"
                class="flex flex-col items-center flex-1 px-8 py-8 mx-4 my-2 bg-white md:my-0"
                style="height: max-content"
              >
                <img :src="item.img" class="rounded-full" style="width: 40px" />
                <p class="pt-12">{{ item.text }}</p>
              </div>
            </div>
          </div>
          <div id="pros-cons" class="pt-24 bg-white">
            <span id="title" class="font-bold h3">
              <p>การมีตระกูลที่ทรงอิทธิพล</p>
              <p>ส่งผลอย่างไรกับสังคมและการเมืองไทย?</p>
            </span>

            <div id="pros" class="pt-32">
              <p class="font-bold body2">ข้อดี</p>
              <div
                v-for="(item, index) in pros"
                :key="index"
                class="flex flex-col mt-10 body2"
              >
                <p>{{ index + 1 }}.</p>
                <p class="mx-5 md:w-2/5 md:mx-auto">{{ item }}</p>
              </div>
            </div>

            <div id="pros" class="pt-32">
              <p class="font-bold body2">ข้อเสีย</p>
              <div
                v-for="(item, index) in cons"
                :key="index"
                class="flex flex-col mt-10 body2"
              >
                <p>{{ index + 1 }}.</p>
                <p class="mx-5 md:w-2/5 md:mx-auto">{{ item }}</p>
              </div>
            </div>
          </div>
          <div id="confident" class="pt-24 bg-white">
            <div
              id="title-confident"
              class="pb-24 mx-5 font-bold h3 md:w-1/2 md:mx-auto"
            >
              แล้วประชาชนจะมั่นใจได้อย่างไร กับการเมืองไทยที่มีระบบเครือญาติ
            </div>
            <div id="body-confident" class="pb-16">
              <div
                v-for="item in confident"
                :key="item.id"
                class="mx-5 md:w-3/6 md:mx-auto body2"
              >
                <p class="pt-16 font-bold">{{ item.title }}</p>
                <p class="pt-5">{{ item.body }}</p>
              </div>
            </div>
            <div id="bottom" class="flex flex-wrap justify-center pb-16 mt-16">
              <a
                class="px-4 py-3 mx-2 my-3 rounded"
                style="border: 1px solid #000000"
                href="https://elect.in.th/political-network-read"
                target="_blank"
              >
                อ่านบทความเพิ่มเติม
              </a>
              <a
                href="https://elect.in.th/political-network-data"
                target="_blank"
                class="px-4 py-3 mx-2 my-3 rounded"
                style="border: 1px solid #000000"
              >
                ดาวน์โหลดข้อมูล
              </a>
            </div>
            <div id="sharer" class="flex justify-center pb-20 mt-16">
              <social-sharer :url="BASE_URL"></social-sharer>
            </div>
            <div id="footer" class="mt-5">
              <elect-footer></elect-footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapMutations } from 'vuex'
import Lottie from 'vue-lottie/src/lottie.vue'
import * as relation from '~/assets/images/relation.json'
export default {
  data() {
    return {
      sampling: [{ name: 'sampling' }],
      counter: 0,
      interval: null,
      timer: 50,
      stop: false,
      diff_top: 0,
      is_wrapper: false,
      filter_name: [],
      relation: relation.default,
      BASE_URL: 'https://electinth.github.io/political-network/',
      // BASE_URL: 'https://elect.in.th/political-network/',
      why: [
        {
          title: 'มีทุนทางเศรษฐกิจ',
          body:
            'มักเริ่มจากการสะสมทุนทางเศรษฐกิจ เช่น ทำธุรกิจ ไม่ว่าจะเป็นโรงสี รับเหมาก่อสร้าง จนกลายเป็นผู้มั่งคั่งในพื้นที่ และได้ขยายธุรกิจสู่เครือญาติ ต่อมาขยายเครือข่ายสู่พรรคพวก ก่อเกิดเป็นกลุ่มต่างๆ เมื่อเข้าสู่การเมืองจากความมั่งคั่งและเครือข่ายที่ใหญ่ทำให้ตระกูลเหล่านี้จึงมีอิทธิพลมาก',
        },
        {
          title: 'มีคนรู้จักในภาครัฐ',
          body:
            'หากสามารถส่งเครือญาติหรือมีพวกพ้องของตนอยู่ในภาครัฐได้ จะช่วยอำนวยประโยชน์ให้ตระกูลในด้านเศรษฐกิจ การเมือง และสร้างการเป็นที่รู้จักได้',
        },
        {
          title: 'คนเลือกจากผลงาน',
          body:
            'ด้วยความมั่งคั่ง ตระกูลเหล่านี้จึงมีทุนพื้นฐานในการพัฒนาท้องถิ่นของตนได้ ประกอบกับเมื่อเข้าสู่การเมือง ก็สามารถเข้าไปผลักดันโครงการให้เกิดในท้องถิ่นของตน ส่งผลให้ความเจริญเห็นได้ชัดเจน ยิ่งอยู่ยาวนานงานยิ่งเป็นที่ประจักษ์ กลายเป็นผลงานของตระกูล  เช่น สุพรรณบุรีโมเดล',
        },
        {
          title: 'วัฒนธรรมอุปถัมภ์',
          body:
            'ด้วยทุนและเครือข่าย รวมถึงความเชื่อใจในการทำงานที่สะสมมา ทำให้ตระกูลเหล่านี้กลายเป็นผู้อุปถัมภ์ของคนในพื้นที่ที่ต้องการความช่วยเหลือและพึ่งพา เมื่อถึงวาระเลือกตั้ง เลยทำให้กลายเป็นความช่วยเหลือต่างตอบแทน ตระกูลเหล่านี้จึงมักได้รับเลือกอยู่เสมอ',
        },
      ],
      country: [
        {
          img: require('~/assets/images/india.svg'),
          text:
            'ในอินเดียที่มีความสัมพันธ์ทางเครือญาติหรือความเป็นตระกูลอิทธิพลสูง ตระกูลการเมืองที่เก่าแก่และอยู่ในการเมืองนานที่สุด คือ ‘ตระกูลเนห์รู’ ซึ่งได้เกี่ยวดองกับตระกูลคานธีและส่งเครือญาติเข้าสู่การเมืองในบทบาทสำคัญตลอด ปัจจุบันทายาทรุ่นล่าสุดของตระกูลเนห์รู-คานธีถูกจับตามองว่าจะก้าวสู่นายกรัฐมนตรีอินเดียในอนาคต',
        },
        {
          img: require('~/assets/images/china.svg'),
          text:
            'ในจีน สมัยที่พรรคคอมมิวนิสต์จีนเข้าปกครองประเทศ กลุ่มผู้นำพรรครุ่นแรกก็ช่วยกันสร้างพรรคให้มั่นคง พร้อมทั้งปูทางให้กับเครือญาติลูกหลานให้เติบโตและได้ผลประโยชน์ในวงธุรกิจในพรรคอีกด้วย ที่เห็นอย่างชัดเจนคือ ประธานาธิบดีสี จิ้นผิง เป็นบุตรชายของสี จงชุน อดีตผู้นำพรรครุ่นแรกคนสนิทของประธานเหมา เจ๋อตง อีกคนนึงที่เติบโตและได้ผลประโยชน์ทางธุรกิจคือ ป๋อ ซีไหล บุตรของ ป๋อ อีปอ หนึ่งในกลุ่มแปดเซียนที่นำโดยเติ้ง เสี่ยว ผิง ผู้นำพรรคคอมมิวนิสต์ระดับอาวุโสร่วมกับประธานเหมา',
        },
        {
          img: require('~/assets/images/usa.svg'),
          text:
            'ในสหรัฐอเมริกาก็มีตระกูลทางการเมืองเช่นกัน เช่น ตระกูลเคนเนดี ที่มีบทบาทในด้านธุรกิจและการเมือง แต่ลักษณะไม่เหมือนกับไทย อินเดีย หรือจีนมากนัก เพราะในอเมริกาค่อนข้างยึดโยงพรรคสูง และประชาชนกระตือรือร้นในการมีส่วนร่วมและแสดงออกทางการเมืองมาก ทำให้สิ่งที่มุ่งเน้นเป็นนโยบายมากกว่าเครือญาติ',
        },
      ],
      pros: [
        'เป็นศูนย์รวมความร่วมมือจากประชาชน เพราะเป็นที่รู้จักและได้รับความนิยมจากประชาชน ทำให้การขอความร่วมมือค่อนข้างง่าย',
        'เป็นประโยชน์ในการพัฒนาท้องถิ่น เพราะมีทุนและเครือข่ายในการปฏิบัติงาน สามารถให้ความช่วยเหลือและผลักดันทั้งงบประมาณ สาธารณูปโภคต่างๆ ได้อย่างรวดเร็ว',
        'เกิดความรวดเร็ว ลดความขัดแย้งในการทำนโยบายหรือโครงการ เนื่องจากตระกูลทรงอิทธิพล จะมีเครือข่ายทั้งเครือญาติและกลุ่ม ทำให้ความเห็นต่างค่อนข้างน้อย ส่งผลให้การขับเคลื่อนนโยบายเป็นไปได้ง่าย รวดเร็ว ไม่มีข้อขัดแย้งมาก',
      ],
      cons: [
        'ไม่ส่งเสริมความเป็นประชาธิปไตยอย่างเสรี ในเชิงการเปิดรับฟังความคิดเห็นที่แตกต่าง การแข่งขันเนื่องจากตระกูลทรงอิทธิพลมีลักษณะเครือญาติและพวกพ้องสูง ทำให้คนที่ต้องการแสดงความคิดเห็นที่แตกต่างทำได้ยาก อีกทั้งยังถูกกีดกันในการแข่งขันทั้งด้านเศรษฐกิจ และการเมือง',
        'การกระจุกตัวของผลประโยชน์ ถึงแม้จะมีความช่วยเหลือให้ประชาชนในท้องถิ่นของตน แต่ผลประโยชน์หลักก็ยังคงอยู่ที่ตระกูลทรงอิทธิพลและเครือข่าย',
        'นโยบายไม่มีความหลากหลายและความสร้างสรรค์มากนัก เนื่องจากเป็นเครือข่ายเดียวกันและการทรงอิทธิพลมาอย่างยาวนาน  ทำให้นโยบายที่ถูกกำหนดขึ้นถูกกำหนดจากตระกูลที่มีอิทธิพลฝั่งเดียว ประกอบกับการขัดแย้งที่น้อยส่งผลให้ไม่มีความหลากหลายและสร้างสรรค์มากนัก',
        'สร้างการฝังรากลึกของระบบอุปถัมภ์ เนื่องจากอิทธิพลของตระกูลใหญ่ ทั้งด้านเศรษฐกิจ กลุ่มเครือข่าย บารมี ทำให้เกิดความพึ่งพาสูง ส่งผลให้เกิดการต่างตอบแทนขึ้น ซึ่งสามารถขยายและฝังรากลึกเป็นระบบอุปถัมภ์',
      ],
      confident: [
        {
          title:
            'รัฐส่วนกลางควรส่งเสริมให้มีการกระจายอำนาจให้ท้องถิ่นอย่างแท้จริง',
          body:
            'เนื่องจากระบบเครือญาติในการเมืองไทย มีความยึดโยงกับพื้นที่ ฉะนั้นต้องมีองค์การปกครองท้องถิ่นนำอำนาจของรัฐ ที่กระจายให้มาพึ่งพาและตัดสินใจในการบริหารกิจการในพื้นที่ของตนได้ด้วยตัวเอง เมื่อท้องถิ่นมีอำนาจเต็มที่ ประชาชนก็สามารถติดต่อเสนอความต้องการกับท้องถิ่นได้โดยตรง และหากท้องถิ่นไม่ปฏิบัติสามารถร้องเรียนหรือรัฐส่วนกลางสามารถมาตรวจสอบได้ ลดการพึ่งพาจากตระกูลอิทธิพลและการเมืองแบบเครือญาติ',
        },
        {
          title: 'ประชาชนเองก็ต้องทำหน้าที่ตรวจสอบการทำงาน',
          body:
            'ไม่ว่าจะเป็นคนจากตระกูลทรงอิทธิพลหรือใครก็ตามที่เข้าไปมีบทบาททางการเมืองทั้งระดับท้องถิ่นและระดับชาติ ประชาชนควรจะทำความเข้าใจในบทบาทหน้าที่และร่วมกันตรวจสอบการทำงาน เพื่อคานอำนาจและสร้างมั่นใจให้กับตนเองว่าผู้ที่ได้รับเลือกสามารถตอบสนองความต้องการได้อย่างแท้จริง',
        },
        {
          title: 'เปิดเผยข้อมูล สร้างความโปร่งใส',
          body:
            'การเมืองไทยที่มีระบบเครือญาติอาจไม่ได้เป็นปัญหามากนัก หากนโยบาย โครงการกระบวนการจัดซื้อจัดจ้าง เปิดเผยข้อมูลอย่างตรงไปตรงมา และโปร่งใส ประชาชนสามารถเข้าถึงได้',
        },
        {
          title: 'สร้างพื้นที่ในการแสดงความคิดเห็นหรือตรวจสอบ',
          body:
            'ควรมีพื้นที่ที่เปิดให้ประชาชน เข้าไปถกเถียง แลกเปลี่ยนความคิดเห็นในเรื่องสาธารณะได้ เป็นจุดที่ขับเคลื่อนความเป็นพลเมืองและเชื่อมทั้งรัฐและประชาชน เสนอความต้องการของตนเองได้',
        },
      ],
    }
  },
  components: {
    Lottie,
  },
  computed: {
    ...mapState(['categories', 'top_20', 'top_20_name', 'selected']),
  },

  mounted() {
    this.random_surname()
    this.sampling = _.sampleSize(this.categories, 25)
    setTimeout(() => {
      this.diff_top = document
        .getElementById('random-wrapper')
        .getBoundingClientRect().top
    }, 0)
  },
  methods: {
    ...mapMutations(['SELECTED']),
    picked_surname() {
      this.SELECTED(_.sample(this.top_20))
      this.sampling = [...this.sampling, this.selected]
      this.filter_name = _.filter(
        this.top_20_name,
        (n) => n.surname === this.selected.surname
      )
      this.stop = true
      this.timer *= 2.5
      document.getElementById('choose-bottom').style.display = 'none'
    },

    random_surname() {
      this.counter++
    },
    re_random() {
      this.stop = false
      this.is_wrapper = false
      this.timer = 50
      this.counter = 0
      this.sampling.pop()
      document.getElementById('random-title-wrapper').style.opacity = '1'
      document.getElementById('random-wrapper').style.transform =
        'translateY(0)'
      document.getElementById('surname').style.color = 'white'
      document.getElementById('random-name').style.background = 'black'
      document.getElementById('rerandom').style.opacity = '0'
      document.getElementById('wrapper').style.opacity = '0'
      document.getElementById('choose-bottom').style.display = 'block'
      document.getElementById('surname').style.color = '#F2FFA6'
    },
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue < this.sampling.length - 1) {
        setTimeout(this.random_surname, this.timer)
      } else if (!this.stop) {
        this.counter = 0
      } else {
        this.is_wrapper = true
        document.getElementById(
          'random-wrapper'
        ).style.transform = `translateY(-${this.diff_top}px)`
        document.getElementById('random-title-wrapper').style.opacity = '0'
        setTimeout(() => {
          document.getElementById('surname').style.color = 'black'
          document.getElementById('content').style.background = '#F2FFA6'
          document.getElementById('random-name').style.background = '#F2FFA6'
          document.getElementById('rerandom').style.opacity = '1'
          document.getElementById('wrapper').style.opacity = '1'
        }, 500)
      }
    },
  },
}
</script>
