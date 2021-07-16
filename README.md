# Versuz CRUD Vanilla JavaScript Project

## Student Instructions

- For this project, you will be looking at the starter code and be guided through this project by your instructors. The project will cover many important JavaScripts concepts such as DOM, variables, loops and functions. Your favorite artist has been challenged to a versuz battle. They have asked you to create a single-page app that will help them to prepare for their battle. The app will be a CRUD application-- allowing the artist to Create, Render, Update and Delete their song list. The script.js file is commented out thoroughly with instructions on how to complete code. Within the comments there are also resources which are also listed below. 

## Mini Lessons 
##### InnerHTML
- https://codepen.io/scastaneda/pen/dyWYoar
- Loops 
- https://codepen.io/scastaneda/pen/oNWjXRV?editors=1111
- Indexed Objects and Dot Notation
- https://codepen.io/scastaneda/pen/JjNYYdx?editors=0012
- Template Literal
- https://codepen.io/scastaneda/pen/QWvjjdq?editors=1111
## Resources
- RENDER
- Loops and Iteration MDN
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
- Target Attribute W3 schools
- https://www.w3schools.com/tags/att_a_target.asp
- Appending Element MDN
- https://developer.mozilla.org/en-US/docs/Web/API/Element/append#appending_an_element
- DELETE
- Array Methods Splice
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
- Class Starting With 
- https://stackoverflow.com/questions/55144239/select-each-class-starting-with-a-given-string-in-pure-javascript
- Adding Event Listener
- https://www.w3schools.com/jsref/met_document_addeventlistener.asp
- Array Methods 
- https://www.w3schools.com/js/js_array_methods.asp
- CREATE
- Value Property 
- https://www.w3schools.com/jsref/prop_text_value.asp
- DOM Event Listener 
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp

- UPDATE 
- Splice Array 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
- Remove Class
- https://www.w3schools.com/howto/howto_js_remove_class.asp
- Add Class 
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
