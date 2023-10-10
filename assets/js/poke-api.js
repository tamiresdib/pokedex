const pokeApi = {};

pokeApi.getPokemons = () => {
  const offset = 10;
  const limit = 10;
  const url =
    "https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}";
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error));
};
