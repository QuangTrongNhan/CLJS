document.getElementById("btn").addEventListener("click",()=>{
    let num = document.getElementById("inputNum").value;
    metadrome(num);
});
function metadrome(number){
    let arr = [];
    let positive = 0;
    let minus = 0;
    let duplicate = 0;
    let temp = 0;
    for(let i = 0; i < number.length; i++){
        let newNumer = number.slice(i,i+1);
        arr.push(newNumer);
    }
    for(let i = 0; i<arr.length; i++){
        temp = arr[i+1] - arr[i];
        if(temp > 0){
            positive++;
        }else if(temp < 0){
            minus++;
        }else if(temp == 0){
            duplicate++;
        }
    }
    if(positive > 0 && minus == 0 && duplicate > 0){
        alert("Plaindrome");
    }else if(positive > 0 && minus == 0 && duplicate == 0){
        alert("Metadrome");
    }else if(positive == 0 && minus > 0 && duplicate == 0){
        alert("Katadrome");
    }else if(positive == 0 && minus > 0 && duplicate > 0){
        alert("Nialdrome");
    }else if(positive > 0 && minus > 0 && duplicate > 0){
        alert("Nonedrome");
    }
}
