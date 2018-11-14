
var Global = require('Global');
//var Global = require('StarSky');

cc.Class(
{
    extends: cc.Component,

    properties: 
    {
        enemyPrefab: 
        {
            default: null,
            type: cc.Prefab
        },

        player: 
        {
            default: null,
            type: cc.Node
        },
    },

    generateNewEnemy: function() 
    {
        cc.log("Generating enemy air craft.");
        
        var newEnemy = cc.instantiate(this.enemyPrefab);
        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.getNewEnemyPosition());
    },

    getNewEnemyPosition: function () 
    {
        var randY = this.node.height / 2;
        var randX = (Math.random() - 0.5) * this.node.width;
        return cc.v2(randX, randY);
    },

    onLoad () 
    {
        cc.log("Main.onload.");

        this.initGlobal();
		this.generateNewEnemy();
        //StarSky.generateSkyPieces();
	},

    start () 
    {
    },

    update (dt) 
    {
	},
    
    initGlobal()
    {
        cc.log("initGlobal().");

		Global.main = this;
		Global.level = 0;
		Global.score = 0;
		Global.systemSpeed = 100 + Global.level * Global.level;
		Global.playerInitX = 0;
		Global.playerInitY = -200;
		Global.starSkyPieceNumber = 4;

		// Global.starSkyPosition & Global.starSkyHeight will be initialized later by StarSky.
    }	
});
