
var MyBase = cc.Class(
{
    properties: 
    {
        team: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '碰撞分组',
        },

        aiLevel: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: 'AI等级',
        },

        health: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '生命值',
        },

        amor: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '防御值',
        },

        fireDamage: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '火力值',
        },

        collidDamage: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '撞击伤害',
        },

        bombDamage: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '炸弹火力',
        },

        bombNumber: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '炸弹个数',
        },

        SpeedAbs: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '绝对速度',
        },

        dodge: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '躲闪能力',
        },

        chase: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: '追击能力',
        },

        posZ: 
        {
            default: 0,
            type: cc.Integer,
            tooltip: 'Z坐标',
        },

    },
});

