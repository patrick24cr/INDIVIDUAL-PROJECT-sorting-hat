import students from "./data.js";

function returnHouseDOMString(house) {
  let studentsCopy = [...students];
  function compare(a, b) {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    return 0;
  }
  studentsCopy.sort(compare); //sorts the copy of students array by id, highest to lowest

  let gryffindorString =
    '<img src="images/gryffindor.png" alt="gryffindor coat of arms">';
  let hufflepuffString =
    '<img src="images/hufflepuff.png" alt="hufflepuff coat of arms">';
  let ravenclawString =
    '<img src="images/ravenclaw.png" alt="ravenclaw coat of arms">';
  let slytherinString =
    '<img src="images/slytherin.png" alt="ravenclaw coat of arms">';
  let voldemortString = '<img src="images/skull2.png" alt="skull">';

  studentsCopy.forEach((student) => {
    if (student.school === "gryffindor" && student.expelled === false) {
      gryffindorString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`;
    }
    if (student.school === "hufflepuff" && student.expelled === false) {
      hufflepuffString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`;
    }
    if (student.school === "ravenclaw" && student.expelled === false) {
      ravenclawString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`;
    }
    if (student.school === "slytherin" && student.expelled === false) {
      slytherinString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`;
    }
    if (student.expelled === true) {
      voldemortString += `<div class="student-card">
      <div class="name-part">${student.name}</div>
      </div>`;
    }
  });
  if (house === "gryffindor") {
    return gryffindorString;
  }
  if (house === "hufflepuff") {
    return hufflepuffString;
  }
  if (house === "ravenclaw") {
    return ravenclawString;
  }
  if (house === "slytherin") {
    return slytherinString;
  }
  if (house == "voldemort") {
    return voldemortString;
  }
}

export default returnHouseDOMString;
