let elem = document.querySelector('.menu-nav');
let elem1 = document.querySelector('.slash-menu');
let line1 = document.querySelector('#lines:nth-child(1)');
let line2 = document.querySelector('#lines:nth-child(2)');
let line3 = document.querySelector('#lines:nth-child(3)');
let headerImg = document.querySelector('.header__img');

elem1.onmouseover = function () {
    elem.style.display = 'block';
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
    elem.style.display = 'none';
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

nav.forEach(item => {
    item.onclick = function () {
        nav.forEach(item => item.style.color = 'white');
        item.style.color = '#f06c64';
    }
})

let slide1 = document.querySelector('.slide1')
let slide2 = document.querySelector('.slide2')
let slideRight = document.querySelector('#chev-right');
let slideLeft = document.querySelector('#chev-left');
let blackVertical = document.querySelector('#black-vertical');
let blackHorizontal = document.querySelector('#black-horizontal');
let blackCentral = document.querySelector('#black-central');

slideRight.onclick = function () {
    blackHorizontal.style.display = 'none';
    blackVertical.style.display = 'none';
    blackCentral.style.display = 'none';
    slide2.style.left = 0 + 'px';
    slide1.style.left = -1020 + 'px';

    if (getComputedStyle(slide1).left == -1020 + 'px') {
        slide1.style.left = 0 + 'px';
        slide2.style.left = -1020 + 'px';
    }
}
slideLeft.onclick = function () {
    blackCentral.style.display = 'none';
    blackHorizontal.style.display = 'none';
    blackVertical.style.display = 'none';
    slide2.style.left = 0 + 'px';
    slide1.style.left = -1020 + 'px';
    if (getComputedStyle(slide1).left == -1020 + 'px') {
        slide1.style.left = 0 + 'px';
        slide2.style.left = -1020 + 'px';
    }
}

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


let img = document.querySelectorAll('.pictures div img')

img.forEach(item => {
    item.onclick = function () {
        img.forEach(item => {
            item.style.width = 220 + 'px';
            item.style.height = 187 + 'px';
        });
        item.style.width = 210 + 'px';
        item.style.height = 177 + 'px';
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

ok.onclick = function () {
    modal.style.display = 'none';
}