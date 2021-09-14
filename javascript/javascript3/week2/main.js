const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];


async function translateOneByOne() {
    try {
        await moveElement(redBox, { x: 20, y: 300 });
        console.log("Red circle moved");
        await moveElement(blueBox, { x: 400, y: 300 });
        console.log("Blue circle moved");
        await moveElement(greenBox, { x: 400, y: 20 });
        console.log("green circle moved");
    } catch (error) {
        console.log(error);
    }
}
translateOneByOne();

async function translateAllAtOnce() {
    Promise.all([
        moveElement(redBox, { x: 20, y: 300 }),
        moveElement(blueBox, { x: 400, y: 300 }),
        moveElement(greenBox, { x: 400, y: 20 }),
    ]).then(() => console.log("All are moved at the same time!"));
}
translateAllAtOnce();
