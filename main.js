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

// function fadeInEffect(thingToFadeIn) {
//   console.log("start of fadeIn function")
//   var fadeTarget = document.querySelector(thingToFadeIn);
//   var fadeEffect = setInterval(function () {
//       if (!fadeTarget.style.opacity) {
//           fadeTarget.style.opacity = 0.0;
//           console.log("had to initialize opacity")
//       }
//       if (fadeTarget.style.opacity < 1) {
//           fadeTarget.style.opacity += 0.1;
//           console.log("why is this looping");
//           console.log(thingToFadeIn);
//           console.log(fadeTarget.style.opacity);
//       } else {
//           clearInterval(fadeEffect);
//           console.log("cleared the interval")
//       }
//   }, 50);
// }

function fadeInEffect(thingToFade) {
  var fadeTarget = document.querySelector(thingToFade);
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 0;
      }
      if (fadeTarget.style.opacity < 1) {
          fadeTarget.style.opacity += 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 50);
}

function fadeOutEffect(thingToFadeOut, target, string, target2, string2, thingToFadeIn) {
  var fadeTarget = document.querySelector(`#` + `${thingToFadeOut}`);
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
          renderToDom(target, string); //hat dialogue, for example
          renderToDom(target2, string2); //something new to replace the faded element, for example

      }
  }, 50);
}

document.querySelector("#begin-btn").addEventListener('click', (e) => {
  fadeOutEffect(e.target.id, "#hat-text", "<p>Step forward</p>", "#input-container", nameForm, "#form-container");
}

);
