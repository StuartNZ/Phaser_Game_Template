var template = {};

template.boot = function(game){};

template.boot.prototype = {
	preload: function(){
		this.stage.backgroundColor = "#FFFFFF";
	},

	create: function(){
		 //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 480;
            this.scale.minHeight = 260;
            this.scale.maxWidth = 1024;
            this.scale.maxHeight = 768;
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
            this.scale.setScreenSize(true);
        }
	},

	update: function(){
		// Add any intro screens/loading animations here
		this.start();
	},

	start: function(){
		// un-comment the lines below to have the game be fullscreen, however this function must be accessed via the users
		// action in order for it to work, for instance:
		// in the update function, have a button that when the user clicks on it, it calls this function, and then the
		// fullscreen will work properly

		// game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		// game.scale.startFullScreen();
		game.state.start('load');
	}
}