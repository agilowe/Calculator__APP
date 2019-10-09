
let screenmainContainer = document.querySelector("#sreen_main_container");
let calculator = document.querySelector("#calculator_screen");
let keys = document.querySelector("#calculator_keys");
let result = document . querySelector("#result-display")
let ms = document.querySelector("#ms");
let del = document.querySelector("#delete");
let bracketOpen= document.querySelector("#bracketOpen");
let bracketClose = document.querySelector("#bracketClose");
let clear = document.querySelector("#ac");
let squareRoot = document.querySelector("#squareRoot");
let parcentage = document.querySelector("#parcentage");
let history = document.querySelector("#history");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let night = document.querySelector("#night");
let divided = document.querySelector("#divided");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let times = document.querySelector("#times");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let minus = document.querySelector("#minus");
let zero = document.querySelector("#zero");
let decimal = document.querySelector("#decimal");
let equal = document.querySelector("#equal");
let plus = document.querySelector("#plus");


function buildOperation(input) {
    
    if(calculator.textContent=='0'){
        calculator.textContent = "";
    }
    calculator.textContent += input;
}
one.addEventListener("click",  () => buildOperation(one.textContent));

two.addEventListener("click",  () => buildOperation(two.textContent));

three.addEventListener("click",() => buildOperation(three.textContent));

four.addEventListener("click", () => buildOperation(four.textContent));

five.addEventListener("click", () => buildOperation(five.textContent));

six.addEventListener("click", () => buildOperation(six.textContent));

seven.addEventListener("click", () => buildOperation(seven.textContent));

eight.addEventListener("click", () => buildOperation(eight.textContent));

nine.addEventListener("click",  () => buildOperation(nine.textContent));

zero.addEventListener("click",  () => buildOperation(zero.textContent));

bracketOpen.addEventListener("click", () => buildOperation(bracketOpen.textContent));

bracketClose.addEventListener("click", () => buildOperation(bracketClose.textContent));

decimal.addEventListener("click",  () => buildOperation(decimal.textContent));

divided.addEventListener("click",  function(){
    if(calculator.textContent=="0"){
        calculator.textContent = "/";
        return;
    }
calculator.textContent += "/";
});

times.addEventListener("click",    function(){
    if(calculator.textContent=="0"){
        calculator.textContent = "*";
        return;
    }
calculator.textContent += "*";
});

minus.addEventListener("click",    function(){
    if(calculator.textContent=="0"){
        calculator.textContent = "-";
        return;
    }
    calculator.textContent += "-";
});

plus.addEventListener("click",    function(){
    if(calculator.textContent=="0"){
        calculator.textContent = "+";
        return;
    }
    calculator.textContent += "+";
});

ms.addEventListener("click",  function(){
      if(!result.textContent=="0"){
      calculator.textContent=prevAswer;
    }
  });

del.addEventListener("click",  function(){
    let delslice=calculator.textContent.slice(0,calculator.textContent.length-1);
    calculator.textContent=delslice;
    });

clear.addEventListener("click",   function(){
    calculator.textContent = "";
    result.textContent = "";
    });



squareRoot.addEventListener("click", () =>{
        if(calculator.textContent=="0"){
            calculator.textContent = "√";
            return;
        }
        calculator.textContent += "√";
    });
    

parcentage.addEventListener("click", () => buildOperation(parcentage.textContent));

        equal.addEventListener("click",    function(){

            if(calculator.textContent.includes('√') & calculator.textContent.includes('%')){
                console.log(calculator.textContent);
                
                let operands = calculator.textContent.split("*");
                let sqrtnum=operands[0];
                let percentnum=operands[1];
                sqrtnum = sqrtnum.split("√")
                percentnum = percentnum.split("%")
                   
                console.log(percentnum);
                result.textContent= eval(`Math.sqrt(${sqrtnum[1]})*${percentnum[0]}  / 100 * ${percentnum[1]}`);
                // result.textContent = eval(`Math.sqrt(${sqrtnum[1]})`);
    
                return;
            }
            
        if(calculator.textContent.includes('%')){
            let operands = calculator.textContent.split("%");
            console.log(operands);
            if(operands[1] == ""){
                result.textContent = eval(`${operands[0]}  / 100`);
            }else{
                result.textContent = eval(`${operands[0]}  / 100 * ${operands[1]}`);
            }   
           return;
        }
        if(calculator.textContent.includes('√')){
            let operands = calculator.textContent.split("√");
            console.log(operands);
            result.textContent = eval(`Math.sqrt(${operands[1]})`);

            return;
        }
        
        result.textContent= eval(calculator.textContent);
        histories.push(calculator.textContent+'='+result.textContent);
        prevAswer=result.textContent;
    
      
    });
    let prevAswer="";


history.addEventListener("click", () => {
    let historyList=''
    if(histories !== null){
        histories.forEach(histry => {
         historyList += `<small>${histry}</small> <br>`;
        });
        console.log(historyList);
        calculator.innerHTML=historyList;
    }
});
       let histories = [];
       history.addEventListener('click', () => {});


    

    
     
        

             

        





