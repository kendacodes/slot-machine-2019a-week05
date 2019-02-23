 //Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update
//2 event listeners
//make a bet
//2 buttons
//2 functions
//create
// have reel change automatically
//choose random values---math.random
//user wins output
//user loses output
//update dom with new total


var total = 100;

document.getElementById('minBet').addEventListener("click", function(){
  //set reel values
  var slotOne = randomReel()
  var slotTwo = randomReel()
  var slotThree = randomReel()
  //console.log(reel1,reel2,reel3)
  //conditional to update total value
  if( checkMatch(slotOne, slotTwo, slotThree) ){
    total = total + 25;
  }else{
    total = total - 1;
  }
  //update dom with new total
  document.getElementById('total').innerHTML = total;
});

document.getElementById('maxBet').addEventListener("click", function(){
  //set reel values
  // conditional to update total value
  var slotOne = randomReel()
  var slotTwo = randomReel()
  var slotThree = randomReel()
  //console.log(reel1,reel2,reel3)
  //conditional to update total value
  if( checkMatch(slotOne, slotTwo, slotThree) ){
    total = total + 250;
  }else{
    total = total - 25;
  }
  //update dom with new total
  document.getElementById('total').innerHTML = total;
});

//choose random value for the reel
function randomReel(){
  // 1 ut of 5

  var choice = Math.random() //choses random number
  if (choice <= .2){
    choice = "Diamond"
  }else if(choice <= .4){
    choice = "bar"
  }else if(choice <= .6){
    choice = "seven"
  }else if(choice <= .8){
    choice = "spade"
  }else{
    choice = "moneyBag"
  }
  //return the value
  return choice;

}
//compare reels to find if they are a winner
function checkMatch(reel1,reel2,reel3){
  if( reel1 === reel2 && reel1 === reel3 ){
    return true
  }else{
    return false
  }
}
//return true or false
