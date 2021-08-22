import { businesses, customers } from "./data.js"

/* From that array, extract just the customers' contact email addresses and store them in a new array.
You will need a nested array method - meaning one iteration inside another one -
since you need to iterate the entire array of customers, and then iterate the array of emails for each one.*/
let domString = "";

customers.forEach(customer => {
  customer.contacts.email.forEach(email => {
    domString += `
    <section>
      ${email}
    </section>
  `;

  const emailEl = document.getElementById("email")
  emailEl.innerHTML = domString;
  });
});
