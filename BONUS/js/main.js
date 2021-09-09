Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            playVisible: true,
            phCounter: 0,
            photos: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg", "img/image6.jpg"],
            idInterval: null
        },
        mounted() {
            // this.startSlide()
            document.addEventListener("keydown", (e) => {
                if (e.key == "ArrowRight") {
                    this.nextPhoto();
                } else if (e.key == "ArrowLeft") {
                    this.prevPhoto();
                }
            })
        },
        methods: {
            prevPhoto() {
                this.phCounter -= 1;
                if (this.phCounter < 0) this.phCounter = (this.photos.length - 1)
            },
            nextPhoto() {
                this.phCounter += 1;
                if (this.phCounter == (this.photos.length)) this.phCounter = 0
            },
            startSlide() {
                setInterval(() => {
                    this.nextPhoto();
                },3000)
            },
            toggleVisibility() {
                this.playVisible = !this.playVisible;
                this.startStopSlider();
            },
            startStopSlider() {
                if (this.playVisible == false) {
                    this.idInterval = setInterval( () => { this.nextPhoto() }, 3000);
                } else {
                    clearInterval(this.idInterval);
                }
            },
            changePhoto(i) {
                this.phCounter = i;
            }
        },
    }
)