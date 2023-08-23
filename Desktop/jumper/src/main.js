 import Play from './scenes/Play.js'
 
 export default new Phaser.Game({
    type: Phaser.auto,
    width: 480,
    height: 640,
    scene: Play,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        }
    }
 }) 