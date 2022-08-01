export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key":"4d973ba7ccmsh29ffc750a106da5p195acejsn3539fc295535"
  }
};

//we have a fetchdata function which export to searchExercise 
// and fetchdata get url and option from Search Exercise where url and exerciseOption pass as a parameter.
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
