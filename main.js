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

function fadeInEffect(thingToFade) {
  var op = 0;
  var fadeTarget = document.querySelector(thingToFade);
  var fadeTimer = setInterval(function () {
      if (op < 1) {
          fadeTarget.style.opacity = op;
          op += 0.1;
      } else {
          clearInterval(fadeTimer);
      }
  }, 50);
}

function fadeOutEffect(thingToFadeOut, target, string, target2, string2, thingToFadeIn) {
  var op = 1;
  var fadeTarget = document.querySelector(`#` + `${thingToFadeOut}`);
  var fadeTarget2 = document.querySelector(target)
  var fadeTimer = setInterval(function () {
      if (op > 0) {
          fadeTarget.style.opacity = op;
          fadeTarget2.style.opacity = op;
          op -= 0.1;
      } else {
          clearInterval(fadeTimer);
          renderToDom(target, string); //example: hat dialogue to change
          renderToDom(target2, string2); //example: something new to replace the faded element
          fadeInEffect(thingToFadeIn); //example: fading in that replacement
          fadeInEffect(target);
      }
  }, 50);
}

document.querySelector("#begin-btn").addEventListener('click', (e) => {
  fadeOutEffect(e.target.id, "#hat-text", "<p>Step forward</p>", "#input-container", nameForm, "#form-container");
}

);
