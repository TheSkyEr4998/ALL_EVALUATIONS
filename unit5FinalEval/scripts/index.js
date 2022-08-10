document.querySelector('#submit').addEventListener('click',createUserFn)

function createUserFn(){
    event.preventDefault()
    let user_profile_url = document.getElementById('user_pic').value;
    let user_profile_name = document.getElementById('user_name').value;
    let user_profile_email = document.getElementById('user_email').value;
    let user_profile_country = document.getElementById('user_country').value;
    let user={
        "image":user_profile_url,
        "name":user_profile_name,
        "email":user_profile_email,
        "country":user_profile_country
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href="worldnews.html"
}