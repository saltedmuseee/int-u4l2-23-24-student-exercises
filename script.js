let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");
let buttonTwo= document.querySelector(".button-two")
let captionTwo= document.querySelector(".caption-two")
buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
    let spidyCaption= document.querySelector(".comment-one");
    captionOne.innerHTML= spidyCaption.value;
    
    // 2. Display the variable spidyCaption to captionOne.


});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.
buttonTwo.addEventListener("click",function() {
    let spidyCaption= document.querySelector(".comment-two");
    captionTwo.innerHTML= spidyCaption.value; 
})