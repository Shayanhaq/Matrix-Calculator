
const boxes1 = document.querySelector("#input-boxes1");
const boxes2 = document.querySelector("#input-boxes2");
const form = document.querySelector("#metrix-form");
const sumBtn = document.querySelector("#sum");
const resultBox = document.querySelector("#result-box"); 

let matrixLength;




form.addEventListener("submit", (event) => {
    event.preventDefault();
    matrixLength = Number(event.target.children[0].value);

    boxes1.innerHTML = "";
    
    boxes2.innerHTML = "";
    
    resultBox.innerHTML = "";

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            boxes1.innerHTML += `<input type="number" id="S-${i}${j}" style="width: 40px;" value="0">`;

            boxes2.innerHTML += `<input type="number" id="H-${i}${j}" style="width: 40px;" value="0">`;
        }
        boxes1.innerHTML += `<br>`;
        
        boxes2.innerHTML += `<br>`;
    }
});

sumBtn.addEventListener("click", () => {
    const summedArray = [];
    
    for (let i = 0; i < matrixLength; i++) {
        let innerSum = []; 
        for (let j = 0; j < matrixLength; j++) {
            const value1 = Number(document.querySelector(`#S-${i}${j}`).value);

            const value2 = Number(document.querySelector(`#H-${i}${j}`).value);

            innerSum.push(value1 + value2); 
        }
        summedArray.push(innerSum); 
    }

   
    resultBox.innerHTML = "<h3>Summed Matrix:</h3>";


    for (let i = 0; i < summedArray.length; i++) {

        resultBox.innerHTML += summedArray[i].join(' ') + "<br>"; 
    }
});
