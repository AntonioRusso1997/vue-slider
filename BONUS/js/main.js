Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            phCounter: 0,
            photos: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg", "img/image6.jpg"]
        },
        methods: {
            prevPhoto() {
                this.phCounter -= 1;
                if (this.phCounter < 0) this.phCounter = (this.photos.length - 1)
            },
            nextPhoto() {
                this.phCounter += 1;
                if (this.phCounter == (this.photos.length)) this.phCounter = 0
            }
        }
    }
)