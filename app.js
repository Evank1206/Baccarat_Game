/* There are 13 kinds of card (val: 1-13), 24 same value (0,0,0,0......24) = 312 numbers of cars */
/* 1 to 9 are current value, 10 to 13 = 0 val */
// var arr = [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
// 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
// 3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
// 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
// 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
// 6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
// 7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
// 8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,
// 9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(arr, " Шинэ array");
/* let x, player, banker;

first(arr);
function first(arr1) {
    x = arr1.sort(() => 0.5 - Math.random());
    console.log(x, " Холигдсон array");
    player = x.shift();
    banker = x.shift();
    console.log("first display draw: ", player, banker);
    console.log(arr);
    second(arr);
    

}
// console.log(arr);
// second(arr);
function second(arr2) {
    // let player, banker;
    player = arr2.shift();
    console.log(player);
    banker = arr2.shift();
    console.log("second display draw: ", player, banker)
}

console.log(arr);
*/

/* const player = {
    first : function(arr){
        let x, y;
        x = arr.shift();
        y = arr.shift();
        return {
            x,y
        }
    }
}
let zz = player.first(arr)
console.log(zz);
console.log(arr);

const banker = {
    second : function(arr){
        let x, y;
        x = arr.shift();
        y = arr.shift();
        return {
            x,y
        }
    }
}
let ll = banker.second(arr)
console.log(ll);

console.log(zz.x + ll.x, zz.y + ll.y);

console.log(arr);
*/
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
// console.log(x + y);
console.log("PLAYER'S two card's total : ", x.p + y.p);
console.log("BANKER'S two card's total : ", x.b + y.b);

console.log("MAIN ARRAY: ", arr);

if (x.p + y.p !== 8 || 9) {
    p = arr.shift();
    console.log("PLAYER'S 3rd card: ", p);
    console.log("PLAYER'S total: ", p + x.p + y.p);
    b = arr.shift();
    console.log("bANKER'S 3rd card: ", b);
    console.log("BANKER'S GAME TOTAL: ", b + x.b + y.b);
    // declaring winnner:
    if (p + x.p + y.p > b + x.b + y.b) {
        console.log("PLAYER WON");
    } else if (p + x.p + y.p < b + x.b + y.b) {
        console.log("BANKER WON");
    } else if (p + x.p + y.p === b + x.b + y.b) {
        console.log(" PUSH ");
    }

}

console.log("MAIN ARRAY: ", arr);









