const $ = document
//                slider            //
const imgTagSlider = $.querySelector('.imgSlider')
let imgSrcArray = ['img/Slider/11.jpg', 'img/Slider/12.jpg', 'img/Slider/13.jpg']
let count = 0

function nextImgSlider() {

    if (count === 0) {
        count = imgSrcArray.length
        imgTagSlider.src = imgSrcArray[count]
    }
    count--
    console.log(count)
    imgTagSlider.src = imgSrcArray[count]
}

setInterval(nextImgSlider, 3000)
nextImgSlider()
