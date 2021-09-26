


//-------CLONE---------
const template = document.querySelector("article");

for (const photo of photosArray) {
 // debugger;
  const clone = template.cloneNode(true);
  document.querySelector("#photoSection").append(clone);

  clone.querySelector("img").src = photo.imgUrl;
  clone.querySelector("h2").innerText = photo.name;
  clone.querySelector("h4").innerText = photo.price;
  //clone.querySelector("h2").innerText = photo.bestSeller;

  if (photo.bestSeller) {
    clone.classList.add('best');
  } else {
    clone.querySelector('.seller').remove();
  }


}
template.remove();


//------------------FILTERED----------------

document.querySelector('#all').addEventListener('click', function () {

  const allArticles = document.querySelectorAll('article');
  for (const articleHTML of allArticles) {
    articleHTML.style.display = 'block';
  }
});

// BEST
// if clicked #best button hide the article then show the article with class
// hide all the articles
document.querySelector('#best').addEventListener('click', function () {
  

  // hide All
  const allArticles = document.querySelectorAll('article');
  for (const articleHTML of allArticles) {
    articleHTML.style.display = 'none';
  }
  // Show ALL the  articles with class #best
  const filteredArticle = document.querySelectorAll('article.best');
  for (const articleHTML of filteredArticle) {
    articleHTML.style.display = 'block';
  }
});


//-----------------clone comments--------------


const comm = document.querySelector(" #came");

for (const comma of comments) {
 // debugger;
  const clone = comm.cloneNode(true);
  document.querySelector("footer").append(clone);

  clone.querySelector("img").src = photo.;
  clone.querySelector("h2").innerText = photo.name;
  clone.querySelector("h4").innerText = photo.price;
  //clone.querySelector("h2").innerText = photo.bestSeller;

  if (photo.bestSeller) {
    clone.classList.add('best');
  } else {
    clone.querySelector('.seller').remove();
  }


}
template.remove();
