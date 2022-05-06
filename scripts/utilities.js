function renderToDom(target, string) {
  document.querySelector(target).innerHTML = string;
}

function fadeOutEffect(
  thingToFadeOut,
  divToRedefine,
  stringToInsert,
  thingToFadeIn
) {
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

export { renderToDom, fadeOutEffect, fadeInEffect };
