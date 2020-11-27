const db = require('./db');

module.exports ={

	insert: function(user, callback){
	
		var sql = "insert into touristspots VALUES ('','"+user.country+"' , '"+user.place+"' ,  '"+user.travelingMedium+"' , '"+user.cost+"' , '"+user.isApprove+"','"+user.changeRequest +"')";
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	getAllTouristSpot: function(callback){
		var sql = "select * from touristspots";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	getAllById: function(id,callback){
		var sql = "select * from touristspots where id="+id;
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	updateApprove: function(id, callback){
		var sql= "UPDATE touristspots SET isApprove='approved' where id="+id;
		console.log(sql);
		db.execute(sql, function(status){
			callback(status);
		});
	},
	updateRequest: function(id, callback){
		var sql= "UPDATE touristspots SET changeRequest='accepted' where id="+id;
		//console.log(sql);
		db.execute(sql, function(status){
			callback(status);
		});
	}
}