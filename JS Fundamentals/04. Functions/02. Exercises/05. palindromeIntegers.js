function solve(arr) {
    arr.forEach((element) => {
        let reversed = element.toString().split("").reverse().join("");
        if (element == reversed) {
            console.log(true);
        } else {
            console.log(false)
        }
    });
}

solve([123, 323, 421, 121])