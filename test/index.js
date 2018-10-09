
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
 var carousel=new Vue({
    el: '#carousel',
    data: {
        slideList: [
            {
                "clickUrl": "#",
                "desc": "nhwc",
                "image": "../resourse/rolling/angleofdezth.png"
            },
            {
                "clickUrl": "#",
                "desc": "hxrj",
                "image": "../resourse/rolling/myhero.png"
            },
            {
                "clickUrl": "#",
                "desc": "rsdh",
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