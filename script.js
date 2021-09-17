'use strict';

function displayData(data) {
  // EASIER TO READ VERSION
  const parentContainer = document.getElementById('jsonData');
  // const div = document.createElement('div')
  // const displayString = JSON.stringify(data[0]);
  // div.innerHTML = displayString;
  // parentContainer.appendChild(div);

  for (const key in data) {
    const div = document.createElement('div');
    const displayString = `${JSON.stringify(key)}: ${JSON.stringify(
      data[key]
    )}`;
    div.innerHTML = displayString;
    parentContainer.appendChild(div);
  }

  // console.log(data);
}

// BASIC VERSION
//   const parentContainer = document.getElementById('jsonData');
//   const div = document.createElement('div');
//   div.innerHTML = JSON.stringify(data);
//   parentContainer.appendChild(div);

// const fetch = require('node-fetch');

// let url = `https://api.watchmode.com/v1/changes/new_titles?apiKey=${apiKey}&types=movie,tv_series`;

// fetch(url, { method: 'Get' })
//   .then((res) => res.json())
//   .then((json) => {
//     displayData(json.titles[1]);
//     console.log(json['titles']);
//   });
