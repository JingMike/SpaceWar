
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
        cc.log("Player.onload.");
        cc.log("Global.main.height:"+Global.main.node.height);
	},

    start () 
    {
    },

    update (dt) 
    {
        // Change Y position according to the speed.
		this.node.y -= this.getEnemySpeed() * dt;

        // Check for the screen border.
		if (this.node.y < -Global.main.node.height / 2)
            // Move to the top with random X position if it goes out of the screen bottom.
		{
			this.node.y = Global.main.node.height / 2;
			this.node.x = (Math.random() - 0.5) * 2 * Global.main.node.width;
		}
	},
    
    getEnemySpeed()
    {
        return Global.systemSpeed /* + enenmy speep */;
    },
});
