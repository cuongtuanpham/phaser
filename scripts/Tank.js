class Tank{
  constructor(x, y, group){
    this.sprite = group.create(x, y, 'tankDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5,0.5);
    this.direction = new Phaser.Point(0,1);
    this.lastShotTime = TankOnline.game.time.now;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.health = 5;
  }

  update(direction){
    if(direction.x < 0){
      this.sprite.body.velocity.x = -550;
      this.sprite.loadTexture('tankLeft');
      this.direction = new Phaser.Point(-1,0);//vector
    }
    else if (direction.x > 0){
      this.sprite.body.velocity.x = 550;
      this.sprite.loadTexture('tankRight');
      this.direction = new Phaser.Point(1,0);//vector with x = 1, y = 0
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(direction.y < 0){
      this.sprite.body.velocity.y = -550;
      this.sprite.loadTexture('tankUp');
      this.direction = new Phaser.Point(0,-1);
    }
    else if (direction.y > 0){
      this.sprite.body.velocity.y = 550;
      this.sprite.loadTexture('tankDown');
      this.direction = new Phaser.Point(0,1);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  }
}
