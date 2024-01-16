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

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const img = document.createElement("img");
        const title = document.createElement("h3");
        const desc = document.createElement("p");
        const genre = document.createElement("p");
        const rating = document.createElement("p");
        const br = document.createElement("br");

        img.src = movie.medium_cover_image;
        img.alt = movie.title;

        title.textContent = movie.title;
        desc.textContent = movie.description_full;
        genre.innerHTML = `<b>Genres:</b> ${movie.genres}`;
        rating.innerHTML = `<strong>Rating:</strong> ${movie.rating}`;

        card.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(br);
        cardBody.appendChild(genre);
        cardBody.appendChild(rating);

        card.appendChild(cardBody);

        content.appendChild(card);
        console.log(img);
        console.log(title);
        console.log(desc);
        console.log(genre);
        console.log(rating);
      }
    })
    .catch((error) => console.log(error));
} else {
  console.error("Movie ID not provided in the URL");
}
