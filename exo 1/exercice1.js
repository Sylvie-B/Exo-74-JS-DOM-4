//Votre code ci dessous
let cat = document.getElementById("cat-pic");

function miaou (){
    document.getElementById("cat-chat").innerHTML = "Miaou !";
}

cat.addEventListener("click", miaou);
