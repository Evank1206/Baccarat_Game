let arr = [1, 2, 5, 7, 3, 3, 4, 4, 5, 5, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0, 8, 8, 9, 0, 0, 0, 0, 9, 8, 8, 7, 6,];
console.log(arr, " Шинэ array");
togloom(arr)
function togloom(a) {
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
    // total two card's value
    let pt = x.p + y.p;
    let bt = x.b + y.b;
    // adjusting card's value
    if (pt >= 10 && pt <= 19) {
        pt = pt - 10;
    } else if (pt >= 20) {
        pt = pt - 20;
    }

    if (bt >= 10 && bt <= 19) {
        bt = bt - 10;
    } else if (bt >= 20) {
        bt = bt - 20;
    }
    console.log("PLAYER'S two card's total : ", pt);
    console.log("BANKER'S two card's total : ", bt);

    console.log("MAIN ARRAY: ", arr);
    let pfinal, bfinal
    pp();
    bb();
    function pp() {
        if (pt !== 6 && pt !== 7 && pt !== 8 && pt !== 9) {
            p = arr.shift();
            console.log("PLAYER'S 3rd card: ", p);
            pfinal = p + pt;
            if (pfinal >= 10) {
                pfinal = pfinal - 10;
            };
            console.log("PLAYER'S total: ", pfinal);
            if (pfinal > bfinal) {
                console.log("PLAYER WON");
                newGame();
            } else if (pfinal < bfinal) {
                console.log("BANKER WON");
                newGame();
            } 
            else if (pfinal === bfinal) {
                console.log(" PUSH ");
                newGame();
            }
        } else {
            if(pt > bt){
                console.log("natural Player won");
                newGame();
            }else if(pt === bt){
                console.log("PUSH"); 
                newGame();
            }else{
                console.log("natural Banker won");
                newGame();
            }
        } // esle ended here

    };

    function bb() {
        if (bt !== 6 && bt !== 7 && bt !== 8 && bt !== 9) {
            b = arr.shift();
            console.log("bANKER'S 3rd card: ", b);
            bfinal = b + bt;
            if (bfinal >= 10) {
                bfinal = bfinal - 10;
            }
            console.log("BANKER'S GAME TOTAL: ", bfinal);
            if (pfinal > bfinal) { // 3rd card win
                console.log("PLAYER WON");
                newGame();
            } else if (pfinal < bfinal) {
                console.log("BANKER WON");
                newGame();
            } 
            else if (pfinal === bfinal) {
                console.log(" PUSH ");
                newGame();
            }
        } 
        // else {
        //     console.log("natural banker won");
        // }
    };

    // declaring winnner:
    // if (pfinal > bfinal) {
    //     console.log("PLAYER WON");
    // } else if (pfinal < bfinal) {
    //     console.log("BANKER WON");
    // } 
    // else if (pfinal === bfinal) {
    //     console.log(" PUSH ");
    // }

};

// new game starts here
console.log("MAIN ARRAY: ", arr);
// newGame();
// console.log("MAIN ARRAY: ", arr);
// newGame();
// console.log("MAIN ARRAY: ", arr);
// newGame();
// console.log("MAIN ARRAY: ", arr);
// newGame();
// console.log("MAIN ARRAY: ", arr);
// newGame();

function newGame() {
    togloom(arr)
}









