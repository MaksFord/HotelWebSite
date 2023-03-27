const defaultLanguage = navigator.language.substring(0, 2)||"ru"
let language=localStorage.getItem("language")||defaultLanguage;
selectLanguage(language)

const ruText=document.getElementById("ruLang");
ruText.addEventListener("click", ()=>selectLanguage ("ru"))
const enText=document.getElementById("enLang");
enText.addEventListener("click", ()=>selectLanguage ("en"))
const kzText=document.getElementById("kzLang");
kzText.addEventListener("click", ()=>selectLanguage ("kz"))


function selectLanguage (language){
    const wrongLang=document.querySelectorAll((`i[lang]:not(i[lang="${language}"])`));
    wrongLang.forEach(element=>element.classList.add("hidden"));
    const rightLang=document.querySelectorAll((`i[lang="${language}"]`));
    rightLang.forEach(element=>element.classList.remove("hidden"));
    localStorage.setItem("language", language)
}

//Socials
const whatsapp= document.getElementById("whatsapp");
whatsapp.addEventListener("click", ()=>window.open("https://wa.me/77076343424", "_blank"))
const facebook= document.getElementById("facebook");
facebook.addEventListener("click", ()=>window.open("https://www.facebook.com/HotelCelinnaya/", "_blank") )
const instagram= document.getElementById("instagram");
instagram.addEventListener("click", ()=>window.open("https://www.instagram.com/celinnayakostanai/", "_blank") )
const vk= document.getElementById("vk");
vk.addEventListener("click", ()=>window.open("https://www.instagram.com/celinnayakostanai/", "_blank") )
const ok= document.getElementById("ok");
ok.addEventListener("click", ()=>window.open("https://www.instagram.com/celinnayakostanai/", "_blank") )