var Field1 = document.getElementById('numField1');
var Field2 = document.getElementById('numField2');
var Result = document.getElementById('resultField');
//testing//
//Field1.value = "Hello"; for input fields
//result.innerText = "test"; for headers
var form = document.getElementById('xisWhatPercentOfY');
//submit is an event, passing a function (inline function), it will be called after the click
form.addEventListener('submit', function (/*we will use an event to turn off the refresh that happens on submit (default behavior of forms)*/event) {
    if (!Field1.value || !Field2.value)
    {
        alert("Please enter values in the fields");
    }
    else
    {
        var x = parseFloat(Field1.value);//taking strings and turninig them into numbers
        var y = parseFloat(Field2.value);
        ////////////////////////////alert and consoles turn my numbers into strings to be displayed
        var result = x / y;
        var percent = result * 100;
        Result.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
    
});