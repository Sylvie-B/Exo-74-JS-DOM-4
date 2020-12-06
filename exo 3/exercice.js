let libButton = document.getElementById('lib-button');

let libIt = function() {

    let champNoun = document.getElementById("noun").value;
    let champAdj = document.getElementById("adjective").value;
    let champPerson = document.getElementById("person").value;

    let storyDiv = document.getElementById("story");

    storyDiv.innerHTML = champNoun + " " + champAdj + " de " + champPerson;
};

libButton.addEventListener('click', libIt);
