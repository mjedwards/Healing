var divs = document.getElementsByClassName("bye");
var newDivs = document.getElementsByClassName("hello");
var divIndex = 0;
var divIndexes = 0;



function show () {
  
  //This is a hard code to reset the cycle through the text
  //Once the divIndex is equal 7 or the last index in the array, divIndex will be set to 0
  //It is a loop
  if (divIndex === 2) { 
    divIndex = 0;
  }


  //This for loop sets each div to a display of "none"
  for (var i=0; i < divs.length; i+=1) {
    divs[i].style.display = 'none';
  }

  //This increments the divIndex by 1, without this it would not cycle through the divIndex array
  divIndex++;  

  divs[divIndex-1].style.display = "inline"; 
  
  setTimeout(show, 5000); // Change image every 5 seconds
}

function hi () {
  
  //This is a hard code to reset the cycle through the text
  //Once the divIndex is equal 7 or the last index in the array, divIndex will be set to 0
  //It is a loop
  if (divIndexes === 2) { 
    divIndexes = 0;
  }


  //This for loop sets each div to a display of "none"
  for (var i=0; i < newDivs.length; i+=1) {
    newDivs[i].style.display = 'none';
  }

  //This increments the divIndex by 1, without this it would not cycle through the divIndex array
  divIndexes++;  

  newDivs[divIndexes-1].style.display = "flex"; 
  
  setTimeout(hi, 10000); // Change image every 5 seconds
}

hi();
show();