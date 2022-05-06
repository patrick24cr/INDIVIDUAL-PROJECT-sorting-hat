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

export default hatDialogue;
