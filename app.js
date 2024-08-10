// defineul var 
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');
// load all event listener 
LoadEvent ();
// LOAD ALL THE EVENT LISTENER 
function LoadEvent(){
    // add task event 
    form.addEventListener('submit',addtask);
}
