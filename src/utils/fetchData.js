export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    // 'X-RapidAPI-Key': '3c7743f8a4msh69eea4519c4d913p12b453jsne18dc7150ccd',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',

  headers: {
    'X-RapidAPI-Key': 'c3f8e483f8msh9ae6e18f9a2dda4p12a502jsnf57c6a9b073d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
//we have a fetchData function which export to searchExercise 
// and fetchData get url and option from Search Exercise where url and exerciseOption pass as a parameter.
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
