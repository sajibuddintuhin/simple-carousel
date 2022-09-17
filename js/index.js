const images = [
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg",
    "img/img-4.jpg",
    "img/img-5.jpg",
    "img/img-6.jpg",
    "img/img-7.jpg",
    "img/img-8.jpg",
];

let imgIndex = 0;
const img = document.getElementById('carousel-img');
setInterval(()=>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src',imgLink);
    imgIndex++;
},2050);