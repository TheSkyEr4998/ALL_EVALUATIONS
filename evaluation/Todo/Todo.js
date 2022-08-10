var form = document.getElementById("form");


function checkFunction(){
    var status = "False"; 
    var checkbox = document.getElementById("myCheck");
    if(checkbox.checked == true){
        status = "True";
    }
    return status;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    var heading1 = document.getElementById("heading").value;
    var value = checkFunction();
    fetch("http://localhost:3000/name", {
        method: "POST",
        body:JSON.stringify({
            title: heading1,
            status: value
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function (data){
        console.log(data);
    })
    async function getData(){
        var res = await fetch("http://localhost:3000/name");
        var data = await res.json();
        displayData(data);
    }
    getData();
    var container = document.getElementById("container");
    function displayData(item){
        var title = document.createElement("p");
        title.textContent = "Title: " + item.title;
        var status = document.createElement("p");
        status.textContent = "Status: " + item.status;
    
        container.append(title, status);
    }
})
