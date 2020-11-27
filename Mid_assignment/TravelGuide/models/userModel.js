const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from users where (username='"+user.uid+"' or email='"+user.uid+"') and password='"+user.password+"'";
		console.log(sql);
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from users WHERE id="+id;

        db.getResults(sql, function(results){
            callback(results);
        });

	},
	updateUser: function(user, callback){
		var sql= "UPDATE users SET name='"+user.name+"',userName ='"+user.userName +"',password ='"+user.password +"',image ='"+user.image +"', email='"+user.email +"', userType='"+user.userType +"' where id="+user.id;
		//console.log(sql);
		db.execute(sql, function(status){
			callback(status);
		});
	},
	getAll: function(callback){
		var sql = "select * from users where userType='scout' UNION SELECT *FROM users WHERE userType='generalUser'";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	delete: function(id, callback){
		var sql = "DELETE FROM users WHERE id="+id;
        db.execute(sql, function(status){
            callback(status);
        });

	},
	insert: function(user, callback){
	
		var sql = "insert into users (id,name, userName, email, password, userType, createdAt,image) VALUES ('','"+user.name+"' , '"+user.userName+"' ,  '"+user.email+"' , '"+user.password+"' , '"+user.userType+"', current_timestamp(),'"+user.image +"')";
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},








	getByUname: function(Uname, callback){
		var sql = "select * from users WHERE userName='"+Uname+"'";

        db.getResults(sql, function(results){
            callback(results);
        });

	},
	getAllByUserType: function(userType, callback){
		var sql = "select * from users where userType='" + userType + "'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllEvents: function(callback){
		var sql = "select * from events";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	getAllDonation: function(id, callback){
		var sql = "select * from donations WHERE eventId="+id;
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	
}