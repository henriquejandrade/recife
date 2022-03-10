class Human {
    constants = new Constants();

    constructor(position) {
        this.position = position;
    }

    draw(camera) {
        translate(
            camera.x + this.position.x,
            camera.y + this.position.y, 0);

        fill(140, 105, 0);

        // Head
        circle(0, 0, constants.SIZE / 8, constants.SIZE / 8);

        // translate(-this.position.x, -this.position.y, 0);
        translate(
            -(camera.x + this.position.x),
            -(camera.y + this.position.y), 0);
    }
}