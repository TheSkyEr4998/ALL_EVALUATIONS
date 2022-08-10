var users = localStorage.getItem("user");
let user=JSON.parse(users)
console.log(user)
showUser(user)

function showUser(users){

        let containerDiv = document.getElementById('sidebar')

        let img = document.createElement('img')
        img.setAttribute("id","user_img")
        img.src = users.image;

        let name = document.createElement('h3')
        name.setAttribute("id","user_name")
        name.innerHTML = users.name

        let email = document.createElement('h3')
        email.setAttribute("id","user_email")
        email.innerHTML = users.email

        let countryname = document.createElement('h3')
        countryname.setAttribute("id","user_country")
        if(users.country=="in"){
            countryname.innerHTML = 'India'
            countryCode = "in"
            countryNews()
        }
        else if(users.country=="us"){
            countryname.innerHTML = 'USA'
            countryCode = "us"
            countryNews()
        }
        else if(users.country=="uk"){
            countryname.innerHTML = "UK"
            countryCode = "uk"
            countryNews()
        }
        else if(users.country=="ch"){
            countryname.innerHTML = 'China'
            countryCode = "ch"
            countryNews()
        }
        else if(users.country=="nz"){
            countryname.innerHTML = "Newzeland"
            countryCode = "nz"
            countryNews()
        }
        else{
            alert('Enter Valid Country...user not available for selected Country...!')
            countryname.innerHTML = 'Not Found'
        }

        containerDiv.append(img,name,email,countryname)

        // localStorage.clear()
}

async function countryNews(){
    try {
        let result = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countryCode}`);
        let userdata = await result.json();
        console.log(userdata);
        showTable(userdata)
    } catch (error) {
        console.log(error);
    }
}

function showTable(userdata){
    userdata.articles.map(function(element){
        let containerBox = document.getElementById('news_result');
        let Newsrow = document.createElement('div')
        Newsrow.setAttribute("id","news")

        let div1=document.createElement('div')
        div1.setAttribute("id","div_img")
        let newsImg = document.createElement('img')
        newsImg.setAttribute("id","news_img")
        newsImg.src = element.urlToImage
        div1.append(newsImg)

        let div2=document.createElement('div')
        div2.setAttribute("id","div_info")
        let newsTitle = document.createElement('h3')
        newsTitle.setAttribute("id","news_title")
        newsTitle.innerHTML = element.title

        let newsAuthor = document.createElement('h3')
        newsAuthor.setAttribute("id","news_author")
        newsAuthor.innerHTML = element.author

        div2.append(newsTitle,newsAuthor)

        Newsrow.append(div1,div2)

        containerBox.append(Newsrow)
    });
    
};

document.querySelector("#searchCountry").addEventListener('click',searchFn)

function searchFn(){
    let countryCode;

    let country = document.querySelector("#search_box").value

    if(country == 'India' || country == 'india'  || country == 'INDIA'){
        countryCode = "in"
        localStorage.setItem('searchCode',countryCode)
        keysearchFn()
    }
    else if(country == 'USA' || country == 'usa'  || country == 'Usa'){
        countryCode = "us"
        localStorage.setItem('searchCode',countryCode)
        keysearchFn()
    }
    else if(country == 'China' || country == 'china'  || country == 'CHINA'){
        countryCode = "ch"
        localStorage.setItem('searchCode',countryCode)
        keysearchFn()
    }
    else if(country == 'Newzeland' || country == "New Zeland"  || country == "newzeland"){
        countryCode = "nz"
        localStorage.setItem('searchCode',countryCode)
        keysearchFn()
    }
    else if(country == 'UK' || country == "uk"){
        countryCode = "uk"
        localStorage.setItem('searchCode',countryCode)
        keysearchFn()
    }
    else{
        alert('Enter Valid Country...user not available for selected Country...!');
    }
}
function keysearchFn(){
    var countryCode = localStorage.getItem("user");
    countryCode=JSON.parse(countryCode)
    console.log(countryCode)
    countryNews()
    window.location.reload()
}
// <!-- - Every news card will have class as "news" (Show image, title and author only in cards). -->

// 0:
// author: "Aanchal Magazine"
// content: "The Centre and the states are at loggerheads over taxes and duties on petrol and diesel. While the Centre feels the states are not reducing VAT in line with the Centre’s cut in excise duty, the state… [+6925 chars]"
// description: "The Prime Minister has noted that certain states have not reduced VAT; states have attributed rising fuel prices to central taxes. How is fuel taxed, and how are collections shared between the Centre and states?"
// publishedAt: "2022-04-29T06:02:45Z"
// source:
// id: null
// name: "The'India' Express"
// [[Prototype]]: Object
// title: "Explained: States vs Centre on fuel taxes petrol diesel price hike - The'India' Express"
// url: "https:/'india'express.com/article/explained/states-vs-centre-on-fuel-taxes-petrol-diesel-price-hike-7892286/"
// urlToImage: "https://images'india'express.com/2022/04/fuel-price.jpeg"