const res  = "commit!";
console.log("first ", res);

let testmytest = document.getElementById("testmytest")

// testmytest.style="border: 4px solid blue"

const textnode = document.createTextNode("Water2");
const node = document.createElement("li");

node.appendChild(textnode)
testmytest.appendChild(node)
testmytest.append(node)


// // Create an "li" node:
// const node = document.createElement("li");

// // Create a text node:
// // const textnode = document.createTextNode("Water");

// // Append the text node to the "li" node:
// node.appendChild(textnode);

// // Append the "li" node to the list:
// document.getElementById("myList").appendChild(node);