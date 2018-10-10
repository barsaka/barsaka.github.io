
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
              "desc": "刺客信条",
              "image": "resourse/vue/theassassin's.jpg"           
          },
          {
              "clickUrl": "#",
              "desc": "黑魂",
              "image": "resourse/vue/secound.jpg"
          },
          {
            "clickUrl": "#",
            "desc": "使命召唤",
            "image": "resourse/vue/three.jpg"
        },
        {
            "clickUrl": "#",
            "desc": "shilaimu",
            "image": "resourse/vue/four.jpg"
        },
        {
            "clickUrl": "#",
            "desc": "overload",
            "image": "resourse/vue/five.jpg"
        },
        {
            "clickUrl": "#",
            "desc": "fade",
            "image": "resourse/vue/six.jpg"
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