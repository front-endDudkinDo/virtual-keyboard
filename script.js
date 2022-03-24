// Виртуальная клавиатура

let display = document.querySelector(".display");
let btnDelete = document.querySelector(".clear");
let keys = document.querySelectorAll(".key");
for(let key of keys){
  key.onclick = function(){
    display.textContent += key.textContent;
  };
};
btnDelete.onclick = function(){
    display.textContent = "";
};