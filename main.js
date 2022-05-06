let students =
[

]

function returnListDomString(house) {
  let studentsCopy = [...students];
  function compare( a, b ) {
    if ( a.id > b.id ){
      return -1;
    }
    if ( a.id < b.id ){
      return 1;
    }
    return 0;
  }
  studentsCopy.sort(compare); //sorts the copy of students array by id, highest to lowest

  let gryffindorString = '<img src="images/gryffindor.png" alt="gryffindor coat of arms">';
  let hufflepuffString = '<img src="images/hufflepuff.png" alt="hufflepuff coat of arms">';
  let ravenclawString = '<img src="images/ravenclaw.png" alt="ravenclaw coat of arms">';
  let slytherinString = '<img src="images/slytherin.png" alt="ravenclaw coat of arms">';
  let voldemortString = '<img src="images/skull2.png" alt="skull">';

  studentsCopy.forEach((student) => {
    if (student.school === 'gryffindor' && student.expelled === false) {
      gryffindorString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`
    }
    if (student.school === 'hufflepuff' && student.expelled === false) {
      hufflepuffString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`
    }
    if (student.school === 'ravenclaw' && student.expelled === false) {
      ravenclawString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`
    }
    if (student.school === 'slytherin' && student.expelled === false) {
      slytherinString += `<div class="student-card">
      <div class="name-part" id="name--${student.id}">${student.name}</div>
      <button class="expel-part" id="expel--${student.id}">Ex</button>
      </div>`
    }
    if (student.expelled === true) {
      voldemortString += `<div class="student-card">
      <div class="name-part">${student.name}</div>
      </div>`
    }
  })
  if (house === "gryffindor") {
    return gryffindorString
  }
  if (house === "hufflepuff") {
    return hufflepuffString
  }
  if (house === "ravenclaw") {
    return ravenclawString
  }
  if (house === "slytherin") {
    return slytherinString
  }
  if (house == "voldemort") {
    return voldemortString
  }
}

function renderToDom(target, string) {
  document.querySelector(target).innerHTML = string;
}

function initialDOMSetup(){
  const initialHTML = `
<div class="background">
  <div class="title" id="title">
    <img src="images/hogwarts.png" alt="hogwarts coat of arms" id="hogwarts-btn">
    <H1>Sorting Ceremony</H1>
    <img src="images/voldemort.png" alt="symbol of voldemort" id="voldemort-btn">
  </div>
  <div class="hat-background">
    <div class="hat-container">
      <div class="hat-img">
        <img src="images/hat.png" alt="the sorting hat">
      </div>
      <div class="hat-text" id="hat-text">
        <p>Would you like to begin?</p>
      </div>
    </div>
  </div>
  <div id="input-container">
    <button type="button" class="btn btn-secondary btn-lg" id="begin-btn">Let it begin</button>
  </div>
  <div class="house-container" id="house-container">
  <div class="gryffindor" id="gryffindor">
  ${returnListDomString("gryffindor")}
</div>
<div class="hufflepuff" id="hufflepuff">
  ${returnListDomString("hufflepuff")}
</div>
<div class="ravenclaw" id="ravenclaw">
  ${returnListDomString("ravenclaw")}
</div>
<div class="slytherin" id="slytherin">
  ${returnListDomString("slytherin")}
</div>
  </div>
</div>`
  renderToDom("#bodyDiv", initialHTML)
}

function fadeInEffect(thingToFadeIn) {
  var opacityCounter = 0;
  var fadeTarget = document.querySelector(thingToFadeIn);
  var fadeTimer = setInterval(function () {
      if (opacityCounter < 1) {
          fadeTarget.style.opacity = opacityCounter;
          opacityCounter += 0.1;
      } else {
          clearInterval(fadeTimer);
      }
  }, 50);
}

function fadeOutEffect(thingToFadeOut, divToRedefine, stringToInsert, thingToFadeIn) {
  var fadeTarget = document.querySelector(thingToFadeOut);
  var opacityCounter = 1;
  var fadeTimer = setInterval(function () {
      if (opacityCounter > 0) {
          fadeTarget.style.opacity = opacityCounter;
          opacityCounter -= 0.1;
      } else {
          clearInterval(fadeTimer);
          renderToDom(divToRedefine, stringToInsert);
          fadeInEffect(thingToFadeIn);
      }
  }, 50);
}

function hatDialogue(event) {
  const dice = Math.floor(Math.random() * 6);
  if (event === "approach") {
    const lines = ["I've seen plenty like you before", "Hmm, interesting is this one", "I've got a feeling about you", "No sense in delaying the innevitable", "Step right up", "Hmm, this one is difficult"]
    return lines[dice]
  }
  if (event === "gryffindor") {
    const lines = ["Gryffindor is the place for you", "A brave one you are. Gryffindor!", "I sense a fire in you. Gryffindor", "A live one you are. Have a seat with Gryffindor", "You'll soon discover your courage, in Gryffindor", "Gryffindor is truly where you belong"]
    return lines[dice]
  }
  if (event === "hufflepuff") {
    const lines = ["Hufflepuff is the place for you", "Simple and hardworking. Hufflepuff!", "You belong with Hufflepuff, I think", "Hufflepuff will have much to teach you", "You will find your kind in Hufflepuff", "Hmm, Hufflepuff will be your house"]
    return lines[dice]
  }
  if (event === "ravenclaw") {
    const lines = ["Ravenclaw, as pretentiously smart as you are", "Ravenclaw is the place for someone with your spark", "Sharp as a tack. Ravenclaw!", "There will be many mysteries for you to unlock in Ravenclaw", "Ravenclaw is your home", "I can already tell you read too much. Ravenclaw."]
    return lines[dice]
  }
  if (event === "slytherin") {
    const lines = ["Slytherin is where you belong", "Slytherin will nurture your greatness", "You will be a great asset to Slytherin", "Slytherin will aid you in your ambitions", "Slytherin! That was easy", "Slytherin! We all knew you looked like a villain"]
    return lines[dice]
  }
  if (event === "expel") {
    const lines = ["I didn't like them anyway", "Good riddance", "I knew they were no good", "Expulsion is more fun than sorting", "Mañana, iguana", "So much for that one"]
    return lines[dice]
  }
}

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
    fadeOutEffect(`#${newStudentObject.school}`, `#${newStudentObject.school}`, returnListDomString(newStudentObject.school), `#${newStudentObject.school}`)
    document.querySelector('form').reset();
    firstNameClickOfRound = true;
  })
  document.querySelector("#title").addEventListener('click', (e) => {
    if (e.target.id === "voldemort-btn" && voldemortArmyDisplayed === false && layoutComplete === true) {
      const voldemortArmy = `<div class="voldemort" id="voldemort">${returnListDomString("voldemort")}</div>`
      fadeOutEffect("#house-container", "#house-container", voldemortArmy, "#house-container");
      voldemortArmyDisplayed = true;
    }
    if (e.target.id === "hogwarts-btn" && voldemortArmyDisplayed === true && layoutComplete === true) {
      const hogwartsStudentBody = `
      <div class="gryffindor" id="gryffindor">
      ${returnListDomString("gryffindor")}
      </div>
      <div class="hufflepuff" id="hufflepuff">
      ${returnListDomString("hufflepuff")}
      </div>
      <div class="ravenclaw" id="ravenclaw">
      ${returnListDomString("ravenclaw")}
      </div>
      <div class="slytherin" id="slytherin">
      ${returnListDomString("slytherin")}
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
              fadeOutEffect(`#${students[indexToExpel].school}`, `#${students[indexToExpel].school}`, returnListDomString(students[indexToExpel].school), `#${students[indexToExpel].school}`)
              students[indexToExpel].school = "null";
              clearInterval(redTimer);
            }
        }, 50);
    }
  });
}


initialDOMSetup();
eventListeners();
