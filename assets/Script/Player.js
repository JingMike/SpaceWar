
var Global = require('Global');

cc.Class(
{
    extends: cc.Component,

    properties: 
    {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
		this.node.x = Global.playerInitX;
		this.node.y = Global.playerInitY;
	},

    start () 
    {
    },

    update (dt) 
    {
	},
});
