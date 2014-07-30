template.load = function(game){
};

template.load.prototype = {
	preload: function(){
		this.stage.backgroundColor = "#CFBBAE";

		this.load.tilemap('level1','level1.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.image('tileset','tileset.png');
		this.load.spritesheet('sprites','sprites.png',20,42);
	},

	update: function(){
		// use this if your loading an 'MP3', this will wait for the decoding to be done, so your music won't 'lag'
		// if (this.cache.isSoundDecoded('music') && this.ready == false)
		// {
		// 	this.ready = true;
		// 	game.state.start('menu');
		// }
		game.state.start('game');
	}
}