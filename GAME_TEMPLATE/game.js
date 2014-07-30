template.game = function(game){
	this.levelNumber = 0;
};

template.game.prototype = {
	loadLevel: function(){
		// call this function whenever you want to load another level, however you must name the json files
		// 'level1.json', 'level2.json', 'level3.json' and so on
		this.levelNumber++;
		if(this.layer){
			this.layer.destroy();
		}

		this.map = this.add.tilemap('level'+this.levelNumber);
		this.map.addTilesetImage('tileset','tileset');
		this.map.setCollisionBetween(0,4);
		this.layer = this.map.createLayer('Tile Layer 1');
		this.layer.resizeWorld();
	},

	create: function(){
		this.loadLevel();
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.player = this.add.sprite(125,125,'sprites');
		this.player.frame = 1;
		this.player.anchor.setTo(.5,.5);
		this.player.animations.add('walk',[1,2,1,3],12,true);
		game.camera.follow(this.player);

		game.physics.enable([this.player],Phaser.Physics.ARCADE);

		this.moveKeys = game.input.keyboard.createCursorKeys();
		this.attackBttn = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		//Use this if you want to control the character via gamepad
		game.input.gamepad.start();
		this.gamepad = game.input.gamepad.pad1;
	},

	update: function(){
		game.physics.arcade.collide(this.player,this.layer);

		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if(this.moveKeys.right.isDown || this.gamepad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){ //PLAYER MOVE RIGHT
			if(!this.playerFacingRight){
				this.player.scale.x = -1;
				this.playerFacingRight = true;
				this.playerFacingLeft = false;
			}
			this.player.body.velocity.x = 240;
			this.player.animations.play('walk');
		}else if(this.moveKeys.left.isDown || this.gamepad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){ //PLAYER MOVE LEFT
			if(!this.playerFacingLeft){
				this.player.scale.x = 1;
				this.playerFacingLeft = true;
				this.playerFacingRight = false;
			}
			this.player.body.velocity.x = -240;
			this.player.animations.play('walk');
		}

		if(this.moveKeys.up.isDown || this.gamepad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1){ //PLAYER MOVE UP
			this.player.body.velocity.y = -240;
			this.player.animations.play('walk');
		}else if(this.moveKeys.down.isDown || this.gamepad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1){ //PLAYER MOVE DOWN
			this.player.body.velocity.y = 240;
			this.player.animations.play('walk');
		}

		if(this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0){ //SETS THE PLAYER BACK TO IDOL STANCE
			this.player.animations.stop();
			this.player.frame = 1;
		}
	},

	render: function(){
		// game.debug.body(this.player);
	}
}