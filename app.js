const profile= document.getElementById("profile")
const navbar= document.getElementsByClassName("nav__bar")
const article= document.getElementsByClassName("middle-article")
const collapse= document.getElementById("collapse");
const setting= document.getElementsByClassName("wrap__setting");


//use toggle 
collapse.addEventListener("click", ()=>{
    profile.style.display= "none";
    navbar[0].style.width= "6%";
    article[0].style.width= "94%"


    const text = document.getElementsByClassName("setting__text");
    for(i=0; i<text.length; i++){
        text[i].style.display= "none";
    }
})

