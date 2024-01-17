const urlParams = new URLSearchParams(window.location.search);
const movie_id = urlParams.get("movie_id");
let content = document.querySelector(".content");
let body = document.querySelector(".body");
let card = document.querySelector(".card");
let image = document.getElementById("image");
let cardTitle = document.querySelector(".card-title");
let img = document.querySelector("img");

if (movie_id) {
  fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data && data.data && data.data.movie) {
        const movie = data.data.movie;
        console.log(movie);

        const card = document.createElement("div");
        card.classList.add("card");

        // const cardBody = document.createElement("div");
        // cardBody.classList.add("card-body");

        const img = document.createElement("img");
        const text = document.createElement("div");
        text.classList.add("card-body");
        // const text = document.createElement("p");
        // const genre = document.createElement("p");
        // const rating = document.createElement("p");

        img.src = movie.large_cover_image;
        img.alt = movie.title;

        text.innerHTML = `<h3>${movie.title}</h3> <br><p>${movie.description_full}</p><br> <p><b>Genres:</b> ${movie.genres}</p> <br> <p><strong>Rating:</strong> ${movie.rating}</p> `;

        // title.innerHTML = `<br><p>${movie.description_full}</p><br> <b>Genres:</b> ${movie.genres} <br> <strong>Rating:</strong> ${movie.rating} `;
        // genre.innerHTML = `<br><b>Genres:</b> ${movie.genres}<br> <strong>Rating:</strong> ${movie.rating}`;
        // rating.innerHTML = `<strong>Rating:</strong> ${movie.rating}`;

        card.appendChild(img);
        card.appendChild(text);
        // cardBody.appendChild(text);
        // cardBody.appendChild(genre);
        // cardBody.appendChild(rating);

        // card.appendChild(cardBody);

        content.appendChild(card);
        console.log(img);
        console.log(text);
        // console.log(text);
        // console.log(genre);
        // console.log(rating);
      }
    })
    .catch((error) => console.log(error));
} else {
  console.error("Movie ID not provided in the URL");
}
