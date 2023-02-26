const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const person1name = person.result[0].name.common;
const person1age = person.result[0].age;
const person1street = person.result[0].address.street;
const person1house = person.result[0].address.house;

const person2name = person.result[1].name.common;
const person2age = person.result[1].age;
const person2street = person.result[1].address.street;
const person2house = person.result[1].address.house;

document.getElementById("p1name").innerText = `Person Name: ${person1name}`;
document.getElementById("p1age").innerText = `age: ${person1age}`;
document.getElementById(
  "p1street"
).innerText = `Street: ${person1street}, House No: ${person1house}`;

document.getElementById("p2name").innerText = `Person Name: ${person2name}`;
document.getElementById("p2age").innerText = `age: ${person2age}`;
document.getElementById(
  "p2street"
).innerText = `Street: ${person2street}, House No: ${person2house}`;




//Another Way

// const parent = document.getElementById("show-element");
// const child = document.createElement('div');
// child.classList.add('card', 'border-primary', 'mb-3');

// child.innerHTML = `
//             <div class="card border-primary mb-3" style="width: 28rem;">
//             <div id="p1name" class="card-header">Person Name: ${person1name}</div>
//             <div class="card-body text-primary">
//               <p id="p1age" class="card-title">age: ${person1age}</p>
//               <p id="p1street" class="card-text">Street: ${person1street}, House No: ${person1house}</p>
//             </div>
//             </div>
//               <div class="card border-warning mb-3" style="width: 28rem;">
//                 <div id="p2name" class="card-header">Person Name: ${person2name}</div>
//                 <div class="card-body text-warning">
//                   <p id="p2age" class="card-title">age: ${person2age}</p>
//                   <p id="p2street" class="card-text">Street: ${person2street}, House No: ${person2house}</p>
//                 </div>
//               </div>

// `;
// parent.appendChild(child);
