'use strict';

// Burger
const burger = document.querySelector('.burger');
const burgerMenu = document.getElementById('burgerMenu');
const burgerRemove = document.getElementById('burgerRemove');
let last_known_scroll_position = 0;


burger.addEventListener('click',()=>{
	burgerMenu.classList.toggle('_avtive')

});
burgerRemove.addEventListener('click',()=>{
    burgerMenu.classList.toggle('_avtive')    
})


// Slider
const sliderContainer = document.getElementById('sliderContainer')

const sliderTextContaier = document.createElement('div')
sliderTextContaier.classList.add('slider-text-contaier')
const sliderTitle = document.createElement('h1')
const sliderParagraph = document.createElement('p')
const sliderButton = document.createElement('button')

const sliderImageContaier = document.createElement('div')
sliderImageContaier.classList.add('slider-image-contaier')
const sliderImage = document.createElement('img')




sliderContainer.appendChild(sliderTextContaier)
sliderTextContaier.appendChild(sliderTitle)
sliderTextContaier.appendChild(sliderParagraph)
sliderTextContaier.appendChild(sliderButton)
sliderContainer.appendChild(sliderImageContaier)
sliderImageContaier.appendChild(sliderImage)


// slider buttons
const buttonNext = document.getElementById('nextButton'),
    buttonBack = document.getElementById('backButton');

// slides
const dots = document.querySelectorAll('.slider-dots button')
let counter = 0;
let timerID = null
let slidesInfo = [
    {
        id: 'one',
        validity:'3 недели',
        image:'Rocket',
        title: 'Криптоинвестиции: успешный старт',
        paragraph: 'Базовые знания для новичков.Поможем разобраться с биржей, купить криптовалюту и совершить первые выгодные сделки с нуля.',
        photo:'Rocket2.png'
    },
    {
        id: 'two',
        validity:'от 2 до 8 месяцев',
        image:'Mining',
        title: 'Мастерская трейдинга:практика и заработок',
        paragraph: 'Полное погружение в трейдинг: практика работы с профессио-нальными инструментами и стра-тегии для максимальной прибыли.',
        photo:'Mining2.png'
    },
    {
        id: 'three',
        validity:'от 1 месяца',
        image:'Secured',
        title: 'Индивидуальное сопро-вождение эксперта',
        paragraph: 'Премиальный пакет услуг. Индивидуальные уроки, постоянная связь, консультационное управление.',
        photo:'Secured2.png'
    },
    {
        id: 'four',
        title: 'Учим зарабатывать на криптовалюте с нуля',
        paragraph: 'Онлайн-школа и профессиональное сообщество',
        photo:'slider-image.png'
    }
]



document.addEventListener("DOMContentLoaded", ()=>{
    sliderTitle.textContent = slidesInfo[3].title
    sliderParagraph.textContent = slidesInfo[3].paragraph
    sliderImage.src = `./images/${slidesInfo[3].photo}`
    sliderImage.classList.remove('slider-image-contaier-img');
    sliderButton.textContent = 'Выбрать курс'
});


for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (e) => {
        dots[counter].classList.remove('active');
        counter = i;
        dots[counter].classList.add('active');
    });

}


const changeSlide = () => {

    dots[counter].classList.remove('active');

    if (counter === slidesInfo.length - 1 ) {
        counter = 0;
    } else {
        counter++;
    }
    sliderTitle.textContent = slidesInfo[counter].title
    sliderParagraph.textContent = slidesInfo[counter].paragraph
    sliderImage.src = `./images/${slidesInfo[counter].photo}`
    sliderImage.classList.add('slider-image-contaier-img');
    dots[counter].classList.add('active');


};


buttonNext.addEventListener('click', () => {
    clearInterval(timerID)
    dots[counter].classList.remove('active');

    if (counter === slidesInfo.length - 1 ) {
        counter = 0;
    } else {
        counter++;
    }
    sliderTitle.textContent = slidesInfo[counter].title
    sliderParagraph.textContent = slidesInfo[counter].paragraph
    sliderImage.src = `./images/${slidesInfo[counter].photo}`
    dots[counter].classList.add('active');

})
backButton.addEventListener('click', () => {
    dots[counter].classList.remove('active');

    if (counter === 0) {
        counter = slidesInfo.length - 1 ;
    } else {
        counter--;
    }
    sliderTitle.textContent = slidesInfo[counter].title
    sliderParagraph.textContent = slidesInfo[counter].paragraph
    dots[counter].classList.add('active');
    sliderImage.src = `./images/${slidesInfo[counter].photo}`
})

timerID = setInterval(changeSlide, 2000);


// Courses
const coursesCards = document.getElementById('coursesCards');

for (let i = 0; i < 3; i++) {
    
    const coursesDiv = document.createElement('div');
    
    const cardText = document.createElement('div');     
    cardText.classList.add('card-text');
    const cardTextSpan = document.createElement('span');
    cardTextSpan.textContent = slidesInfo[i].validity
    const cardTextH2 = document.createElement('h2');
    cardTextH2.textContent = slidesInfo[i].title
    const cardTextP = document.createElement('p');
    cardTextP.textContent = slidesInfo[i].paragraph

    const coursesCardsTextMore = document.createElement('div')
    coursesCardsTextMore.classList.add('courses-cards-text-more')
    const coursesCardsTextMoreP = document.createElement('p')
    coursesCardsTextMoreP.textContent = 'Подробнее'
    const coursesCardsTextMoreImg = document.createElement('img')
    coursesCardsTextMoreImg.src = './images/icon.png'

    const coursesDivImg = document.createElement('img')
    coursesDivImg.src = `./images/${slidesInfo[i].image}.png`

    coursesCards.prepend(coursesDiv)
    coursesDiv.prepend(cardText)
    cardText.appendChild(cardTextSpan)
    cardText.appendChild(cardTextH2)
    cardText.appendChild(cardTextP)
    cardText.appendChild(coursesCardsTextMore)
    coursesCardsTextMore.append(coursesCardsTextMoreP)
    coursesCardsTextMore.append(coursesCardsTextMoreImg)
    coursesDiv.appendChild(coursesDivImg)

}

const coursesCardsDiv = document.querySelectorAll('#coursesCards > div div')





// Advertisement
const adRemove = document.getElementById('adRemove')
const advertisement =document.getElementById('advertisement')
const burgerGreyLine = document.querySelector('.burger-grey-line')
adRemove.onclick = ()=>{
    advertisement.style.display = 'none'
    burgerGreyLine.style.display = 'none'
};
