let Data;

fetch("https://simple-form-api.herokuapp.com/api/users")
  .then((response) => response.json())
  .then((data) => (Data = data[0]));

console.log(Data);

const tableHeader = document.querySelector(".table-head");
const headerChildren = tableHeader.children;

console.log(headerChildren);

for (i = 0; i < headerChildren.length; i++) {
  headerChildren[i].style.color = "red";
}
