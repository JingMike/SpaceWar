
const Global = require('Global');

cc.Class(
{
    extends: cc.Component,

    properties: 
    {
		StarSkyPool: 
        {
			default: [],
			type: cc.NodePool
		},
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
		cc.log(this.node);
		//this.starSky = cc.instantiate(this.starSkyPrefab);
		Global.starSkyHeight = this.node.height;
	},

    start () 
    {
    },

    update (dt) 
    {
		Global.starSkyPosition -= this.systemSpeed/10 * dt;
		var height = Global.main.node.height;
		if (Global.starSkyPosition <= height/2)
		{
			Global.starSkyPosition = height/2+Global.starSkyHeight;
		}

		for (var counter = 0; counter < 4; counter++)
		{
				this.setPosition(0, Global.starSkyPosition-Global.starSkyHeight*counter);
		}
	},
});
