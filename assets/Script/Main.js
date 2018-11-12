
var Global = require('Global');

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

        starSkyPrefab: 
        {
            default: [],
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
        var newEnemy = cc.instantiate(this.enemyPrefab);
        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.getNewEnemyPosition());
    },

    getNewEnemyPosition: function () 
    {
        var randY = this.node.height/2;
        var randX = (Math.random()-0.5) * this.node.width;
        return cc.v2(randX, randY);
    },

    onLoad () 
    {
		Global.main = this;
		Global.starSkyPosition = this.node.height/2;
		this.generateNewEnemy();
	},

    start () 
    {
    },

    update (dt) 
    {
	},
	
});
