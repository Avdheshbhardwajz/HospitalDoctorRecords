// fill in javascript code here
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  let Name = document.getElementById("name").value;
  let doctor = document.getElementById("docID").value;
  let specialization = document.getElementById("dept").value;
  let exp = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mbl").value;
  let role;

  if (exp <= 1) {
    role = "Trainee";
  } else if (exp >= 2 && exp <= 5) {
    role = "Junior";
  } else {
    role = "Senior";
  }

  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${Name}</td>
   <td>${doctor}</td>
   <td>${specialization}</td>
   <td>${exp}</td>
   <td>${email}</td>
   <td>${mobile}</td>
   <td>${role}</td>
   <td><a href="#" class = 'Dlt' >Delete</a></td>
   `;

  tbody.appendChild(tr);

  let dlt = tr.querySelector(".Dlt");
  dlt.addEventListener("click", () => {
    tbody.removeChild(tr);
  });
});
