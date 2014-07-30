//This simply sets up the game properties
var game = new Phaser.Game(1280,720,Phaser.AUTO,'gameDIV');

game.state.add('boot',template.boot);
game.state.add('load',template.load);
// Don't forget to add a new state if you created a 'menu'/'title-screen'
game.state.add('game',template.game);

game.state.start('boot');