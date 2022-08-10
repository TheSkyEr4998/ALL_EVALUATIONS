var winner = document.getElementById("winner");

var member1 = document.getElementById("member-1");
var member2 = document.getElementById("member-2");
var member3 = document.getElementById("member-3");

var member1Container = document.getElementById("member1-container");
var member2Container = document.getElementById("member2-container");
var member3Container = document.getElementById("member3-container");
var min = 1;
var max = 7;
var rollButton = document.getElementById("roll-button");
function random1(){
    var random = Math.floor((Math.random()*(max-min)+min));
    return random;
}

function random2(){
    var random = Math.floor((Math.random()*(max-min)+min));
    return random;
}

function random3(){
    var random = Math.floor((Math.random()*(max-min)+min));
    return random;
}

rollButton.addEventListener("click", function(){
    member1.innerHTML = random1();
    member2.innerHTML = random2();
    member3.innerHTML = random3();
    addingColors(member1.innerHTML, member2.innerHTML, member3.innerHTML);
})

function addingColors(num1, num2, num3){
    if(num1==num2){
        member1Container.setAttribute("class", "equal-number");
        member2Container.setAttribute("class", "equal-number")
        member3Container.setAttribute("class", "other-number");
        displayData3();
    }
    else if(num2==num3){
        member1Container.setAttribute("class", "other-number");
        member2Container.setAttribute("class", "equal-number")
        member3Container.setAttribute("class", "equal-number");
        displayData3();
    }
    else if(num1==num3){
        member1Container.setAttribute("class", "equal-number");
        member2Container.setAttribute("class", "other-number")
        member3Container.setAttribute("class", "equal-number");
        displayData3();
    }
    else if(num1 == num2 == num3){
        member1Container.setAttribute("class", "equal-number");
        member2Container.setAttribute("class", "equal-number")
        member3Container.setAttribute("class", "equal-number");
        displayData3();
    }
    else if(num1>num2 && num1>num3 && num2>num3){
        member1Container.setAttribute("class", "big-number");
        member2Container.setAttribute("class", "medium-number")
        member3Container.setAttribute("class", "small-number");
        displayData(num1);
        
    }
    else if(num1>num2 && num1>num3 && num2<num3){
        member1Container.setAttribute("class", "big-number");
        member2Container.setAttribute("class", "small-number")
        member3Container.setAttribute("class", "medium-number");
        displayData(num1);
    }
    else if(num2>num1 && num2>num3 && num1>num3){
        member1Container.setAttribute("class", "medium-number");
        member2Container.setAttribute("class", "big-number")
        member3Container.setAttribute("class", "small-number");
        displayData1(num2);

    }
    else if(num2>num1 && num2>num3 && num1<num3){
        member1Container.setAttribute("class", "small-number");
        member2Container.setAttribute("class", "big-number")
        member3Container.setAttribute("class", "medium-number");
        displayData1(num2);
    }
    else if(num3>num1 && num3>num2 && num1>num2){
        member1Container.setAttribute("class", "medium-number");
        member2Container.setAttribute("class", "small-number")
        member3Container.setAttribute("class", "big-number");
        displayData2(num3);
    }
    else if(num3>num1 && num3>num2 && num1<num3){
        member1Container.setAttribute("class", "small-number");
        member2Container.setAttribute("class", "medium-number")
        member3Container.setAttribute("class", "big-number");
        displayData2(num3);
    }

}
function displayData(num1){
    winner.innerHTML = "";
    var display = document.createElement("p");
    display.textContent = "The winner is A";
    winner.append(display);
}

function displayData1(num2){
    winner.innerHTML = "";
    var display = document.createElement("p");
    display.textContent = "The winner is B";
    winner.append(display);
}

function displayData2(num3){
    winner.innerHTML = "";
    var display = document.createElement("p");
    display.textContent = "The winner is C";
    winner.append(display);
}
function displayData3(){
    winner.innerHTML = "";
    var display = document.createElement("p");
    display.textContent = "MATCH DRAW";
    winner.append(display);
}