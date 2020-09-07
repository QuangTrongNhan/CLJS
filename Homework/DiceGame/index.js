document.getElementById("btn").addEventListener("click", () => {
    rand();
})

let arr = [];
let sum = 0;

//get value of dice
function rand() {
    let ran = Math.floor(Math.random() * 6) + 1;
    arr.push(ran);
    console.log(arr)
}
//check luck or bad
function isCheckLuckBad() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {                    //check bad
            arr[i + 1] = arr[i + 1] * 0;
        } else if (arr[i] == 6) {              //check luck
            arr[i + 1] = arr[i + 1] * 2;
        }
        sum = sum + arr[i];
    }
}
//get sum of dice
document.getElementById("stop").addEventListener("click", () => {
    isCheckLuckBad();
    console.log(sum);
})



