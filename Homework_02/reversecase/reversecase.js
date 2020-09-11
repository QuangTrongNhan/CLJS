document.getElementById("btn").addEventListener("click", () => {
    let arr = [];
    let res;
    let temp = document.getElementById("string_input").value;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].toLowerCase() == temp[i]) {
            res = temp[i].toUpperCase();
        } else if (temp[i].toUpperCase() == temp[i]) {
            res = temp[i].toLowerCase();
        }  
        arr.push(res)
    }
    console.log(arr);
})