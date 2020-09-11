
document.getElementById("btn").addEventListener("click", () => {
    n = document.getElementById("num").value
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] % 3 == 0 & arr[i] % 5 != 0) {
            arr[i] = "fizz"
        }
        else if (arr[i] % 5 == 0 && arr[i] % 3 != 0) {
            arr[i] = "buzz"
        } else if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
            arr[i] = "fizzbuzz"
        }

    }

    console.log(arr)
})