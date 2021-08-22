import businesses from "./data.js";

const outEl = document.querySelector("#output")
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
// const agents = businesses.map(business => {
//   return {
//     fullName: business.purchasingAgent,
//     company: business.companyName,
//     phoneNumber: business.phoneWork
//   };
// });

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `
//     <h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2>
//     <h3>${agent.company}</h3>
//     <h4>${agent.phoneNumber}</h4>
//   `;
//   outEl.innerHTML += "<hr/>";
// });

const candies = [
  {
      name: "Lollipop",
      price: 2.99
  },
  {
      name: "Tootsie Roll",
      price: 1.49
  },
  {
      name: "Sugar Daddy",
      price: 2.49
  }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)
> { name: "Tootsie Roll", price: 1.49 }

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
  /* CALCULATE ORDER SUMMARY */
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
  )
  let isBigSpender = false;

  if (totalOrders > 40000) {
    isBigSpender = true;
  }

  return isBigSpender;
});
console.log(bigSpenders);

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false

  if (business.addressStateCode === "NY") {
      inNewYork = true
  }

  return inNewYork;
});

// Array to contain all the manufacturing businesses
const manufacturingBusinesses = businesses.filter(business => {
  let isManufacturing = false;

  if (business.companyIndustry === "Manufacturing") {
    isManufacturing = true;
  }

  return isManufacturing;
});

// manufacturingBusinesses.forEach(business => {
//   const zipCode = business.addressZipCode;
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business['addressStateCode']} ${zipCode}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

businesses.forEach(business => {
  /* CALCULATE ORDER SUMMARY */
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
  )

  outEl.innerHTML += `
      <h2>
          ${business.companyName}
          ($${parseFloat(totalOrders).toFixed(2)})
      </h2>
      <section>
          ${business.addressFullStreet}
      </section>
      <section>
          ${business.addressCity},
          ${business.addressStateCode}
          ${business.addressZipCode}
      </section>
  `;
  outEl.innerHTML += "<hr/>";
});

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING AGENT */
            const foundAgent = businesses.find(
                business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
                </h2>
                <h2>
                ${foundAgent.companyName}
                </h2>
                <section>
                ${foundAgent.addressFullStreet}

                </section>
                <section>
                ${foundAgent.addressCity},
                ${foundAgent.addressStateCode}
                ${foundAgent.addressZipCode}
                </section>
            `;
        }
    });

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
const totalRainfall = monthlyRainfall.reduce(
  (currentTotal, nextValue) => currentTotal += nextValue,
  0
)
console.log(totalRainfall)

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
const sentence = words.reduce(
  (currentTotal, nextValue) => currentTotal += " " + nextValue
)
console.log(sentence + ".");
