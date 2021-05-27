let arr = [13, 10, 12, 9, 3, 3, 4, 4, 5, 5];
console.log(arr, " Шинэ array");

let p, b;
let game = {
    player: function (a) {
        // let p, b;
        p = a.shift();
        b = a.shift();
        return {
            p, b
        }
    },
    banker: function (a) {
        let p, b;
        p = a.shift();
        b = a.shift();
        return {
            p, b
        }
    }
}
let x = game.player(arr);
let y = game.banker(arr);

console.log(x.p, " player 1st card");
console.log(x.b, " banker's 1st card");
console.log(y.p, " player 2nd card");
console.log(y.b, " banker's 2nd card");

let pt = x.p + y.p;
let bt = x.b + y.b;

if (pt >= 10 && pt <= 19) {
    pt = pt - 10;
}else if(pt >= 20){
    pt = pt - 20;
}

if (bt >= 10 && bt <= 19) {
    bt = bt - 10;
}else if(bt >= 20){
    bt = bt - 20;
}
console.log("PLAYER'S two card's total : ", pt);
console.log("BANKER'S two card's total : ", bt);

console.log("MAIN ARRAY: ", arr);

if (pt !== 6 && pt !== 7 && pt !== 8 && pt !== 9) {
    p = arr.shift();
    console.log("PLAYER'S 3rd card: ", p);
    let pfinal = p + pt;
    if (pfinal >= 10) {
        pfinal = pfinal - 10;
    };
    console.log("PLAYER'S total: ", pfinal);
} else {
    console.log("natural player");
}

if (bt !== 6 && bt !== 7 && bt !== 8 && bt !== 9) {
    b = arr.shift();
    console.log("bANKER'S 3rd card: ", b);
    let bfinal = b + bt;
    if (bfinal >= 10) {
        bfinal = bfinal - 10;
    }
    console.log("BANKER'S GAME TOTAL: ", bfinal);
} else {
    console.log("natural banker");
}

// declaring winnner:
// if (pfinal > bfinal) {
//     console.log("PLAYER WON");
// } else if (p + pt < b + bt) {
//     console.log("BANKER WON");
// } else if (pfinal === bfinal) {
//     console.log(" PUSH ");
// }


console.log("MAIN ARRAY: ", arr);









