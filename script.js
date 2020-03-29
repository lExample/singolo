let elem = document.querySelector('.menu-nav');
let elem1 = document.querySelector('.slash-menu');
let line1 = document.querySelector('#lines:nth-child(1)');
let line2 = document.querySelector('#lines:nth-child(2)');
let line3 = document.querySelector('#lines:nth-child(3)');
let headerImg = document.querySelector('.header__img');
let menuNav = document.querySelectorAll('.menu-nav a');

elem1.onmouseover = function () {
    elem.style.transition = '1s all';
    elem.style.left = '0px';
    headerImg.style.marginRight = 192 + 'px';
    line2.style.transform = 'rotate(' + 90 + 'deg)'
    line3.style.top = 41 + 'px';
    line3.style.marginLeft = 12 + 'px';
    line3.style.transform = 'rotate(' + 90 + 'deg)'
    line1.style.top = 41 + 'px';
    line1.style.marginLeft = 28 + 'px';
    line1.style.transform = 'rotate(' + 90 + 'deg)'

}
elem1.onmouseout = function () {
    elem.style.left = '-100%';
    headerImg.style.marginRight = 0 + 'px';
    line2.style.transform = 'rotate(' + 0 + 'deg)';
    line3.style.marginLeft = 20 + 'px';
    line3.style.top = 48 + 'px';
    line3.style.transform = 'rotate(' + 0 + 'deg)';
    line1.style.top = 34 + 'px';
    line1.style.marginLeft = 20 + 'px';
    line1.style.transform = 'rotate(' + 0 + 'deg)';

}



let nav = document.querySelectorAll('.header__hotbar ol a');
const headerHeight = 90;
const servicesPosition = document.querySelector('#services').offsetTop - headerHeight;
const portfolioPosition = document.querySelector('#portfolio').offsetTop - headerHeight;
const aboutPosition = document.querySelector('#about').offsetTop - headerHeight;
const contactPosition = document.querySelector('#contact').offsetTop - headerHeight;
const currentPos = window.pageYOffset;
const homeColor = document.querySelector('#home-color');
const servicesColor = document.querySelector('#services-color');
const aboutColor = document.querySelector('#about-color');
const portfolioColor = document.querySelector('#portfolio-color');
const contactColor = document.querySelector('#contact-color');
const homeColor1 = document.querySelector('#home-color1');
const servicesColor1 = document.querySelector('#services-color1');
const aboutColor1 = document.querySelector('#about-color1');
const portfolioColor1 = document.querySelector('#portfolio-color1');
const contactColor1 = document.querySelector('#contact-color1');

window.addEventListener('scroll', function () {
    let currentPos = window.pageYOffset;

    if (currentPos >= servicesPosition && currentPos < portfolioPosition) {
        menuNav.forEach(item => item.style.color = 'white');
        nav.forEach(item => item.style.color = 'white');
        servicesColor.style.color = '#f06c64';
        servicesColor1.style.color = '#f06c64';
    } else if (currentPos >= portfolioPosition && currentPos < aboutPosition) {
        menuNav.forEach(item => item.style.color = 'white');
        nav.forEach(item => item.style.color = 'white');
        portfolioColor.style.color = '#f06c64';
        portfolioColor1.style.color = '#f06c64';
    } else if (currentPos >= aboutPosition && currentPos < contactPosition) {
        menuNav.forEach(item => item.style.color = 'white');
        nav.forEach(item => item.style.color = 'white');
        aboutColor.style.color = '#f06c64';
        aboutColor1.style.color = '#f06c64';
    } else if (currentPos >= contactPosition) {
        menuNav.forEach(item => item.style.color = 'white');
        nav.forEach(item => item.style.color = 'white');
        contactColor.style.color = '#f06c64';
        contactColor1.style.color = '#f06c64';
    }
    if (currentPos < 595) {
        menuNav.forEach(item => item.style.color = 'white');
        nav.forEach(item => item.style.color = 'white');
        homeColor.style.color = '#f06c64';
        homeColor1.style.color = '#f06c64';
    }
});

servicesColor.onclick = function () {
    window.scrollTo({
            top: servicesPosition,
            behavior: 'smooth'
        }

    );
}
servicesColor1.onclick = function () {
    elem.style.transition = 'none';
    elem.style.left = '-100%';
    window.scrollTo({
            top: servicesPosition,
            behavior: 'smooth'
        }

    );
}
portfolioColor.onclick = function () {

    window.scrollTo({
            top: portfolioPosition,
            behavior: 'smooth'
        }

    );
}
portfolioColor1.onclick = function () {
    elem.style.transition = 'none';
    elem.style.left = '-100%';
    window.scrollTo({
            top: portfolioPosition,
            behavior: 'smooth'
        }

    );
}
aboutColor.onclick = function () {
    window.scrollTo({
            top: aboutPosition,
            behavior: 'smooth'
        }

    );
}
aboutColor1.onclick = function () {
    elem.style.transition = 'none';
    elem.style.left = '-100%';
    window.scrollTo({
            top: aboutPosition,
            behavior: 'smooth'
        }

    );
}
contactColor.onclick = function () {
    window.scrollTo({
            top: contactPosition,
            behavior: 'smooth'
        }

    );
}
contactColor1.onclick = function () {
    elem.style.transition = 'none';
    elem.style.left = '-100%';
    window.scrollTo({
            top: contactPosition,
            behavior: 'smooth'
        }

    );
}
homeColor.addEventListener('click', scrollTop);
homeColor1.onclick = function () {
    elem.style.transition = 'none';
    elem.style.left = '-100%';
    window.scrollTo({
        top,
        behavior: 'smooth'
    });
}

function scrollTop() {
    window.scrollTo({
            top,
            behavior: 'smooth'
        }

    );
}

let blackVertical = document.querySelector('#black-vertical');
let blackHorizontal = document.querySelector('#black-horizontal');
let blackCentral = document.querySelector('#black-central');


let allPick = document.querySelector('.pictures');
let pictures = document.querySelectorAll('.pictures div');
let portfolioMenu = document.querySelectorAll('.portfolio-nav ol');

portfolioMenu.forEach(item => {
    item.onclick = function () {
        portfolioMenu.forEach(item => {
            item.style.color = '#767e9e'
            item.style.borderColor = '#767e9e'
        });
        let firstChild = document.querySelector('.pictures div:first-child');
        item.style.color = 'white';
        item.style.borderColor = 'white'
        allPick.appendChild(firstChild);

    }
})


let img = document.querySelectorAll('.pictures div img');
let firstImage = document.querySelector('#mda');
console.log(getComputedStyle(firstImage).width == '220px');
img.forEach(item => {
    if (getComputedStyle(firstImage).width == '220px') {
        item.onclick = function () {
            img.forEach(item => {
                item.style.width = 220 + 'px';
                item.style.height = 187 + 'px';
            });
            item.style.width = 210 + 'px';
            item.style.height = 177 + 'px';
        }
    }
    if (getComputedStyle(firstImage).width == '216px') {
        item.onclick = function () {
            img.forEach(item => {
                item.style.width = 216 + 'px';
                item.style.height = 183 + 'px';
            });
            item.style.width = 206 + 'px';
            item.style.height = 173 + 'px';
        }
    }
    if (getComputedStyle(firstImage).width == '151px') {
        item.onclick = function () {
            img.forEach(item => {
                item.style.width = 151 + 'px';
                item.style.height = 128 + 'px';
            });
            item.style.width = 141 + 'px';
            item.style.height = 118 + 'px';
        }
    }
})

pictures.forEach(item => {
    item.onclick = function () {
        pictures.forEach(item => {
            item.style.border = 0;
        });
        3
        item.style.borderWidth = 5 + 'px';
        item.style.borderStyle = 'solid';
        item.style.borderColor = '#F06C64';

    }
})

let buttonVertical = document.querySelector('#iphone1');


buttonVertical.onclick = function () {
    if (getComputedStyle(blackVertical).display == 'none') {
        blackVertical.style.display = 'block';
    } else if (getComputedStyle(blackVertical).display == 'block') {
        blackVertical.style.display = 'none';
    }
}

let buttonHorizontal = document.querySelector('#iphone2');


buttonHorizontal.onclick = function () {
    if (getComputedStyle(blackHorizontal).display == 'none') {
        blackHorizontal.style.display = 'block';
    } else if (getComputedStyle(blackHorizontal).display == 'block') {
        blackHorizontal.style.display = 'none';
    }
}

let buttonCentral = document.querySelector('#iphone3');

buttonCentral.onclick = function () {
    if (getComputedStyle(blackCentral).display == 'none') {
        blackCentral.style.display = 'block';
    } else if (getComputedStyle(blackCentral).display == 'block') {
        blackCentral.style.display = 'none';
    }
}

function displayNone() {
    blackHorizontal.style.display = 'none';
    blackCentral.style.display = 'none';
    blackVertical.style.display = 'none';
}

let submit = document.querySelector('#submit');
let inputName = document.querySelector('#input-name');
let inputSubject = document.querySelector('#input-subject');
let topic = document.querySelector('#topic');
let description = document.querySelector('#description');
let modal = document.querySelector('.modal');

submit.onclick = function () {
    modal.style.display = 'block';

    if (inputName.value == 'Singolo') {
        topic.innerHTML = 'Тема: Singolo';
    } else if (inputName.value != 'Singolo') {
        topic.innerHTML = 'Тема: ' + inputName.value.slice(0, 40);
    }

    if (inputName.value == '') {
        topic.innerHTML = 'Без темы';
    }

    if (inputSubject.value == 'Portfolio project') {
        description.innerHTML = 'Описание: Portfolio project';
    } else if (inputSubject.value != 'Singolo') {
        description.innerHTML = 'Описание: ' + inputSubject.value.slice(0, 40);
    }

    if (inputSubject.value == '') {
        description.innerHTML = 'Без описания';
    }
}

let ok = document.querySelector('#ok');
const form = document.querySelector('#form');

ok.onclick = function () {
    form.reset();
    modal.style.display = 'none';
}

let testImg = document.querySelector('.slide1 img');


let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');

let btnLeft = document.querySelector('#chev-left');
let btnRight = document.querySelector('#chev-right');

btnLeft.addEventListener('click', leftSwap);

function changePosSlide1Left() {
    slide1.style.transition = 'none';
    slide1.style.left = '1020px';
}

function changePosSlide1LeftSmall() {
    slide1.style.transition = 'none';
    slide1.style.left = '375px';
}

function changePosSlide2Left() {
    slide2.style.transition = 'none';
    slide2.style.left = '1020px';
}

function changePosSlide2LeftSmall() {
    slide2.style.transition = 'none';
    slide2.style.left = '1020px';
}
console.log(getComputedStyle(testImg).width);

function leftSwap() {
    displayNone();
    if (getComputedStyle(testImg).width == '1020px') {
        if (getComputedStyle(slide1).left == '0px') {

            slide1.style.transition = 'all 1s';
            slide1.style.left = '-1020px';
            slide2.style.transition = 'all 1s';
            slide2.style.left = '0';
            setTimeout(changePosSlide1Left, 800);
        }

        if (getComputedStyle(slide1).left == '1020px') {
            slide1.style.transition = 'all 1s';
            slide1.style.left = '0px';
            slide2.style.transition = 'all 1s';
            slide2.style.left = '-1020px';
            setTimeout(changePosSlide2Left, 800);
        }
    }
    if (getComputedStyle(testImg).width == '768px') {
        if (getComputedStyle(slide1).left == '0px') {

            slide1.style.transition = 'all 1s';
            slide1.style.left = '-1020px';
            slide2.style.transition = 'all 1s';
            slide2.style.left = '0';
            setTimeout(changePosSlide1Left, 800);
        }

        if (getComputedStyle(slide1).left == '1020px') {
            slide1.style.transition = 'all 1s';
            slide1.style.left = '0px';
            slide2.style.transition = 'all 1s';
            slide2.style.left = '-1020px';
            setTimeout(changePosSlide2Left, 800);
        }
    }
    if (getComputedStyle(testImg).width == '375px') {
        if (getComputedStyle(slide1).left == '0px') {

            slide1.style.transition = 'all 1s';
            slide1.style.left = '-375px';
            slide2.style.transition = 'all 1s';
            slide2.style.left = '645px';
            setTimeout(changePosSlide1LeftSmall, 800);
        }

        if (getComputedStyle(slide1).left == '375px') {
            slide1.style.transition = 'all 1s';
            slide1.style.left = '0px';
            slide2.style.transition = 'all 1s';
            slide2.style.left = '270px';
            setTimeout(changePosSlide2LeftSmall, 800);
        }
    }
}

btnRight.addEventListener('click', rightSwap);

function changePosSlide1Right() {
    slide1.style.transition = 'none';
    slide1.style.left = '-1020px';
}

function changePosSlide1Central() {
    slide1.style.transition = 'all 1s';
    slide1.style.left = '0px';
}

function changePosSlide2Right() {
    slide2.style.transition = 'none';
    slide2.style.left = '-1020px';
}

function changePosSlide2Central() {
    slide2.style.transition = 'all 1s';
    slide2.style.left = '0px';
}

function changePosSlide1RightSmall() {
    slide1.style.transition = 'none';
    slide1.style.left = '-375px';
}

function changePosSlide1CentralSmall() {
    slide2.style.transition = 'all 1s';
    slide2.style.left = '0px';
}

function changePosSlide2RightSmall() {
    slide2.style.transition = 'none';
    slide2.style.left = '275px';
}

function changePosSlide2CentralSmall() {
    slide2.style.transition = 'all 1s';
    slide2.style.left = '645px';
}

function rightSwap() {
    displayNone();
    if (getComputedStyle(testImg).width == '1020px') {
        if (getComputedStyle(slide1).left == '0px') {
            setTimeout(changePosSlide2Right, 0);
            slide1.style.transition = 'all 1s';
            slide1.style.left = '1020px';
            setTimeout(changePosSlide2Central, 100);
        }
        if (getComputedStyle(slide2).left == '0px') {
            setTimeout(changePosSlide1Right, 0);
            slide2.style.transition = 'all 1s';
            slide2.style.left = '1020px';
            setTimeout(changePosSlide1Central, 100);
        }
    }
    if (getComputedStyle(testImg).width == '768px') {
        if (getComputedStyle(slide1).left == '0px') {
            setTimeout(changePosSlide2Right, 0);
            slide1.style.transition = 'all 1s';
            slide1.style.left = '1020px';
            setTimeout(changePosSlide2Central, 100);
        }
        if (getComputedStyle(slide2).left == '0px') {
            setTimeout(changePosSlide1Right, 0);
            slide2.style.transition = 'all 1s';
            slide2.style.left = '1020px';
            setTimeout(changePosSlide1Central, 100);
        }
    }
    if (getComputedStyle(testImg).width == '375px') {
        if (getComputedStyle(slide1).left == '0px') {
            setTimeout(changePosSlide2RightSmall, 0);
            slide1.style.transition = 'all 1s';
            slide1.style.left = '375px';
            setTimeout(changePosSlide2CentralSmall, 50);
        }

        if (getComputedStyle(slide1).left == '375px') {
            setTimeout(changePosSlide1RightSmall, 0);
            slide2.style.transition = 'all 1s';
            slide2.style.left = '1020px'
            setTimeout(changePosSlide1Central, 50);
        }
    }
}