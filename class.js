class Box {
    var options = {
        'restitution': 0.4,
        'isStatic': true
    }
        this.body = Bodies.circle(200,100,50,50,options);
        World.add(world,this.body);

        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill(255);
        }
}

