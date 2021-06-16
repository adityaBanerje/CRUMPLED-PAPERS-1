class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w = w;
		this.h=h;
	
		this.body=Bodies.rectangle(x, y , w , h , options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{		
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;

			push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w,this.h)
			pop()
			
	}

}