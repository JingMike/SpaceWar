
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
		this.node.x = 0;
		this.node.y = -200;
	},

    start () 
    {
    },

    update (dt) 
    {
	},
});
