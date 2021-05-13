function calculateBMI(){
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let buttonSubmit = document.getElementById("buttonSubmit");
    let bmi = input1 * 10000 / (input2 * input2);
    var rounded = Math.round(bmi * 10) / 10
    let container = document.getElementById("container");
    var itemToReturn = document.createElement("div");
    let button = document.createElement("button");

    if(rounded > 25 && rounded <= 188) {
        itemToReturn.innerText = "Indicele tău de masă corporală este " + rounded + ". Ești supraponderal, pentru a vedea alimente pentru supraponderalitate";
    }
    else if(rounded< 18.5 && rounded > 7.5) {
        itemToReturn.innerText = "Indicele tău de masă corporală este " + rounded + ". Ești subponderal, pentru a vedea alimente pentru subponderalitate";
    }
    else if(rounded< 7.5) {
        location.href="mincinos.html"
    }
    else if(rounded> 188) {
        location.href="mincinos.html"
        }   
    else if(rounded<=188 && rounded>=7.5) {
        itemToReturn.innerText = "Indicele tău de masă corporală este " + rounded + ". Ai un Indice de masă corporală normal, pentru a-ți calcula caloriile zilnice";
    }
    else {
        itemToReturn.innerText = "Datele nu au fost introduse corect. Pentru a reîncerca"
    }

    button.innerText = "APASĂ AICI";
    button.onclick = function() {
        if(rounded >= 25 && rounded <= 188) {
        
            location.href="supraponderal.html";
        }
        else if(rounded <= 18.5 && rounded >=7.5) {
            location.href ="subponderal.html";
        }
        else if(rounded < 25 && rounded > 18.5 && rounded > 7.5 && rounded < 188) {
            location.href="cc.html";
        }
        else {location.href="imc.html";}
    }
    
    itemToReturn.setAttribute("class","dadada js");
    button.setAttribute("class","form-control submit2");
    buttonSubmit.style.display ="none";     
    itemToReturn.appendChild(button);
    container.appendChild(itemToReturn);
}