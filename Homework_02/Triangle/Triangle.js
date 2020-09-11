document.getElementById("btn").addEventListener("click", () => {
    let number = document.getElementById("num").value
    for (let i = 0; i < number; i++) {
        for (let j = 0; j <= i; j++) {
            document.writeln("*")
        }
        document.writeln("<br/>")

    }
})



