# Versuz CRUD Vanilla JavaScript Project

## User Story 
Your favorite artist has been challenged to a versuz battle. They have asked you to create a single-page app that will help them to prepare for their battle. As you know, these battles are high stakes, so this app must be good! Following are their requirements for the app:

- As a user, I want to be able to see a card for each song that will contain the song’s title, album’s title, number of plays, release year, and a link to a youtube video for the song
- As a user, I want the ability to delete an entire song card  
- As a user, I need to be able to update the information for a song in a card
- As a user, I want to be able to search for the songs that are within my app

# What is CRUD?
<details>
  <summary>Click to expand!</summary>
   
- When we are building a database for a web application, we want our app to provide four basic types of functionality. The application must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A basic application should have the ability to perform at most these four functions in order to be complete. 
   
- The CRUD paradigm is common in constructing web applications, because it provides a memorable framework for reminding developers of how to construct full, usable applications. For example, let’s imagine a system to keep track of library books. In this hypothetical library database, we can imagine that there would be a books resource, which would store book objects. Let’s say that the book object looks like this:
```js   
let book = {
  id: 1234,
  title: "The Hate U Give",
  author: "Angie Thomas",
  Isbn: "978-1235-658-234"
}
```
   <details>
      <summary>Create</summary>
     - Create: This would consist of a function which we would call when a new library book is being added to the catalog. The program calling the function would supply the values for “title”, “author”, and “isbn”. After this function is called, there should be a new entry in the books resource corresponding to this new book. Additionally, the new entry is assigned a unique id, which can be used to access this resource later.
 
To make this library system usable, we would want to make sure there were clear mechanisms for completing the CRUD operations:
   </details>
   
 <details>
            <summary>Read</summary>
         - Read: This would consist of a function which would be called to see all of the books currently in the catalog. This function call would not alter the books in the catalog - it would simply retrieve the resource and display the results. We would also have a function to retrieve a single book, for which we could supply the title, author, or ISBN. Again, this book would not be modified, only retrieved.

 </details>
 <details>
            <summary>Update</summary>
      - Update: There should be a function to call when information about a book must be changed. The program calling the function would supply the new values for “title”, “author”, and “isbn”. After the function call, the corresponding entry in the books resource would contain the new fields supplied.
 </details>
  <details>
         <summary>Delete</summary>
   - Delete: There should be a function to call to remove a library book from the catalog. The program calling the function would supply one or more values (“title”, “author”, and/or “isbn”) to identify the book, and then this book would be removed from the books resource. After this function is called, the books resource should contain all of the books it had before, except for the one just deleted.
   </details>
   
</details>

## Student Instructions

- For this project, you will be looking at the starter code and be guided through this project by your instructors. The project will cover many important JavaScripts concepts such as DOM, variables, loops and functions. Your favorite artist has been challenged to a versuz battle. They have asked you to create a single-page app that will help them to prepare for their battle. The app will be a CRUD application-- allowing the artist to Create, Render, Update and Delete their song list. The script.js file is commented out thoroughly with instructions on how to complete code. Within the comments there are also resources which are also listed below. 

## Mini Lessons 
#### InnerHTML
- https://codepen.io/scastaneda/pen/dyWYoar
#### Loops 
- https://codepen.io/scastaneda/pen/oNWjXRV?editors=1111
#### Indexed Objects and Dot Notation
- https://codepen.io/scastaneda/pen/JjNYYdx?editors=0012
#### Template Literal
- https://codepen.io/scastaneda/pen/QWvjjdq?editors=1111
## Resources
### RENDER
#### Loops and Iteration MDN
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
#### Target Attriute W3 schools
- https://www.w3schools.com/tags/att_a_target.asp
#### Appending Element MDN
- https://developer.mozilla.org/en-US/docs/Web/API/Element/append#appending_an_element
### DELETE
#### Class Starting With 
- https://stackoverflow.com/questions/55144239/select-each-class-starting-with-a-given-string-in-pure-javascript
### Adding Event Listener
- https://www.w3schools.com/jsref/met_document_addeventlistener.asp
#### Array Methods 
- https://www.w3schools.com/js/js_array_methods.asp
#### Array Methods Splice
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
### CREATE
#### Value Property 
- https://www.w3schools.com/jsref/prop_text_value.asp
#### DOM Event Listener 
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
### UPDATE 
#### Splice Array 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
#### Remove Class
- https://www.w3schools.com/howto/howto_js_remove_class.asp
#### Add Class 
- https://www.w3schools.com/howto/howto_js_add_class.asp

## Code Snippet 
```html
   `<h2>${songs[songIndex].songName}</h2>
    <p>AlbumTitle: ${songs[songIndex].albumTitle}</p>
    <p>Release Year: ${songs[songIndex].releaseYear}</p>
    <p>Play Count: ${songs[songIndex].playCount}</p>
    <a href="${songs[songIndex].youTubeLink}" target="_blank">YouTube Video</a>
    <br>
    <button class="deleteButton--${songIndex}">Delete</button>
    <button class="updateButton--${songIndex}">Update</button>
    `;
```

## Instructions

1. Clone this repo using codesandbox
2. Open a new project at https://codesandbox.io/dashboard/home
3. Click Create Sandbox at the top right and select Import Project from the left side
4. Paste the url of this project and click Import and Fork
5. Click on the Github Cat on the left side
6. Under Export to new Github Repository: give your repo the name MusicCRUDVanillaJSProject (your project will now be linked to your github)
7. Click Link to Sandbox
8. Follow the steps in the comments in the index.js code

## Submission 

- https://bit.ly/VersuzSubmit
