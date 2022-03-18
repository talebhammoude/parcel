const imgUrl = new URL('img/bild.jpg', import.meta.url);
// new URL(relative url, base url) Skapar ett URL-objekt
// 'img/bild.jpg' är den relativa url:en till bilden
// import.meta ger oss meta data om modulen (alltså main.ts)
// import.meta.url ger oss url:en till modulen och är bas-url:en till bilden
 
const img = document.createElement('img');
img.src = imgUrl.href; //ger oss en string med hela url:en till bilden
document.body.append(img);