fetch("https://yts.mx/api/v2/list_movies.json?limit=5")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data && data.data && data.data.movies) {
      data.data.movies.forEach((item) => {
        const markup = `<li> ${item.title} </li>`;
        console.log(markup);
        document.querySelector(".card").insertAdjacentHTML("beforeend", markup);
      });
    } else {
      console.error("Invalid API response format");
    }
  })
  .catch((error) => console.log(error));
