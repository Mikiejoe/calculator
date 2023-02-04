const display = document.querySelector("h1");
const btns = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const ans = document.querySelector("h2");
const equals = document.querySelector(".equals")
 function updateDisplay(num){
   if(display.textContent == 0) {
       display.textContent = num;
     }else{
       display.textContent += num;
     }
 }
 equals.addEventListener("click", calculate);

 
 btns.forEach((btn)=>{
   btn.addEventListener("click",() => updateDisplay(btn.value)) ;
 });
 function calculate(){
   try{
   let nums = display.textContent;
   ans.textContent = eval(nums);
   } catch(error){
     ans.textContent = "syntax error";
     console.log(error);
   }
 }
 clearBtn.addEventListener("click", ()=>{
   display.textContent = 0;
   ans.textContent = 0;
 })