//create an array of objects for the the songs for a particular artist including name and playCount as keys for the object set this to a variable called songs

//variables
//document.querySelector takes a css selector and returns the first element that matches that selector
//get the element with the class flex-container and set it to the variable mainDiv

//get the input element with the id songNameInput and set it to the variable songNameInput

//get the input element with the id albumTitleInput and set it to the variable albumTitleInput

//get the input element with the id releaseYearInput and set it to the variable releaseYearInput

//get the input element with the id youTubeLinkInput and set it to the variable youTubeLinkInput

//get the input element with class ageInput and set it to the variable playCountInput

//get the button element with id addSong and set it to the variable createButton

//get the button element with id updateSong and set it to the variable updateButton

//create a variable called updateSongIndex (leave it empty)

//Functions
//Reading the data (cRud)
//create a function called renderData

  //set the mainDiv's property of innerHTML to an empty string
 
  //loop over the songs array; using the for loop syntax with three statements; instead of i use the variable songIndex
  //https://www.w3schools.com/js/js_loop_for.asp
  
    //create a div element and set it to the variable songListItem
    
    //set the className property of the variable songListItem to "song-card"
    
    //set the innerHTML property of the songListItem to the card code in gitHub










    //append the songListItem to the mainDiv
    
  
  //create a function called createData
  
    //set the property value of the variable songNameInput to a variable called songName
    
    //set the property value of the variable playCount to a variable called playCount
    
    //set the property value of the variable albumTitleInput to a variable called albumTitle
    
    //set the property value of the variable releaseYearInput to a variable called releaseYear
    
    //set the property value of the variable youTubeLinkInput to a variable called youTubeLink
    
    //create a newSong variable and set it the object {songName, playCount, albumTitle, releaseYear, youTubeLink}








    //using the array method that allows you to add to an array; add newSong to the songs array defined at the very beginning of your program
    //use this resource https://www.w3schools.com/js/js_array_methods.asp
    
    //set the value property of the variable songNameInput to an empty string
    
    //set the value property of the variable playCountInput to an empty string
   
    //set the value property of the variable albumTitleInput to an empty string
    
    //set the value property of the variable releaseYearInput to an empty string
    
    //set the value property of the variable youTubeLinkInput to an empty string
    
    //re-render the data to the DOM by calling the renderData function
    
  
  //add an eventListener to the variable createButton listening for the createData function
  
  //delete logic
  //get the delete buttons using querySelectorAll and starts with className deleteButton and set it to the variable deleteButtons
 
  //for loop through the delete buttons using a for of loop
  //https://www.w3schools.com/js/js_loop_forof.asp
  
    //add eventListener to each button
    
      //take the variable btn's property className and split at the value "deleteButton--" and set it to the variable buttonIndex
      
      
      //remove one element at the current index which is buttonIndex[1] using the splice method
      
      //re-render the updated data to the DOM by calling the renderData function
      
    
  

  //update logic
  //get the update buttons using querySelectorAll and starts with className updateButton and set it to the variable updateButtons
  
  //for loop through the update buttons using a for of loop
  //https://www.w3schools.com/js/js_loop_forof.asp
  
    //add eventListener to each button
    
      //switch submit to updateSubmit button by doing the following
      //to the varialbe updateButton remove the classList "hidden"
      //https://www.w3schools.com/howto/howto_js_remove_class.asp
      
      //to the variable createButton add the classList "hidden"
      //https://www.w3schools.com/howto/howto_js_add_class.asp
      
      //take the variable btn's property className and split at the value "updateButton--" and set it to the variable updateSongIndex
      
      
      //access the array element that you are trying to update by using the value represented by updateSongIndex[1] and set this to a variable called songInfo
      
      
      //set the value property of the songNameInput variable to the songName property on the songInfo object
     
      //set the value property of the albumTitleInput variable to the albumTitle property on the songInfo object 
     
      //set the value property of the releaseYearInput variable to the releaseYear property on the songInfo object 
      
      //set the value property of the youTubeLinkInput variable to the youTubeLink property on the songInfo object 
      
      //set the value property of the  playCountInput variable to the playCount property on the songInfo object 
      
    
    
  

//call the renderData function

//create a function called updateSong

  //create an object variable called updatedSong and set the respective properties to the values fromt eh songNameInput and playCountInput variable







  //remove the one song to update which is at index updateSongIndex[1] by using the splice method and insert the updatedSong variable
  
  //set value property of all the inputs to an empty string
  




  //to the variable updateButton add the classList "hidden"
  //https://www.w3schools.com/howto/howto_js_add_class.asp
  
  //to the varialbe createButton remove the classList "hidden"
  //https://www.w3schools.com/howto/howto_js_remove_class.asp
  
  //re-render the updated data to the DOM by calling the renderData function
  

//add an eventListener to the updateButton listening for the updateSong function

