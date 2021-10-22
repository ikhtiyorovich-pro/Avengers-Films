// // console.log(fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e959235f'));
// const elLoader = document.querySelector(".js-loader")
// const elFilmsList = document.querySelector(".js-films-list");

// fetch("https://www.omdbapi.com/?apikey=9fcd4d84&s=Avengers")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);

//     elLoader.style.display = "none"
//     working(data.Search);
//   });

// function working(array) {
//   array.forEach(element => {
//     renderFilms(element);
//   });
// }

// function renderFilms(object) {
//   const newLi = document.createElement("li");
//   const newHeading = document.createElement("h2")
//   const newPoster = document.createElement("img")
//   const newP = document.createElement("h4");
//   const newParagraphType = document.createElement("h5");

//   newLi.setAttribute("class", "list")
//   newPoster.setAttribute("class", "images")

//   newHeading.textContent = object.Title;
//   newPoster.src = object.Poster
//   newP.textContent = object.Year;
//   newParagraphType.textContent = object.Type;

//   elFilmsList.appendChild(newLi);
//   newLi.appendChild(newPoster)
//   newLi.appendChild(newHeading)
//   newLi.appendChild(newP);
//   newLi.appendChild(newParagraphType);
// }

setInterval(() => {
  setInterval(() => {
    document.body.style.backgroundColor = "red"
  }, 500);

  setInterval(() => {
    document.body.style.backgroundColor = "blue"
  }, 1000);
}, 0);