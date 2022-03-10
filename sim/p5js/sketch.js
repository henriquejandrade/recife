var constants;

var map;
var buildings;
var roads;
var humans;

var camera;
var cameraMove;

var WIDTH = 1024;
var HEIGHT = 512;

function setup() {
    constants = new Constants();

    camera = new Vector2(10, 10);

    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.id('bgCanvas');
    canvas.parent('screen');

    map = [];
    for (let i = 1; i < 15; i++) {
        for (let j = 1; j < 7; j++) {
            map.push(
                new Block(i, j, 1, 0)
            );
        }
    }

    // map.push(new Block(0, 4, 1, 1));

    buildings = [];
    buildings.push(new Building(4, 2, 3, new Color(255, 255, 255)));
    buildings.push(new Building(2, 2, 3, new Color(255, 255, 255)));

    roads = [];
    roads.push(new Road(1, 3, 0));
    roads.push(new Road(2, 1, 0));
    roads.push(new Road(2, 3, 0));
    roads.push(new Road(3, 1, 2));
    roads.push(new Road(3, 2, 1));
    roads.push(new Road(3, 3, 2));

    humans = [];

    for (let i = 0; i < 50; i++) {
        var position;

        do {
            position = new Vector2(
                Math.random() * WIDTH,
                Math.random() * HEIGHT);
        } while (!isFloor(position));

        humans.push(new Human(position));
    }
}

function isFloor(position) {
    constants = new Constants();
    var i = Math.floor(position.x / constants.SIZE) * constants.SIZE;
    var j = Math.floor(position.y / constants.SIZE) * constants.SIZE;

    var result = false;

    for (let t = 0; t < map.length; t++) {
        if (map[t].x == i && map[t].y == j) {
            result = true;
        }
    }

    if (result) {
        for (let t = 0; t < buildings.length; t++) {
            if (buildings[t].x == i && buildings[t].y == j) {
                result = false;
            }
        }
    }

    return result;
}

function myLerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

function update() {
    for (let t = 0; t < humans.length; t++) {
        var position = humans[t].position;
        var newPosition;
        var tries = 0;
        do {
            tries++;
            newPosition = Object.assign({}, position);
            if (tries >= 5) {
                break;
            }

            newPosition.x += random(-1, 1);
            newPosition.y += random(-1, 1);
        } while (!isFloor(newPosition));

        humans[t].position = newPosition;
    }

    // Camera
    switch (cameraMove) {
        case 'w': camera.y--; break;
        case 'a': camera.x--; break;
        case 's': camera.y++; break;
        case 'd': camera.x++; break;
    }
}

function keyPressed() {
    switch (key) {
        case 'w': cameraMove = 'w'; break;
        case 'a': cameraMove = 'a'; break;
        case 's': cameraMove = 's'; break;
        case 'd': cameraMove = 'd'; break;
    }
}

function keyReleased() {
    switch (key) {
        case 'w': cameraMove = ''; break;
        case 'a': cameraMove = ''; break;
        case 's': cameraMove = ''; break;
        case 'd': cameraMove = ''; break;
    }
}

function draw() {
    update();

    background(0, 127, 255);

    for (let i = 0; i < map.length; i++) {
        map[i].draw(camera);
    }

    for (let i = 0; i < roads.length; i++) {
        roads[i].draw(camera);
    }

    for (let i = 0; i < humans.length; i++) {
        humans[i].draw(camera);
    }

    for (let i = 0; i < buildings.length; i++) {
        buildings[i].draw(camera);
    }
}