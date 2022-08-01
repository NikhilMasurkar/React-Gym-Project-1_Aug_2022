export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '10aaf7cb03msh36b00708876e761p14f59cjsn80075c8f02a6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

//we have a fetchdata function which export to searchExercise 
// and fetchdata get url and option from Search Exercise where url and exerciseOption pass as a parameter.
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
