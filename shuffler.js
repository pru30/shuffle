let numbers = [1,2,3,4,5,6,7,8,9];
let bgColor = ['#6F98A8','#2B8EAD','#2F454E','#BFBFBF']
let randomizer = 0;

function shuffle(array){
    randomizer = 0;
    let n = array.length;
    for(let curr_index = n - 1; curr_index > 0;curr_index--){
        let swap_index = Math.floor(Math.random() * (curr_index + 1));

        //swap
        let temp = array[curr_index];
        array[curr_index] = array[swap_index];
        array[swap_index] = temp;
    }
    return array;
}

function sortArray(array){
    randomizer = 0;
    return array.sort();
}


let shuffleClick = document.getElementById('shuffle');
shuffleClick.onclick = function(){
    numbers = shuffle(numbers);
    document.getElementById('shuffleplay').innerHTML = numbers.map(number => 
        `<div class="col card" style="${(window.innerWidth > 960)?('background:'+bgColor[randomizer++ %  4]):('border-left:10px solid '+bgColor[randomizer++ %  4])}">
            ${(window.innerWidth > 960)?("<h2>"+number+"</h2>"):("<h4>"+number+"</h4>")}
        </div>`
    ).join('')
}
let sortClick = document.getElementById('sort');
sortClick.onclick = function(){
    numbers = sortArray(numbers);
    document.getElementById('shuffleplay').innerHTML = numbers.map(number => 
        `<div class="col card" style="${(window.innerWidth > 960)?('background:'+bgColor[randomizer++ %  4]):('border-left:10px solid '+bgColor[randomizer++ %  4])}">
        ${(window.innerWidth > 960)?("<h2>"+number+"</h2>"):("<h4>"+number+"</h4>")}
        </div>`
    ).join('')
}
document.getElementById('shuffleplay').innerHTML = numbers.map(number => 
    `<div class="col card" style="${(window.innerWidth > 960)?('background:'+bgColor[randomizer++ %  4]):('border-left:10px solid '+bgColor[randomizer++ %  4])}">
    ${(window.innerWidth > 960)?("<h2>"+number+"</h2>"):("<h4>"+number+"</h4>")}
    </div>`
).join('')

