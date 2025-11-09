/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

// let ________ = prompt("Ask the user for ________");
// let ________ = prompt("Ask the user for ________");
// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

// let story = `Write your story here using ${_____} and ${_____} etc.`;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

// document.getElementById("madlib-output").innerHTML = /* your story variable */ ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/


let Name1 = prompt('1st name')
let Name2 = prompt('2nd name')
let WeddingAdj = prompt('adjective')
let Place = prompt('place')
let Animal1 = prompt('animal (plural)')
let Monument = prompt('monument or sight')
let Months = prompt('number')
let Name3 = prompt('3rd name')
let ChildAdj = prompt('adjective')
let ChildNoun = prompt('noun (plural)')
let LifeAdj = prompt('adjective')
let Verb = prompt ('verb (past tense)')
let Animal2 = prompt('animal')



let myStory = `

<p>Once upon a time, <b>${Name1}</b> and <b>${Name2}</b> fell in love. Their wedding was incredibly <b>${WeddingAdj}</b>. On their honeymoon, they went to <b>${Place}</b>, where they saw <b>${Animal1}</b> and <b>${Monument}</b>. They had a child <b>${Months}</b> months later and named it <b>${Name3}</b>. Their child was <b>${ChildAdj}</b> and they loved <b>${ChildNoun}</b>. <b>${Name1}</b>, <b>${Name2}</b>, and <b>${Name3}</b> lived a <b>${LifeAdj}</b> life. They <b>${Verb}</b> at home and played with their <b>${Animal2}</b>.

`

document.getElementById("madlib-output").innerHTML=myStory