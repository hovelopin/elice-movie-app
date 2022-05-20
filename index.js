const inputMovie = document.querySelector('#input_movie');
const searchMovie = document.querySelector('#search_movie');
const sectionMovie = document.querySelector('#section_movie');

inputMovie.addEventListener('input' , () => {
  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
  .then(res => res.json())
  .then(data => {
    const movieData = data.data.movies;
    const inputValue = inputMovie.value;
    const filteredMovie = movieData.filter(item => item.title.indexOf(inputValue) === 0);
    
    sectionMovie.innerHTML = '';
    filteredMovie.map(items => {
      sectionMovie.innerHTML += 
      `
        <div class="movie_contents_wrap">
          <div class="movie_wrap">
            <a href="${items.url}">
              <div class="movie_contents_container">
                <div>
                  <img src = "${items.medium_cover_image}" width="200px" height="400px">
                  <p>rating : ${items.rating}</p>
                  <p>runtime : ${items.runtime}</p>
                  <p>year : ${items.year}</p>
                  <p>${items.genres}</p>
                </div>
                <div>
                  <h2 class="title">${items.title}</h2>
                  <p class="introduce">
                    ${items.description_full}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      `
    });
  });
})


