'use strict';

function displayData(data) {
  const parentContainer = document.getElementById('mediaCards');
  const mediaData = data['results'];

  for (let i = 0; i < mediaData.length; i++) {
    const currentTitle = mediaData[i];

    const newCardContent = `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card bg-dark text-light">
          <div class="card-body text-center">
              <div class="h1 mb-3">
                  <img src="img/Netflix.svg" alt="Logo" class="img-fluid">
                  <img src="${currentTitle['posterURLs']['92']}" alt="Movie Picture" class="img-fluid">
              </div>
              <h3 class="card-title mb-3">
                  ${currentTitle['title']}
              </h3>
              <p class="card-text">
                  <span>${currentTitle['year']}</span> <span>${currentTitle['tmdb_type']}</span>
              </p>
              <p class="card-text">
                  ${currentTitle['overview']}
              </p>
              <a href="${currentTitle['streamingInfo']['netflix']['us']['link']}" class="btn btn-light" target="_blank">Go to site</a>
          </div>
      </div>
    </div>
  `;

    parentContainer.innerHTML += newCardContent;
  }
}

fetch(
  'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&language=en',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
      'x-rapidapi-key': '5fe66979e9msh27f39a3bb4e6419p16dd38jsnf0085c197d1a',
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });
