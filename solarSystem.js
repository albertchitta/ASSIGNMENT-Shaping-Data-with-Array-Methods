const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
let domString = "";

planets.forEach(planet => {
  domString += `
    <section>
      ${planet}
    </section>
  `;

  const planetEl = document.getElementById("planets")
  planetEl.innerHTML = domString;
});


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
planets.map(planet => {
  let firstLetter = planet.charAt(0).toUpperCase();
  let remainingLetters = planet.slice(1);
  domString += `
    <section>
      ${firstLetter}${remainingLetters}
    </section>
  `;

  const planetEl = document.getElementById("planets")
  planetEl.innerHTML = domString;
});


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
planets.map(planet => {
  planet.includes('e') ? domString += `${planet} `: '';

  const planetEl = document.getElementById("planets")
  planetEl.innerHTML = domString;
});
