class Block {
    constants = new Constants();

    constructor(x, y, terrain, shape) {
        this.x = x * constants.SIZE;
        this.y = y * constants.SIZE;
        this.terrain = terrain;
        this.shape = shape;
    }

    draw(camera) {
        translate(camera.x + this.x, camera.y + this.y, 0);

        strokeWeight(1);
        stroke(0);

        // Bottom
        switch (this.terrain) {
            case 0:
                fill(255 - 32, 255 - 32, 255 - 32);
                break;

            case 1:
                fill(217, 209, 0);
                break;
        }

        switch (this.shape) {
            case 0:
                quad(0, 0,
                    this.constants.SIZE, 0,
                    this.constants.SIZE, 9 * this.constants.SIZE / 8,
                    0, 9 * this.constants.SIZE / 8);
                break;

            case 1:
                quad(
                    0, 0,
                    this.constants.SIZE, 0,
                    this.constants.SIZE, 9 * this.constants.SIZE / 8,
                    0, this.constants.SIZE / 8
                );
                break;
        }

        // Top
        switch (this.terrain) {
            case 0:
                fill(255, 255, 255);
                break;

            case 1:
                fill(150, 255, 115);
                break;
        }

        switch (this.shape) {
            case 0:
                quad(
                    0, 0,
                    this.constants.SIZE, 0,
                    this.constants.SIZE, this.constants.SIZE,
                    0, this.constants.SIZE);
                break;

            case 1:
                triangle(
                    0, 0,
                    this.constants.SIZE, 0,
                    this.constants.SIZE, this.constants.SIZE
                );
                break;
        }

        translate(-(camera.x + this.x), -(camera.y + this.y), 0);
    }
}

class Building {
    constants = new Constants();

    constructor(x, y, floors, color) {
        this.x = x * constants.SIZE;
        this.y = y * constants.SIZE;
        this.floors = floors;
        this.color = color;
    }

    draw(camera) {
        translate(camera.x + this.x, camera.y + this.y, 0);

        stroke(0);

        this.color.myFill();

        // Building
        quad(
            0, 0,
            this.constants.SIZE, 0,
            this.constants.SIZE, this.constants.SIZE,
            0, this.constants.SIZE);

        // Ceiling
        quad(
            0, -this.constants.SIZE / 16,
            this.constants.SIZE, -this.constants.SIZE / 16,
            this.constants.SIZE, 15 * this.constants.SIZE / 16,
            0, 15 * this.constants.SIZE / 16);

        quad(
            0, -this.constants.SIZE / 16,
            this.constants.SIZE, -this.constants.SIZE / 16,
            this.constants.SIZE, 4 * this.constants.SIZE / 16,
            0, 4 * this.constants.SIZE / 16);

        // // Door
        // quad(
        //     7 * this.constants.SIZE / 16, (this.constants.SIZE * 3) - (this.constants.SIZE / 2),
        //     9 * this.constants.SIZE / 16, (this.constants.SIZE * 3) - (this.constants.SIZE / 2),
        //     9 * this.constants.SIZE / 16, (this.constants.SIZE * 3) - (this.constants.SIZE / 4),
        //     7 * this.constants.SIZE / 16, (this.constants.SIZE * 3) - (this.constants.SIZE / 4));
        // arc(
        //     this.constants.SIZE / 2, 5 * this.constants.SIZE / 2,
        //     this.constants.SIZE / 8, this.constants.SIZE / 8,
        //     PI, 2 * PI);

        // Bricks
        // rect(
        //     8, 100,
        //     8, 4
        // );
        // rect(
        //     12, 104,
        //     8, 4
        // );

        translate(-(camera.x + this.x), -(camera.y + this.y), 0);
    }
}

class Road {
    constants = new Constants();

    constructor(x, y, orientation) {
        this.x = x * constants.SIZE;
        this.y = y * constants.SIZE;
        this.orientation = orientation;
    }

    draw(camera) {
        translate(camera.x + this.x, camera.y + this.y, 0);

        switch (this.orientation) {
            case 0:
                // Asphalt
                noStroke();
                fill(255, 239, 191);
                rect(0, constants.SIZE / 4, constants.SIZE, constants.SIZE / 2);

                // Contours
                stroke(0);
                line(0, constants.SIZE / 4, constants.SIZE, constants.SIZE / 4);
                line(0, 3 * constants.SIZE / 4, constants.SIZE, 3 * constants.SIZE / 4);
                break;

            case 1:
                // Asphalt
                noStroke();
                fill(255, 239, 191);
                rect(constants.SIZE / 4, 0, constants.SIZE / 2, constants.SIZE);

                // Contours
                stroke(0);
                line(constants.SIZE / 4, 0, constants.SIZE / 4, constants.SIZE);
                line(3 * constants.SIZE / 4, 0, 3 * constants.SIZE / 4, constants.SIZE);
                break;

            case 2:
                // Asphalt
                noStroke();
                fill(255, 239, 191);
                rect(0, constants.SIZE / 4, constants.SIZE, constants.SIZE / 2);
                rect(constants.SIZE / 4, 0, constants.SIZE / 2, constants.SIZE);

                // Contours
                stroke(0);
                noFill();
                rect(0, 0, constants.SIZE / 4, constants.SIZE / 4);
                rect(3 * constants.SIZE / 4, 0, constants.SIZE / 4, constants.SIZE / 4);
                rect(3 * constants.SIZE / 4, 3 * constants.SIZE / 4, constants.SIZE / 4, constants.SIZE / 4);
                rect(0, 3 * constants.SIZE / 4, constants.SIZE / 4, constants.SIZE / 4);
                break;
        }

        translate(-(camera.x + this.x), -(camera.y + this.y), 0);
    }
}