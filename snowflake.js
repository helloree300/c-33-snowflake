class Snowflake
{
    constructor(x,y,width,height)
    {
        var options=
        {
        density:1,
        restitution: 1,
        friction: 0,
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,1,1,options);
        this.image= loadImage("images/snow5.webp");
        World.add(world, this.body);
    }
    update()
 {
    if(this.snow.position.y>height){
        Matter.Body.setPosition(this.body,{
        x:random(0,800),
        y:random(0,800)        
    })
    }
 }
    display()
    {  
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);

    }
    
};