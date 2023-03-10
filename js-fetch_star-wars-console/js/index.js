console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const r2d2 = data.results.find((character) => {
      return character.name === "R2-D2";
    });
    console.log(r2d2.eye_color);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
