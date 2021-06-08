let arr = [
            "assets/images/1.webp",
            "assets/images/2.webp",
            "assets/images/3.webp",
            "assets/images/4.webp",
            "assets/images/5.jpg",
            "assets/images/6.webp",
            "assets/images/7.webp",
            "assets/images/8.jpg",
            "assets/images/9.jpg",
            "assets/images/10.jpg",
            "assets/images/11.jpg",
            "assets/images/12.jpg",
            "assets/images/13.webp",
            "assets/images/14.jpg",
            "assets/images/15.jpg",
            "assets/images/16.jpg",
            "assets/images/17.jpg",
            "assets/images/18.jpg",
            "assets/images/19.jpg",
            "assets/images/20.webp",
]

const options = {
    root: null,
    rootMargin: '0px 0px -200px 0px',
    threshold: 0.5
}
function render(arr){
   result = '';
    for(let i = 0; i < arr.length;i++){
        result += `<img src="assets/images/Nv2.gif" alt="" data-src="${arr[i]}">` 
    }
return result
}

document.querySelector('.box-img').innerHTML = render(arr)
console.log(document.querySelector('.box-img'))

const images = document.querySelectorAll('[data-src]'),
      countArea = document.querySelector('.counter');

let count = 0;

function preloadImage(image){
    const src = image.getAttribute('data-src')
        if(!src){
            return;
        }
        image.src = src;
       setCounter()  
}

function setCounter(){
    count++;
    countArea.innerHTML = `${count} images loaded from ${images.length}`;
    if(count === images.length){
        countArea.classList.add('counter-full-load');
    } 
    setTimeout(()=>{
        if(count === images.length){
           countArea.classList.remove('counter-full-load');
           countArea.classList.add('hide'); 
        }
       
    }, 3000);
    
}

function handleImg(myImg, observer){
    myImg.forEach(myImgSingle => {         
        if(myImgSingle.intersectionRatio > 0){
            preloadImage(myImgSingle.target)
        }
    })
}

const observer = new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        }
    })
}, options)

images.forEach(img => observer.observe(img));