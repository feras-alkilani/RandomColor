for (var i=0; i<1000; i++){

    surname = i;
    let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title  "+ surname);
let myParagraphText = document.createTextNode("Product Description "+ surname);


// Add Heading Text
myHeading.appendChild(myHeadingText) ;

// Add Heading to main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);


// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);



const randomColor = Math.floor(Math.random()*16777215).toString(16);


/* myMainElement.style.color= "#" + randomColor; */ 


myMainElement.style.color= "#000"  ;
myMainElement.style.background= "#" + randomColor;
myMainElement.style.width="195px";


myMainElement.className="product";



document.body.appendChild(myMainElement);
}