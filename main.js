console.log("Matilda Waltzing")

const nameForm = `
<div class="form-container" id="form-container">
  <div class="row g-3 align-items-center">
    <div class="col-auto">
      <label for="inputPassword6" class="col-form-label">Name</label>
    </div>
    <div class="col-auto">
      <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
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
          renderToDom(divToRedefine, stringToInsert)
          fadeInEffect(thingToFadeIn);
      }
  }, 50);
}

document.querySelector("#begin-btn").addEventListener('click', (e) => {
  fadeOutEffect(`#` + `${e.target.id}`, "#input-container", nameForm, "#form-container");
  fadeOutEffect("#hat-text", "#hat-text", "<p>Step forward</p>", "#hat-text");
}

);
