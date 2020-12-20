const URL = "https://simple-form-api.herokuapp.com/api/users";
let userDetails = document.getElementById("user-details");
let form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstname = document.getElementById("formFirstName").value;
  let lastname = document.getElementById("formLastName").value;
  let genderList = document.querySelectorAll("input[name='gender']");
  let gender = "Unspecified";
  console.log(genderList);

  for (i = 0; i < genderList.length; i++) {
    if (genderList[i].checked === true) {
      gender = genderList[i].value;
    }
  }

  let email = document.getElementById("formEmail").value;
  let newPassword = document.getElementById("newPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword === confirmPassword) {
    let password = newPassword;
    let User = {
      firstname,
      lastname,
      gender,
      email,
      password,
    };

    console.log(User);

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(User),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
});

function createNode(el) {
  return document.createElement(el);
}
function append(parent, child) {
  return parent.appendChild(child);
}
function loadUsers() {
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
}

function userDashBoard() {
  alert("Loading...");
}
