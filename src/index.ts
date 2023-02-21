import * as dotenv from 'dotenv';

dotenv.config();

// import './styles/main.scss';

const accessKey = process.env.ACCESS_KEY;

const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

const heading = document.createElement('h1');
heading.textContent = `Tdhiddsdss isss the url: ${url}`;

// Append heading node to the DOM
const app = document.querySelector('#root')!;
app.append(heading);

// function loadImg() {
//   const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`;
//   console.log(url);
//   console.log('IMAGE URL', url);
//   //  const imageDiv = document.querySelector('.image');
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       for (let i = 0; i < data.results.length; i++) {
//         /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
//         if (data.results[i].id === '6VhPY27jdps') {
//           const imageElement = document.createElement('img');
//           imageElement.src = data.results[i].urls.thumb;
//         //   imageDiv.append(imageElement);
//         }
//       }
//     });
// }
// window.addEventListener('load', loadImg);

// function then(arg0: (data: any) => void) {
//     throw new Error('Function not implemented.');
// }
