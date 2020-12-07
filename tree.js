class Tree{
    constructor(x,y){
        var options = {
            isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 300, 600, options);
    this.width = 300;
    this.height = 600;
    this.image = loadImage("tree.png");
    World.add(world, this.body);


            }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height);

}
}
