console.log("Select an element by Id using API - getElementById() ");
const elementHeading3 = document.getElementById("heading3");
console.log(elementHeading3.innerHTML);

console.log("Select an element by class using API - getElementsByClassName() ");
const elementByHeading = document.getElementsByClassName("heading");
console.log(elementByHeading[0]);
console.log(elementByHeading[1]);

console.log("Select an elements by tag name using API - getElementsByTagName() ");
const elementP = document.getElementsByTagName("p");
console.log(elementP[0]);
console.log("********** Let's us understand the new API's Query Selectors ********* ");
console.log("Select an elements by id name using API - querySelector() ");
const elementHeading3Q = document.querySelector("#heading3");
console.log(elementHeading3Q);

console.log("Select an elements by class name using API - querySelector() ");
const eleByClassHeading = document.querySelector(".heading");
console.log(eleByClassHeading);

console.log("Select an elements by class name using API - querySelectorAll() ");
const elementsByHeading = document.querySelectorAll(".heading");
console.log(elementsByHeading[0]);
console.log(elementsByHeading[1]);
console.log(elementsByHeading[2]);
console.log("Select an elements by tag name using API - querySelector() ");
const elementByTagNameP = document.querySelector('p');
console.log(elementByTagNameP);

console.log("Select an elements by tag name using API - querySelectorAll() ");
const elementsByTagNameP = document.querySelectorAll('p');
console.log(elementsByTagNameP[0]);
console.log(elementsByTagNameP[1]);

// innerHTML
const elementPara = document.querySelector("#para");
elementPara.innerHTML = "New Paragraph text modified by JS";

console.log("= Changing an attribute href value using  = setAttribute() method");
const elementGitHubLink = document.querySelector("#gitHubLink");
elementGitHubLink.setAttribute('href', "https://www.google.com/");





