const bodySectionMovie = document.querySelector('#section_movie');
fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  .then(res => res.json())
  .then(data => {
    const movieData = data.data.movies;
    console.log(movieData);
    sectionMovie.innerHTML= '';
    movieData.map(items => {
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
sectionMovie.innerHTML=`로딩중입니다. 기다려주세요`;

