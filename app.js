let arr = [1, 2, 5, 5, 0, 3, 4, 4, 5, 5, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0, 8, 8, 9, 0, 0, 0, 0, 9, 8, 8, 7, 6,];
console.log(arr, " Шинэ array");
togloom(arr);
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
            // let p, b;
            p = a.shift();
            b = a.shift();
            return {
                p, b
            }
        }
    }
    let x = game.player(arr);
    let y = game.banker(arr);
    // To DOM
    console.log(x.p, " player 1st card");
    console.log(x.b, " banker's 1st card");
    console.log(y.p, " player 2nd card");
    console.log(y.b, " banker's 2nd card");
    // total two card's value
    let pt = x.p + y.p;
    let bt = x.b + y.b;
    // adjusting two card's value
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
            // To DOM
            console.log("PLAYER'S 3rd card: ", p);
            pfinal = p + pt;
            if (pfinal >= 10) {
                pfinal = pfinal - 10;
            };
            console.log("PLAYER'S total: ", pfinal);
            if (pfinal > bfinal) {
                // To DOM
                console.log("PLAYER WON");
                newGame();
            } else if (pfinal < bfinal) {
                // To DOM
                console.log("BANKER WON");
                newGame();
            }
            else if (pfinal === bfinal) {
                // To DOM
                console.log(" PUSH ");
                newGame();
            }
            // Delcaring 2 Card's Winner
        } else {
            if (pt !== 6 && pt !== 7) {
                if (pt > bt) {
                    console.log("Player Won ", pt);
                } else if (pt < bt) {
                    console.log("Banker Won ", bt);
                } else {
                    console.log("PUSH");
                }

            } else {
                // ЭНД АЖИЛЛАЖ БАЙГАА
                // it's 6 or 7
                if (pt === 6 || pt === 7 && bt !== 7) {
                    p = arr.shift();
                    console.log(" this is 3rd card of Player ", p);
                    pfinal = pt + p;
                    console.log("PLayer Final ", pfinal);
                    // console.log(pfinal > bfinal ? console.log("player Woon") : console.log("Banker Woon"));
                    // if(pfinal > bfinal){
                    //     console.log("Player Won by ", pfinal);
                    // }else if(pfinal === bfinal){
                    //     console.log( "Push by ", pfinal);
                    // }else{
                    //     console.log(bfinal);
                    //     console.log("Banker won by", bfinal);
                    // }

                }
                // else{
                //     console.log("Yeaaaah ");
                // }

            }
            // if(pt > bt){
            //     console.log("natural Player won by ", pt);
            //     newGame();
            // }else if(pt === bt){
            //     console.log("PUSH"); 
            //     newGame();
            // }else{
            //     console.log("natural Banker won by ", bt);
            //     newGame();
            // }
        }
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
        // Энд АЖИЛЛАЖ БАЙНА
        else {
            if (bt !== 6 && bt !== 7) {
                if (bt > pt) {
                    console.log("Banker Won ", bt);
                } else if (bt < pt) {
                    console.log("Player Won ", pt);
                } else {
                    console.log("PUSH", bt, " ", pt);
                }

            } else {
                if (bt !== 7 && pt === 6 || pt === 7) {
                    b = arr.shift();
                    console.log(" Banker third card ", b);
                    bfinal = bt + b;
                    console.log("banker final ", bfinal);
                    if (pfinal > bfinal) {
                        console.log("Player Won by ", pfinal);
                    } else if (pfinal === bfinal) {
                        console.log("Push by ", pfinal);
                    } else {
                        console.log(bfinal);
                        console.log("Banker won by", bfinal);
                    }
                }else{
                    console.log("Can you see it ");
                }

            }

        }
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
};


let date, hours, minutes;
date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
// console.log(hours+":"+minutes );
let el = document.createElement("h2")
el.textContent =  hours + ":"+minutes;
// document.getElementById("box").textContent = hours + ":"+minutes;
document.getElementById("box").appendChild(el);









