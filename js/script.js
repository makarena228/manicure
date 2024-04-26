document.querySelector('.more-button').addEventListener('click', toggleVacancy);
function toggleVacancy(index){
    let button = document.querySelectorAll('.more-button')[index];
    document.querySelectorAll('.vacancy-open')[index].classList.toggle('show');
    if(button.value === "подробнее"){
        button.value = "скрыть";
    } else {
        button.value = "подробнее";
    }
}
function togglemenu(){
    document.querySelector(".navigation").classList.toggle("show")
}
