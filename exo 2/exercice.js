let catPic = document.getElementById("cat-pic");

let onCatClick = function (event){
    let stashePic = document.getElementById("mustache-pic");
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y);
    stashePic.style.top = y -25 + "px";
    stashePic.style.left = x - 50 + "px";
};

catPic.addEventListener("click", onCatClick);

