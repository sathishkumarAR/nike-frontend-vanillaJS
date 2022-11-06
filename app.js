const products = [
    {
      id: 1,
      title: "Air Force",
      price: 900,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
        id: 2,
        title: "Crater",
        price: 600,
        colors: [
          {
            code: "black",
            img: "./img/crater.png",
          },
          {
            code: "lightgray",
            img: "./img/crater2.png",
          },
        ],
      },
    {
      id: 3,
      title: "Air Jordan",
      price: 1200,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Blazer",
      price: 999,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 1199,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


const wrapper = document.getElementById("sliderWrapper");
const menuItems= document.querySelectorAll(".menuItem")

let choosenProduct=products[0];

const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");



menuItems.forEach((item, index) => {
    //changing slider
    item.addEventListener("click",()=>{
        wrapper.style.transform =`translateX(${-100 * index}vw)`;
    
        choosenProduct=products[index];
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="₹"+choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img;

        currentProductColors.forEach((color,index)=>{
            console.log(color)
            color.style.backgroundColor=choosenProduct.colors[index].code;
        })
    })
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="inherit"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})

const buyNowButton= document.querySelector(".productButton");
const payment= document.querySelector(".payment");
const closeModal= document.querySelector(".close");

buyNowButton.addEventListener("click",()=>{
    payment.style.display="flex";
})
closeModal.addEventListener("click",()=>{
    payment.style.display="none";
})


