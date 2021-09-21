'use strict';

const dataList = [];

function displayData() {
  console.log(dataList.length);
  const parentContainer = document.getElementById('mediaCards');

  dataList.forEach((data) => {
    const mediaData = data['results'];
    console.log(mediaData);
    const service = Object.keys(data['results'][0]['streamingInfo'])[0];

    for (let i = 0; i < mediaData.length; i++) {
      const currentTitle = mediaData[i];

      const newCardContent = `
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card bg-dark text-light">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                      <img src="img/${service}.svg" alt="Logo" class="img-fluid logo-size">
                      <img src="${currentTitle['posterURLs']['92']}" alt="Movie Picture" class="img-fluid">
                  </div>
                  <h3 class="card-title mb-3">
                      ${currentTitle['title']}
                  </h3>
                  <p class="card-text">
                      <span>${currentTitle['year']}</span> <span>${currentTitle['tmdb_type']}</span>
                  </p>
                  <p class="card-text para-text-limit">
                      ${currentTitle['overview']}
                  </p>
                  <a href="${currentTitle['streamingInfo'][service]['us']['link']}" class="btn btn-light" target="_blank">Go to site</a>
              </div>
          </div>
        </div>
      `;

      parentContainer.innerHTML += newCardContent;
    }
  });
}

const netflixData = new Promise((resolve, reject) => {
  fetch(
    'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&language=en',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataList.push(data);
    })
    .then(() => resolve());
});

const primeData = new Promise((resolve, reject) => {
  fetch(
    'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=movie&language=en',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataList.push(data);
    })
    .then(() => resolve());
});

const disneyData = new Promise((resolve, reject) => {
  fetch(
    'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=disney&type=movie&language=en',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataList.push(data);
    })
    .then(() => resolve());
});

const asyncFillDataList = () => {
  const p = Promise.all([netflixData, primeData, disneyData]).then(() =>
    displayData()
  );

  // console.log(p);
};

asyncFillDataList();

// function displayData(data) {
//   const parentContainer = document.getElementById('mediaCards');
//   const mediaData = data['results'];

//   for (let i = 0; i < mediaData.length; i++) {
//     const currentTitle = mediaData[i];
//     const service = Object.keys(data['results'][0]['streamingInfo'])[0];

//     const newCardContent = `
//     <div class="col-xl-3 col-lg-4 col-md-6">
//       <div class="card bg-dark text-light">
//           <div class="card-body text-center">
//               <div class="h1 mb-3">
//                   <img src=img/${service}.svg" alt="Logo" class="img-fluid logo-size">
//                   <img src="${currentTitle['posterURLs']['92']}" alt="Movie Picture" class="img-fluid">
//               </div>
//               <h3 class="card-title mb-3">
//                   ${currentTitle['title']}
//               </h3>
//               <p class="card-text">
//                   <span>${currentTitle['year']}</span> <span>${currentTitle['tmdb_type']}</span>
//               </p>
//               <p class="card-text para-text-limit">
//                   ${currentTitle['overview']}
//               </p>
//               <a href="${currentTitle['streamingInfo'][service]['us']['link']}" class="btn btn-light" target="_blank">Go to site</a>
//           </div>
//       </div>
//     </div>
//   `;

//     parentContainer.innerHTML += newCardContent;
//   }
// }
