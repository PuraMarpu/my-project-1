class player{
    constructor(x,y){
        this.knight=Bodies.rectangle(x,y,30,30);

        this.w = this.knight.width;
        this.h = this.knight.height;

        World.add(world,this.knight);
    }
    show(){
        var pos=this.knight.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}