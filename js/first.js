

// Triangle math function card
document.getElementById('card-1-btn').addEventListener('click' , function(){
    const base = document.getElementById('card-1-input1');
    const baseValue = base.value;
    const height = document.getElementById('card-1-input2');
    const heightValue = height.value
    const result = (0.5 * baseValue * heightValue);
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4 text-yellow-500">Triangle : ½ * ${baseValue} * ${heightValue} = ${result}</p>
    `;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    base.value = "";
    height.value = "";
})

// Rectangle math function card
document.getElementById('card-2-btn').addEventListener('click' , function(){
    const weight = document.getElementById('card-2-input1');
    const weightValue = weight.value;
    const height = document.getElementById('card-2-input2');
    const heightValue = height.value;
    const result = weightValue * heightValue;
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4 text-blue-400">Rectangle : ${weightValue} * ${heightValue} = ${result}</p>
    `;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    weight.value = "";
    height.value = "";
})

// Parallelogram math function card
document.getElementById('card-3-btn').addEventListener('click' , function(){
    const base = document.getElementById('card-3-input1');
    const baseValue = base.value;
    const height = document.getElementById('card-3-input2');
    const heightValue = height.value;
    const result = baseValue * heightValue;
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4 text-green-300">Parallelogram : ${baseValue} * ${heightValue} = ${result}</p>
    `;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    base.value = "";
    height.value = "";
})

// Rhombus math function card
document.getElementById('card-4-btn').addEventListener('click' , function(){
    const diagonal = document.getElementById('card-4-input1');
    const diagonalValue = diagonal.value;
    const DiagonalSecond = document.getElementById('card-4-input2');
    const DiagonalSecondValue = DiagonalSecond.value;
    const result = diagonalValue * DiagonalSecondValue * 0.5;
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4 text-lime-700">Rhombus : ${diagonalValue} * ${DiagonalSecondValue} * ½ = ${result}</p>
    `;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    diagonal.value = "";
    DiagonalSecond.value = "";
})

// Pentagon math function card
document.getElementById('card-5-btn').addEventListener('click' , function(){
    const side = document.getElementById('card-5-input1');
    const sideValue = side.value;
    const bottom = document.getElementById('card-5-input2');
    const bottomValue = bottom.value;
    const result = sideValue * bottomValue * 0.5;
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4 text-red-400">Pentagon : ½ * ${sideValue} * ${bottomValue} = ${result}</p>
    `;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    side.value = "";
    bottom.value = "";
})

// Ellipse math function card
document.getElementById('card-6-btn').addEventListener('click' , function(){
    const a_axios = document.getElementById('card-6-input1');
    const aValue = a_axios.value;
    const b_axios = document.getElementById('card-6-input2');
    const bValue = b_axios.value;
    const result = aValue * bValue * 3.1416;
    // make new p
    const newP = document.createElement('p');
    newP.innerHTML =`
        <p class="my-4 text-gray-500">Ellipse : ${aValue} * ${bValue}π = ${result}</p>
    `;
    // push result
    const resultDisplaySection = document.getElementById('result-display-section');
    resultDisplaySection.appendChild(newP);
    // clean input field
    a_axios.value = "";
    b_axios.value = "";
})










// Triangle math function hard
// document.getElementById('card-1-btn').addEventListener('click' , function(){
//     const base = document.getElementById('card-1-input1');
//     const baseValue = base.value;
//     const height = document.getElementById('card-1-input2');
//     const heightValue = height.value
//     const result = (0.5 * baseValue * heightValue);
//     // make new p
//     const newP = document.createElement('p');
//     newP.innerHTML =`
//         <p class="my-4">1. Triangle 
//                     <span class="triangle-result"></span>cm<sup>2</sup>
//                     <button id="1-Covert-m-button" class="ml-2 px-3 py-1 bg-[#69C7F0] border rounded-md">Covert to meter Squair</button>
//                 </p>
//     `;
//     // push result
//     const resultDisplaySection = document.getElementById('result-display-section');
//     resultDisplaySection.appendChild(newP);
//     // result
//     const triangleResult = document.getElementsByClassName('triangle-result');
//     triangleResult[0].innerText = result;
//     // clean input field
//     base.value = "";
//     height.value = "";
//     // console.log(baseValue);
//     console.log(triangleResult[0]);
// })