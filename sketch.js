var garden,rabbit,apple, leaf;
var gardenImg,rabbitImg, appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple-removebg-preview.png");
  leafImg = loadImage("leaf-removebg-preview.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//apple leaf group
appleG = createGroup();
leafG = createGroup();

rabbit.setCollider("circle", 0, 0, 400);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  drawSprites();
  var select = Math.round(random(1, 2));

  if(frameCount % 80 == 0){
    if(select == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }

  for(var i = 0;i<appleG.length; i++){
    if(appleG.get(i).isTouching(rabbit)){
      appleG.get(i).destroy();
    }
  }

  for(var j = 0;j<leafG.length; j++){
    if(leafG.get(j).isTouching(rabbit)){
      leafG.get(j).destroy();
    }
  }
  
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 4;
  apple.scale = 0.1;
  apple.lifetime = 100;

  appleG.add(apple);

  apple.depth = rabbit.depth;
  rabbit.depth += 1;

}

function createLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY = 4;
  leaf.scale = 0.1;
  leaf.lifetime = 100;

  leafG.add(leaf);
  leaf.depth = rabbit.depth;
  rabbit.depth += 1;

}
