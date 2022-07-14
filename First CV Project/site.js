




let todocontainers;
let inputfields;

function functions(){
    document.getElementById("msg").innerHTML="Thank you for looking at my project"
    var element = document.getElementById("msg");
    element.classList.add("mystylejs"); 
}

function todo(){
   todocontainers = document.getElementById("todocontainer");
   inputfields = document.getElementById("inputfield");  
var paragaph = document.createElement('p');
paragaph.classList.add('paragraph-styling');
paragaph.innerText =inputfields.value;
todocontainers.appendChild(paragaph);
inputfields.value="";
paragaph.addEventListener('click',function(){
    paragaph.style.backgroundColor= "rgb(69, 239, 71)";

})
paragaph.addEventListener('dblclick',function(){
    paragaph.style.backgroundColor= "rgb(69, 239, 71)";
    todocontainers.removeChild(paragaph);
})

}