let count = 1;
let count2 = 1;
const LIMIT1 = 6;
const LIMIT2 = 3;
const TIME_NEXT_SLIDE = 4000;

next_slide_front  = () => {
    document.getElementById (`slide${count}`).checked = true;
    count++;
    if (count > LIMIT1)
        count = 1;
}

next_slide_after = () => {
    document.getElementById (`slide2-${count2}`).checked = true;
    count2++;
    if (count2 > LIMIT2)
        count2 = 1;
}

setInterval (next_slide_front,TIME_NEXT_SLIDE);
setInterval (next_slide_after,TIME_NEXT_SLIDE);

function openMenu () {
    document.body.classList.add("menu-expanded");
}

function closeMenu () {
    document.body.classList.remove("menu-expanded");
}