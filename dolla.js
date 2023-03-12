const signIn = document.getElementById("SignIn");
const body = document.querySelector("body");
const main_content = document.querySelector(".main-content");
signIn.addEventListener("click", ()=>{
    location.replace("http://127.0.0.1:5500/signIn.html");
})
const signIn1 = document.createElement("button");
signIn1.setAttribute("class", "btn-start");
signIn1.classList.add("click");
signIn1.innerHTML = "Sign In";
//cross
const cross =  document.createElement("div");
cross.setAttribute("class", "cross");
cross.classList.add("click");
//navigation
const navigation = document.createElement("div");
navigation.setAttribute("class", "navigation");
//about
const about = document.createElement("a");
about.setAttribute("href", "#content2");
about.setAttribute("class", "about");
about.classList.add("click");
about.innerHTML= "about";
navigation.appendChild(about);
//discover
const discover = document.createElement("a");
discover.setAttribute("href", "#content3");
discover.setAttribute("class", "discover");
discover.innerHTML = "discover";
discover.classList.add("click");
navigation.appendChild(discover);
//service
const service = document.createElement("a");
service.setAttribute("href", "#content4");
service.setAttribute("class", "service");
service.innerHTML = "service";
service.classList.add("click");
navigation.appendChild(service);
//signup
const signup = document.createElement("a");
signup.setAttribute("href", "#content5");
signup.setAttribute("class", "signup");
signup.innerHTML = "signup";
signup.classList.add("click");
navigation.appendChild(signup);
//strip
const strip = document.querySelector(".strip");

strip.addEventListener("click", ()=>{
    navigation.appendChild(cross);
    cross.style.display = "block";
    //signIn1.style.display = "initial";
navigation.appendChild(signIn1);
body.appendChild(navigation);
body.style.overflowY = "hidden";
navigation.style.animationFillMode = "forwards";

})
navigation.addEventListener("click", (e)=>{
    if(e.target.classList.contains("click")){
    body.style.overflowY = "visible";
    // cross.style.display = "none";
    navigation.style.animationFillMode = "backwards";
    }
})
signIn1.addEventListener("click", ()=>{
    location.replace("http://127.0.0.1:5500/signIn.html");
})
 