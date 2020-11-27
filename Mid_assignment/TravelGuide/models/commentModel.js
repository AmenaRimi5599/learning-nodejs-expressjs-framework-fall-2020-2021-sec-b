const db = require('./db');
module.exports ={
insertComment: function(user, callback){
		var sql = "INSERT INTO `comment` VALUES ('','"+user.touristspotsId+"' , '"+user.comment+"' ,  '"+user.commenterId+"'";
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	}

}