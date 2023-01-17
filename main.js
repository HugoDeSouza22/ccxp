const ingre = [];

function addBorder(id){
    Element = document.querySelector("#" + id);
    Element.style.border = "10px solid red";
}

function highlightcard(selector){
    var Elemento = document.querySelector (selector);
    Elemento.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) =>{
        var name = event.key;
        var code = event.code;
        
    },false);
}

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) =>  {

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    } 
} , false)
}

checkKeyboardCode();
addKeyboardEventListeners ()

function selectCard(selector){
    var cor = document.querySelector(selector);
    cor.classList.toggle("card-selected")
    if(ingre.includes(selector)) ingre.pop(selector);
    else ingre.push(selector);
}

function showSelectedCards(){
    if(ingre.length > 0) alert("ingressos selecionados"+ ingre)

}