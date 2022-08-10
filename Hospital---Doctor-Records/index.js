// fill in javascript code here
document.querySelector("form").addEventListener("submit",doctorRecords);
function doctorRecords(event) {
  event.preventDefault();
  var name1 = document.querySelector("#name").value;
      var doctorID = document.querySelector("#docID").value;
      var department = document.querySelector("#dept").value;
      var experience = Number(document.querySelector("#exp").value);
      var email = document.querySelector("#email").value;
      var mobile = document.querySelector("#mbl").value;
      console.log(name1);
var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerText = name1;
var td2 = document.createElement("td");
td2.innerText = doctorID;
var td3 = document.createElement("td");
td3.innerText =department;
var td4 = document.createElement("td");
td4.innerText = experience;
var td5 = document.createElement("td");
td5.innerText = email;
var td6 = document.createElement("td");
td6.innerText = mobile;
var td7 = document.createElement("td");
td7.innerText = "";
if (experience > 5) {
  td7.innerText = "Senior";
} else if (experience >= 2 && experience <= 5) {
  td7.innerText = "Junior";
} else if (experience <= 1) {
  td7.innerText = "Trainee";
}
var td8 = document.createElement("td");
td8.innerText = "Delete";
td8.addEventListener("click", deleteRow);
td8.style.background= "red";
tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
 document.querySelector("tbody").append(tr);
}
    function deleteRow(){
    event.target.parentNode.remove();
}
