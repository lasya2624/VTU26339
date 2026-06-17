const {DataTypes}=require("sequelize");

const sequelize=require("../config/database");

const Notification=sequelize.define("Notification",{

id:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},

studentId:{
type:DataTypes.INTEGER,
allowNull:false
},

type:{
type:DataTypes.STRING
},

message:{
type:DataTypes.TEXT
},

isRead:{
type:DataTypes.BOOLEAN,
defaultValue:false
}

},{
timestamps:true
});

module.exports=Notification;