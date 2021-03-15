const buttMore = document.getElementById("port-butt-id");
const buttMore1 = document.getElementById("post-butt-id");
const ninja = document.getElementById("ninja");
const ninja1 = document.getElementById("ninja1");

buttMore.addEventListener("click", function () {
    ninja.style.display = 'grid';
    buttMore.style.display = 'none';
});
buttMore1.addEventListener("click", function () {
    ninja1.style.display = 'grid';
    buttMore1.style.display = 'none';
});