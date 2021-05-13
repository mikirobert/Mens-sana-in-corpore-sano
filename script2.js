var itemToReturn = document.createElement("div");
container.appendChild(itemToReturn);
function calculateCC() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let buttonSubmit = document.getElementById("buttonSubmit");
    var bmi = (input1 * 10 + input2 * 6.25 - (input3 * 5) + 5) * 1.2;
    let container = document.getElementById("container");

    if ( bmi > 999 && bmi < 9999 ) {
    itemToReturn.innerText = "Trebuie să manânci aproximativ " + bmi + " calorii zilnic pentru a te menține în formă.";
    }  
    else {
        location.href="mincinos2.html";
    }    




}
    itemToReturn.setAttribute("class","dadada js2");