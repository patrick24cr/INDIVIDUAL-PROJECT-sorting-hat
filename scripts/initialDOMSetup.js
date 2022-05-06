import returnHouseDOMString from "./returnHouseDOMString.js";
import { renderToDom } from "./utilities.js";

function initialDOMSetup() {
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
</div>
  </div>
</div>`;
  renderToDom("#bodyDiv", initialHTML);
}

export default initialDOMSetup;
