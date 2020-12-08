class Rope {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.4,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var ba = this.chain.bodyA.position
        var bb = this.chain.bodyB.position
        push();
        stroke("green");
        strokeWeight(5);
        line(ba.x, ba.y, bb.x, bb.y);
        pop();
    }
};