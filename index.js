let content = document.querySelector(".content");
let body = document.querySelector(".body");
let card = document.querySelector(".card");
let image = document.getElementById("image");
let cardTitle = document.querySelector(".card-title");
let img = document.querySelector("img");

fetch("https://yts.mx/api/v2/list_movies.json?limit=50")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data && data.data && data.data.movies) {
      data.data.movies.forEach((item) => {
        if (!item.summary) {
          return false;
        }
        const card = document.createElement("div");
        card.classList.add("card");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const img = document.createElement("img");
        const title = document.createElement("h3");
        const summary = document.createElement("p");

        img.src = item.medium_cover_image;
        img.alt = item.title;
        title.textContent = item.title;
        summary.textContent = item.summary.slice(0, 50);
        card.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(summary);

        card.appendChild(cardBody);

        card.addEventListener("click", function () {
          window.location.href = `single-movie.html?movie_id=${item.id}`;
          let movie_id = item.id;
          console.log(movie_id);
        });
        content.appendChild(card);
      });
    } else {
      console.error("Invalid API response format");
    }

    // for (let i = 0; i < data.data.movies.length; i++) {
    //   const item = data.data.movies[i];

    //   const img = item.medium_cover_image;
    //   const imageAlt = item.title;
    //   const title = item.title;
    //   const text = item.summary;
    //   image.src = img;
    //   image.alt = imageAlt;

    //   console.log(img);
    //   console.log(title);
    //   console.log(text.slice(0, 5));
    //   cardTitle.innerHTML = title;

    // const div = `<div class="card"></div>`;
    // const img = `<img src="${item.medium_cover_image}" alt="${item.title}">`;
    // const title = `<h5> ${item.title}</h5>`;
    // console.log(img);
    // console.log(title);
    // // const img = document.querySelector(".image") = item.title[i]
    // content.innerHTML += div;
    // let card = document.querySelector(".card");

    // card.innerHTML = `<img src="${item.medium_cover_image}" alt="${item.title}">`;
    // card.innerHTML = title;
    // // card.innerHTML += img;
    // // card.innerHTML += title;
    // // content.innerHTML += divClose;
    // }
  })
  .catch((error) => console.log(error));
