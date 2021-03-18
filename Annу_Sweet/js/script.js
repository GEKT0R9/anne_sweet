const buttMore = document.getElementById("port-butt-id");
const buttMore1 = document.getElementById("post-butt-id");
const ninja = document.getElementById("ninja");
const ninja1 = document.getElementById("ninja1");
const articles_1 = document.getElementsByClassName("articles_1");

const select_filt = document.getElementById("select_filt");
 
buttMore.addEventListener("click", function () {
    // buttMore.style.display = 'none';
    if (ninja.style.display == 'grid') {
        ninja.style.display = 'none';
        buttMore.innerText = 'Показать ещё'
    } else {
        ninja.style.display = 'grid';
        buttMore.innerText = 'Скрыть'
    }
});
buttMore1.addEventListener("click", function () {
    if (ninja1.style.display == 'grid') {
        ninja1.style.display = 'none';
        buttMore1.innerText = 'Показать ещё'
    } else {
        ninja1.style.display = 'grid';
        buttMore1.innerText = 'Скрыть'
    }
    // buttMore1.style.display = 'none';
});

select_filt.addEventListener("change", function () {
    switch(this.selectedIndex){
        case 1:
            articles_1[0].childNodes[1].classList.remove('hidden');
            articles_1[0].childNodes[3].classList.add('hidden');
            articles_1[0].childNodes[5].classList.add('hidden');
             break;
        case 2:
            articles_1[0].childNodes[1].classList.add('hidden');
            articles_1[0].childNodes[3].classList.remove('hidden');
            articles_1[0].childNodes[5].classList.add('hidden');
             break;
        case 3:
            articles_1[0].childNodes[1].classList.add('hidden');
            articles_1[0].childNodes[3].classList.add('hidden');
            articles_1[0].childNodes[5].classList.remove('hidden');
             break;
        default:
            articles_1[0].childNodes[1].classList.remove('hidden');
            articles_1[0].childNodes[3].classList.remove('hidden');
            articles_1[0].childNodes[5].classList.remove('hidden');
        break;
    }
});