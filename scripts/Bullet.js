class Bullet{
  constructor(tank){
    var spriteName;
    if(tank.direction.x > 0){
      spriteName = 'bulletRight';
    }
    else if(tank.direction.x < 0){
      spriteName = 'bulletLeft';
    }
    else if(tank.direction.y > 0){
      spriteName = 'bulletDown';
    }
    else if(tank.direction.y < 0){
      spriteName = 'bulletUp';
    }

    this.sprite = TankOnline.bulletGroup.create(tank.sprite.x, tank.sprite.y, spriteName);
    this.sprite.anchor.set(0.5,0.5);

    this.sprite.body.velocity = new Phaser.Point(tank.direction.x * 1000, tank.direction.y * 1000);
    this.sprite.bulletDamage = 1
  }
}
