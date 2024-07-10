function getMilk() {
    var howMuch = prompt("Shopkeeper Dave: \n\nOi oi, how much money you got?");
    howMany = Math.floor(howMuch / 1.5);

    if (howMany === 0) {
        alert("You broke fool, get your broke ass outta here!");
    } else {
        alert("You have enough for " + howMany + " bottles of milk mukka.");
    }

    if (howMany === 1) {
        console.log("buy " + howMany + " bottle of milk");
        alert("Enjoy your milk, off you go.");
    } else if (howMany > 1) {
        console.log("buy " + howMany + " bottles of milk");
        alert("Enjoy your milk, off you go.");
    } else {
        console.log("leave shop empty handed");
    }
}

function walkToShop() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert("Walking to shops.......");
}

function walkHome() {
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    alert("Walking home.......");
}

function arriveHome() {
    if (howMany === 0) {
        alert("I'm home, no milk today, /cry.");
    } else { 
        alert("I'm home, we got " + howMany + " bottles of milk, let's have a party!");
    }  
}

var howMany;

alert("I'm off to the shop to grab some milk.");
walkToShop();
alert("I'm at the shop, that was fast!");
getMilk();
walkHome();
arriveHome();
