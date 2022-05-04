let students =
[
  {
    id: 0,
    name: 'Patrick Burns',
    school: 'ravenclaw',
    expelled: false,
  },
  {
    id: 1,
    name: 'Chris Cho',
    school: 'ravenclaw',
    expelled: true,
  },
  {
    id: 2,
    name: 'Alex Hill',
    school: 'ravenclaw',
    expelled: false,
  },
  {
    id: 3,
    name: 'Kristina Slavik',
    school: 'gryffindor',
    expelled: false,
  },
  {
    id: 4,
    name: 'Justin Dinsmore',
    school: 'slytherin',
    expelled: false,
  },
  {
    id: 5,
    name: 'Kerry Moon',
    school: 'hufflepuff',
    expelled: false,
  },
  {
    id: 6,
    name: 'Cindy Loyola',
    school: 'gryffindor',
    expelled: false,
  }
]

const initialHTML = `
<div class="background">
    <div class="title">
      <H1>The Sorting Ceremony</H1>
    </div>
    <div class="hat-container">
      <div class="hat-img">
        <img src="images/hat.png" alt="the sorting hat">
      </div>
      <div class="hat-text" id="hat-text">
        <p>Would you like to begin?</p>
      </div>
    </div>
    <div id="input-container">
      <button type="button" class="btn btn-secondary btn-lg" id="begin-btn">Let it begin</button>
    </div>
    <div class="house-container" id="house-container">
      <div class="gryffindor" id="gryffindor">
        <img src="images/gryffindor.png" alt="gryffindor coat of arms">
      </div>
      <div class="hufflepuff" id="hufflepuff">
        <img src="images/hufflepuff.png" alt="hufflepuff coat of arms">
      </div>
      <div class="ravenclaw" id="ravenclaw">
        <img src="images/ravenclaw.png" alt="ravenclaw coat of arms">
      </div>
      <div class="slytherin" id="slytherin">
        <img src="images/slytherin.png" alt="ravenclaw coat of arms">
      </div>
    </div>
  </div>
`

function cardsOnDom() {
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
  const cardString = `
  <div class="student-card">
    <div class="name-part">Patrick Burns</div>
    <button class="expel-part">Ex</button>
  </div>
  `
  let gryffindorString = '<img src="images/gryffindor.png" alt="gryffindor coat of arms">';
  let hufflepuffString = '<img src="images/hufflepuff.png" alt="hufflepuff coat of arms">';
  let ravenclawString = '<img src="images/ravenclaw.png" alt="ravenclaw coat of arms">';
  let slytherinString = '<img src="images/slytherin.png" alt="ravenclaw coat of arms">';

  studentsCopy.forEach((student) => {
    if (student.school === 'gryffindor' && student.expelled === false) {
      gryffindorString += `<div class="student-card">
      <div class="name-part">${student.name}</div>
      <button class="expel-part">Ex</button>
      </div>`
    }
    if (student.school === 'hufflepuff' && student.expelled === false) {
      hufflepuffString += `<div class="student-card">
      <div class="name-part">${student.name}</div>
      <button class="expel-part">Ex</button>
      </div>`
    }
    if (student.school === 'ravenclaw' && student.expelled === false) {
      ravenclawString += `<div class="student-card">
      <div class="name-part">${student.name}</div>
      <button class="expel-part">Ex</button>
      </div>`
    }
    if (student.school === 'slytherin' && student.expelled === false) {
      slytherinString += `<div class="student-card">
      <div class="name-part">${student.name}</div>
      <button class="expel-part">Ex</button>
      </div>`
    }
  })
  renderToDom("#gryffindor", gryffindorString)
  renderToDom("#hufflepuff", hufflepuffString)
  renderToDom("#ravenclaw", ravenclawString)
  renderToDom("#slytherin", slytherinString)
}

const nameForm = `
<div class="form-container" id="form-container">
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label for="text" class="col-form-label">Name</label>
    </div>
    <div class="col-auto">
      <input type="text" class="form-control" id="name-form" aria-label="name">
    </div>
    <div class="col-auto">
      <button type="button" class="btn btn-secondary btn-sm">Sort</button>
    </div>
  </div>
</div>
`
function renderToDom(target, string) {
  document.querySelector(target).innerHTML = string;
}

function initialDOMSetup(){
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

function eventListeners() {
  let firstClick = true;
  document.querySelector("#begin-btn").addEventListener('click', (e) => {
    fadeOutEffect(`#` + `${e.target.id}`, "#input-container", nameForm, "#form-container");
    fadeOutEffect("#hat-text", "#hat-text", "<p>Step forward</p>", "#hat-text");
  });
  document.querySelector("#input-container").addEventListener('click', (e) => {
    console.log(firstClick);
    if (document.querySelector("#name-form") != null && firstClick === true) {
      fadeInEffect("#house-container");
      firstClick = false;
    }
  });
}


initialDOMSetup();
eventListeners();
cardsOnDom()
