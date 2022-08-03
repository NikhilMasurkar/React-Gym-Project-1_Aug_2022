export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'c3f8e483f8msh9ae6e18f9a2dda4p12a502jsnf57c6a9b073d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

//we have a fetchData function which export to searchExercise 
// and fetchData get url and option from Search Exercise where url and exerciseOption pass as a parameter.
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
