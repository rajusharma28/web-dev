
// // create the Element 

// function attach(content){


//  const element = document.createElement('li');
// //  element.innerHTML = "TS";
// element.innerHTML = content;


// const element2 = document.createElement("li");
// element2.innerHTML = content+"v2.0"

//  //call the paarent node first
// const parent = document.getElementById("root");
// // parent.appendChild(element); //single elemnet can be add
// // parent.append(element,"hello coder army") // multiple add
// parent.append(element,element2)

// };
// attach("react");
// attach("TS");
// attach("Node");



//***********  text node *****************



// const element = document.createTextNode("hello coder army");
// const parent = document.getElementById("root");
// parent.append(element);

// ************* *AttributeNODE(like class,id ) **********


// access the first list

// const element = document.createAttribute("id");
// element.value = "first";

// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);

// access the second list 

// const paarent = document.getElementById("root");
// parent.children[1].setArributeNode(element);


// ************************* Attribute element *****************************

// access attribute of a element
// const element = document.getElementById("root");
// console.log(element.getAttribute("class")); access the element

// setAttribute is create the and and update a attribute
// element.setAttribute("custom","20");
// element.setAttribute("class","rajkumar"); //update

// element.removeAttribute("custom");


// ***************** add nodes to the Dom *******************


// const parent = document.getElementById("root");

// const element = document.createElement("li");
// element.innerHTML = "TS";
// //data
// // parent.prepend(element); //top 
// // parent.append(element); 

// const child2 = parent.children[1];
// // parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);

// const parent = document.getElementById("root");
// // parent.innerHTML += "<li>TS</li>";


// const element = document.createElement("div");
// element.innerHTML ="Hello coder army";
// // parent.insertAdjacentElement("beforebegin",element);
// parent.insertAdjacentElement("afterend",element)




const element = document.getElementById("root");
element.removeAttribute("li")