import errorNotification from './pnotify.js';

// рефакторирнг then catch против async await

export default async function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';

  const response = await fetch(`${url}${searchQuery}`);

  try {
    const newCountry = await response.json();
    return newCountry;
  } catch (error) {
    errorNotification('No matches found. Try again.');
    return error;
  }
}

// export default function fetchCountries(searchQuery) {
//   const url = 'https://restcountries.eu/rest/v2/name/';

//   return fetch(`${url}${searchQuery}`)
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error');
//     })
//     .catch(error => {
//       errorNotification('No matches found. Try again.');
//       return error;
//     });
// }
