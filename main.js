const config = {
    type: Phaser.AUTO,
    width: 300,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
    scene: {
        init: Init,
        preload: Preload,
        create: Create,
        update: Update
    }
};

const game = new Phaser.Game(config);