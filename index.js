// Your code here

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    } else{
      dodger.style.left = `${left}px`; // prevents the dodger from exiting the window
    }
}
  
  
//  wire this up to our event listener:
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});


function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);


    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    } else{
        dodger.style.left = `${left}px`;  // prevents the dodger from exiting the window
    }
}

//  wire this up to our event listener:
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight"){
        moveDodgerRight();
    }
});

