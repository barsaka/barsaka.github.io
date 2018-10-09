
var time = new Vue({
  el: '#time',
  data: {
    message:'一寸光阴一寸金，今天是：' + new Date().toLocaleString()
  }
})
var time1 = new Vue({
  el: '#time1',
  data: {
    message:'再次提醒一下，现在是' + new Date().toLocaleString()
  }
})
var carousel=new Vue({
  el: '#carousel',
  data: {
      slideList: [
          {
              "clickUrl": "#",
              "desc": "第一张",
              "image": "resourse/rolling/angleofdezth.png"

              
          },
          {
          "clickUrl": "#",
          "desc": "第二张",
          "image": "resourse/rolling/myhero.png"
          },
          {
              "clickUrl": "#",
              "desc": "第三张",
              "image": "../resourse/rolling/overload.jpg"
          }
      ],
      currentIndex: 0,
      timer: ''
  },
  methods: {
      go() {
          this.timer = setInterval(() => {
              this.autoPlay()
          }, 4000)
      },
      stop() {
          clearInterval(this.timer)
          this.timer = null
      },
      change(index) {
          this.currentIndex = index
      },
      autoPlay() {
          this.currentIndex++
          if (this.currentIndex > this.slideList.length - 1) {
              this.currentIndex = 0
          }
      }
  },
 created() {
   this.$nextTick(() => {
     this.timer = setInterval(() => {
       this.autoPlay()
     }, 4000)
   })
 }
})
