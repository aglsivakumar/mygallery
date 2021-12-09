/* 
 * To reuse headder section in all pages
 */
fetch('./../mygallery/header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#header-section"); // to get script tag with header-section id
    let newelem = document.createElement("head");  //creating head tag 
    newelem.innerHTML = text; // adding header.html file content to new head tag
    oldelem.parentNode.replaceChild(newelem,oldelem); // replacing script tage with new head tag
})
