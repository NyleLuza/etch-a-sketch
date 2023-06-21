let container = document.getElementsByClassName("rightColumn");
let sizes = document.getElementById("size");
let boxSize = 5;
let text = "ello";

sizes.addEventListener('click',function grid(boxSize){
    for(let i=0;i<container.length;i++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","list");
    newDiv.innerText = "new div";
    container[i].append(newDiv);
    }
});