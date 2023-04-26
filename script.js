const defaultLanguage = navigator.language.substring(0, 2) || "ru";
let language = localStorage.getItem("language") || defaultLanguage;
selectLanguage(language);

const ruText = document.getElementById("ruLang");
ruText.addEventListener("click", () => selectLanguage("ru"));
const enText = document.getElementById("enLang");
enText.addEventListener("click", () => selectLanguage("en"));
const kzText = document.getElementById("kzLang");
kzText.addEventListener("click", () => selectLanguage("kz"));

function selectLanguage(language) {
  const wrongLang = document.querySelectorAll(
    `i[lang]:not(i[lang="${language}"]),p[lang]:not(p[lang="${language}"]), h3[lang]:not(h3[lang="${language}"])`
  );
  wrongLang.forEach((element) => element.classList.add("hidden"));
  const wrongLangButton = document.querySelectorAll(`button[lang]:not(i[lang="${language}"])`);
  wrongLangButton.forEach((element) => element.classList.add("colorless"));

  const rightLang = document.querySelectorAll(`i[lang="${language}"],p[lang="${language}"],h3[lang="${language}"]`);
  rightLang.forEach((element) => element.classList.remove("hidden"));
  const rightLangButton = document.querySelectorAll(`button[lang="${language}"]`);
  rightLangButton.forEach((element) => element.classList.remove("colorless"));

  localStorage.setItem("language", language);
}

//Socials
const whatsapp = document.getElementById("whatsapp");
whatsapp.addEventListener("click", () => {
  window.open("https://wa.me/77076343424", "_blank");
  whatsapp.classList.add("clicked");
});
const facebook = document.getElementById("facebook");
facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/HotelCelinnaya/", "_blank");
  facebook.classList.add("clicked");
});
const instagram = document.getElementById("instagram");
instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/celinnayakostanai/", "_blank");
  instagram.classList.add("clicked");
});
const vk = document.getElementById("vk");
vk.addEventListener("click", () => {
  window.open("https://vk.com/", "_blank");
  vk.classList.add("clicked");
});
const ok = document.getElementById("ok");
ok.addEventListener("click", () => {
  window.open("https://ok.ru/", "_blank");
  ok.classList.add("clicked");
});

/* SITE PAGES LINKS */

const main = document.querySelectorAll(".main");
main.forEach((element) =>
  element.addEventListener("click", () => {
    window.open("index.html", "_self");
  })
);

const rooms = document.querySelectorAll(".rooms");
rooms.forEach((element) =>
  element.addEventListener("click", () => {
    window.open("rooms.html", "_self");
  })
);

const service = document.querySelectorAll(".service");
service.forEach((element) =>
  element.addEventListener("click", () => {
    window.open("service.html", "_self");
  })
);

const vacancies = document.querySelectorAll(".vacancies");
vacancies.forEach((element) =>
  element.addEventListener("click", () => {
    window.open("vacs.html", "_self");
  })
);

const about = document.querySelectorAll(".about");
about.forEach((element) =>
  element.addEventListener("click", () => {
    window.open("waypoint.html", "_self");
  })
);

const mapLink = document.querySelectorAll(".mapLink");
mapLink.forEach((element) =>
  element.addEventListener("click", () => {
    window.open("https://goo.gl/maps/cgbvrPNkXfq9QDsw8", "_blank");
  })
);
