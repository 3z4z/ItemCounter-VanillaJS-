// initializing the buttons and the value to show divs in values
let add = document.getElementById("add");
let rmv = document.getElementById("rmv");
let counter = document.getElementById ("counter");

// making our logic's value and initializing it in a variable
let count = 0;

// giving buttons some events

add.addEventListener("click",()=>{
    // on clicking on "add" button something will happen
    count ++;
    // declaring integer increment on click
    counter.innerHTML = count;
    rmv.style.cursor = "pointer";
    // increasing value will update innerHTML by clicking add button
})
rmv.addEventListener("click",()=>{
    // giving if else condition as we want to limit decreasing number to zero
    if(count <= 0){
        // giving a condition to count, if count value is less than equal to zero
        count;
        // then counter will be always count
    }
    else{
        // here decrement will be declared, because if counter = 0 , the program will be finished
        // if counter is greater than zero, "rmv" button will decrease value by given decrement
        count --;
        counter.innerHTML = count;
    }
})
function updatecursor(){
    if(count > 0){
        rmv.style.cursor = "pointer"
    }else{
        rmv.style.cursor = "not-allowed";
    }
}
rmv.addEventListener("click", updatecursor);