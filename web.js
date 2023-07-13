/*
let container = document.querySelector('.rightColumn');
let sizes = document.getElementById("size");
const grid = {rows:5,cols:5};
const total = grid.rows * grid.cols;

sizes.addEventListener('click',()=>{
    createGrid(total);
});

container.addEventListener('mouseover',function(e){
    if(e.target.matches('.box')){
        e.target.classList.add('active');
    }
});

function createGrid(tot){
    for(let i=0;i<tot;i++){
        let newDiv = document.createElement("div");
        container.append(newDiv);
        newDiv.textContent = `${i+1}`;
        newDiv.classList.add('box');
       
        }
        container.style.setProperty(`grid-template-columns`,`repeat(${grid.cols},1fr)`);
}
*/
const input = document.querySelector("input");
number = document.querySelector(".number");

input.addEventListener("input", ()=>{
    number.textContent = input.value;
});