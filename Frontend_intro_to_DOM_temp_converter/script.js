var submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', converter);
function converter(event) {
        console.log(event);
        console.log("hit");
        event.preventDefault();
        var result;

       var convert = document.getElementById("numb").value;

       var fahrenheit = document.getElementById("clickedFahrenheit")

         if(fahrenheit.checked == true){
            result = (convert * 9/5 ) + 32
            console.log(result)
         } else {
             result = ( convert - 32) * 5/9;
         }

         var display = document.getElementById("displayNum");
         
         display.innerHTML = result;

    }





// /*? this is the old code before class on 2/9/2022
// function clickedFahrenheit() {
//     var input1 = document.getElementById("clickedFahrenheit")
// }
// function form1() {
    
//     var display = document.write("number");
//     var display2  = document.getElementById("displayNum");  
//     var input2 = document.getElementById("submit");  
//     var display = document.write("number");
//     var display2  = document.getElementById("displayNum");


// function clickedSubmit() {
//     var input2 = document.getElementById("submit");


// function display() {
//     var display = document.write("number");
//     var display2  = document.getElementById("displayNum");
// }