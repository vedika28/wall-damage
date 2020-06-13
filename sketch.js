
var bullet, wall, speed, weight, damage, thickness;

function setup() {
  createCanvas(1600, 400);

  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness=random(22,83);

  wall = createSprite(1200, 200, thickness, height / 2);
  bullet = createSprite(50, 200, 55, 25);
    wall.shapeColor = color(80, 80, 80);
    bullet.shapeColor = color(145, 90, 185);

  bullet.velocityX = speed;
  damage = 0.5 * weight * speed * speed / thickness*thickness*thickness;

}

function draw() {
  background(0);

  collided(wall,bullet);

  drawSprites();
}

function collided(sprite1,sprite2) {
  if (sprite1.x - sprite2.x <= sprite2.width / 2 + sprite1.width / 2) {
    if (damage<=10) {
      sprite1.shapeColor = color(0, 255, 0);
    }
    if (damage>10) {
      sprite1.shapeColor = color(255, 0, 0);
    }
    sprite2.velocityX = 0;
    sprite2.x = 1200-(thickness/2)-27.5;
  }
}