let userName = prompt('Enter your Username: ');
var range = 2;
var points = 0;
var tries = 2;
var win = true;

const guess = () => {
    while (win && tries != 0) {
      var generated = Math.floor(Math.random() * range) + 1;
  
      var number = parseInt(prompt(`${userName}, Guess a number between 1 to ${range}: `));
  
      if (generated == number) {
        alert('your number was right!');
        range++;
        points++;
        tries++;
        alert(`you now have ${tries} tries`)
  
        nextLevel();
        
      } else if (generated !== number) {
        alert('Number is not correct, try again!')
        tries--
        alert(`you now have ${tries} tries`)
        
      } else {
        win = false
      }
    }
    alert(`game over... your total point is ${points}`)
}

const nextLevel = () => {
  if (win == true) {
    alert(`congratulations you guessed the number correctly and you have been awarded 1 point, procede to next level`)
    alert(`you now have ${points} point`)
   }
}

guess();