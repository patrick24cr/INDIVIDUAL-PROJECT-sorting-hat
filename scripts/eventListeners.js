import students from "./data.js";
import hatDialogue from "./hatDialogue.js";
import returnHouseDOMString from "./returnHouseDOMString.js";
import { renderToDom, fadeOutEffect, fadeInEffect } from "./utilities.js";

function eventListeners() {
  let layoutComplete = false;
  let voldemortArmyDisplayed = false;
  let firstNameClickOfRound = false;

  document.querySelector("#begin-btn").addEventListener('click', (e) => {
    const nameForm = `
    <form>
      <div class="form-container" id="form-container">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="text" class="col-form-label">Name</label>
          </div>
          <div class="col-auto">
            <input type="text" class="form-control" id="name-field" aria-label="name" required>
         </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-secondary btn-sm" id="submit-btn">Sort</button>
          </div>
        </div>
      </div>
    </form>`
    fadeOutEffect(`#${e.target.id}`, "#input-container", nameForm, "#form-container");
    fadeOutEffect("#hat-text", "#hat-text", `<p>What is your name?</p>`, "#hat-text");
  });

  document.querySelector("#input-container").addEventListener('keypress', (e) => {
    if (document.querySelector("#name-field") != null && layoutComplete === false && e.target.id != "submit-btn") {
      fadeInEffect("#house-container");
      layoutComplete = true;
    }
    if (e.target.id === 'name-field') {
      if (firstNameClickOfRound === true) {
        fadeOutEffect("#hat-text", "#hat-text", `<p>${hatDialogue('approach')}</p>`, "#hat-text");
      }
      firstNameClickOfRound = false;
    }
  });

  document.querySelector("#input-container").addEventListener('submit', (e) => {
    e.preventDefault();
    const createId = (array) => {
      if (array.length) {
        const idArray = [];
        array.forEach((el) => {
          idArray.push(el.id);
        })
        return Math.max(...idArray) + 1;
      } else {
        return 0;
      }
    }
    let chosenSchool = ""
    const dice = Math.floor(Math.random() * 4);
    switch (dice) {
      case 0:
        chosenSchool = "gryffindor"
        break;
      case 1:
        chosenSchool = "hufflepuff"
        break;
      case 2:
        chosenSchool = "ravenclaw"
        break;
      case 3:
        chosenSchool = "slytherin"
        break;
      default:
        console.log(`Dice didn't work`);
    }
    const checkBalance = (array) => {
      if (array.length) {
        let gryffindorCount = 0;
        let hufflepuffCount = 0;
        let ravenclawCount = 0;
        let slytherinCount = 0;
        array.forEach((el) => {
          switch (el.school) {
            case 'gryffindor':
              gryffindorCount++
              break;
            case 'hufflepuff':
              hufflepuffCount++
              break;
            case 'ravenclaw':
              ravenclawCount++
              break;
            case 'slytherin':
              slytherinCount++
              break;
          }
        })
        const arrayOfCounts = [gryffindorCount, hufflepuffCount, ravenclawCount, slytherinCount]
        const spread = Math.max(...arrayOfCounts) - Math.min(...arrayOfCounts);
        if (spread < 3) {
          console.log("the schools are well balanced")
        } else {
          const objOfCounts = {
            gryffindor: gryffindorCount,
            hufflepuff: hufflepuffCount,
            ravenclaw: ravenclawCount,
            slytherin: slytherinCount
          };
          var smallest = '';
          for (var key in objOfCounts) {
            if (smallest !== '' && objOfCounts[key] < objOfCounts[smallest]) {
              smallest = key;
            } else if (smallest === '') {
              smallest = key;
            }
          }
          console.log(smallest, "needs more students so");
          chosenSchool = smallest;
        }
      } else {
        console.log("student array is too short to balance");
      }
    }
    checkBalance(students);
    const newStudentObject = {
      id: createId(students),
      name: document.querySelector("#name-field").value,
      school: chosenSchool,
      expelled: false,
    }
    fadeOutEffect("#hat-text", "#hat-text", `<p>${hatDialogue(`${chosenSchool}`)}</p>`, "#hat-text");
    console.log(newStudentObject)
    students.push(newStudentObject);
    fadeOutEffect(`#${newStudentObject.school}`, `#${newStudentObject.school}`, returnHouseDOMString(newStudentObject.school), `#${newStudentObject.school}`)
    document.querySelector('form').reset();
    firstNameClickOfRound = true;
  })

  document.querySelector("#title").addEventListener('click', (e) => {
    if (e.target.id === "voldemort-btn" && voldemortArmyDisplayed === false && layoutComplete === true) {
      const voldemortArmy = `<div class="voldemort" id="voldemort">${returnHouseDOMString("voldemort")}</div>`
      fadeOutEffect("#house-container", "#house-container", voldemortArmy, "#house-container");
      voldemortArmyDisplayed = true;
    }
    if (e.target.id === "hogwarts-btn" && voldemortArmyDisplayed === true && layoutComplete === true) {
      const hogwartsStudentBody = `
      <div class="gryffindor" id="gryffindor">
      ${returnHouseDOMString("gryffindor")}
      </div>
      <div class="hufflepuff" id="hufflepuff">
      ${returnHouseDOMString("hufflepuff")}
      </div>
      <div class="ravenclaw" id="ravenclaw">
      ${returnHouseDOMString("ravenclaw")}
      </div>
      <div class="slytherin" id="slytherin">
      ${returnHouseDOMString("slytherin")}
      </div>`
      fadeOutEffect("#house-container", "#house-container", hogwartsStudentBody, "#house-container");
      voldemortArmyDisplayed = false;
    }
  });
  
  document.querySelector("#house-container").addEventListener('click', (e) => {
    if (e.target.id.includes("--")) {
      const idSplit = e.target.id.split("--")
      let [method, studentId] = e.target.id.split("--")
      studentId = Number(studentId)
      const indexToExpel = students.findIndex(person => person.id === studentId);
      students[indexToExpel].expelled = true;
      fadeOutEffect("#hat-text", "#hat-text", `<p>${hatDialogue('expel')}</p>`, "#hat-text");
      let redCounter = 35;
        let redTarget = document.querySelector(`#name--${studentId}`);
        let redTimer = setInterval(function () {
            if (redCounter < 255) {
                redTarget.style.backgroundColor = `rgb(${redCounter}, 36, 36)`;
                redCounter += 55;
            } else {
              fadeOutEffect(`#${students[indexToExpel].school}`, `#${students[indexToExpel].school}`, returnHouseDOMString(students[indexToExpel].school), `#${students[indexToExpel].school}`)
              students[indexToExpel].school = "null";
              clearInterval(redTimer);
            }
        }, 50);
    }
  });
}

export default eventListeners;
