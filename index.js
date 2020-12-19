function createNode(el) {
  return document.createElement(el);
}
function append(parent, child) {
  return parent.appendChild(child);
}

function handleSubmit() {}

const URL = "https://simple-form-api.herokuapp.com/api/users";
let userDetails = document.getElementById("user-details");

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let users = data;
    return users.map((user) => {
      let tableRow = createNode("tr");
      let firstName = createNode("td");
      let lastName = createNode("td");

      firstName.innerHTML = user.firstname;
      lastName.innerHTML = user.lastname;

      append(userDetails, tableRow);
      append(tableRow, firstName);
      append(tableRow, lastName);
    });
  })
  .catch((error) => {
    console.log(error);
  });

let secondUser = {
  firstname: "Tester",
  lastname: "Ellioty",
  gender: "Male",
  email: "test2@genesystechhub.com",
  password: "2Elliotyibissaaaes@a!",
};

fetch("https://simple-form-api.herokuapp.com/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(secondUser),
})
  .then((response) => response.json())
  .catch((error) => console.log(error));
