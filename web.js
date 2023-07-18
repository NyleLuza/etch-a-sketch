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
const container = document.getElementById("rightColumn")
const input = document.querySelector("#scroll");
number = document.querySelector(".number");

let col = 5;
let row = 5;

input.addEventListener("input", ()=>{
    number.textContent = input.value + "x" + input.value;
});

function createGrid(col, row){
    let grid = document.createElement('div');
    grid.className = 'grid';
    for(let i=0; i<col; i++){
        let column = document.createElement('div');
        column.className = 'column';
        for(let j=0; j<row; j++){
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        grid.appendChild(column)
    }
    container.appendChild(grid);
}
createGrid(col, row);