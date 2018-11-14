
var Global = require('Global');

cc.Class(
{
    extends: cc.Component,

    properties: 
    {
		starSkyPool: 
        {
			default: [],
			type: cc.NodePool
		},
        starSky: 
        {
            default: [],
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    generateSkyPieces()
    {
		for (var counter = 0; counter < Global.starSkyPieceNumber; counter++)
        {
            this.starSky[counter] = cc.instantiate(this.starSkyPrefab);
            cc.log(counter);
            cc.log(this.starSky[counter]);
            cc.log(this.starSky[counter].node);
        }
    },
    
    onLoad () 
    {
        cc.log("StarSky.onload.");

		Global.starSkyPosition = Global.main.height/2;
		Global.starSkyHeight = this.starSky[0].height;
	},

    start () 
    {
    },

    update (dt) 
    {
        // Update the overall position.
		Global.starSkyPosition -= this.systemSpeed/10 * dt;
        
		var maxPosY = Global.main.height;
		if (Global.starSkyPosition >= maxPosY)
		{
			Global.starSkyPosition = maxPosY/2;
		}

		for (var counter = 0; counter < Global.starSkyPieceNumber; counter++)
		{
			this.starSky[counter].setPosition(0, Global.starSkyPosition-Global.starSkyHeight*counter);
		}
	},
});
