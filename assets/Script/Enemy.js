
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
	},

    start () 
    {
    },

    update (dt) 
    {
		this.node.y -= 100 * dt;
		var height = Global.main.node.height;
		var width = Global.main.node.width;
		if (this.node.y < -height)
		{
			var ran = Math.random();
			this.node.y = height;
			this.node.x = (ran-0.5)*2 * width;
		}
	},
});
