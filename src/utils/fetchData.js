export const exerciseOptions = {
        method: 'GET',
        
        headers: {
          'x-rapidapi-key': 'be77c78cedmshe9e55185493d57ap105922jsnbae2fe448919',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        },
      };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();// to extract the data

    return data;

};