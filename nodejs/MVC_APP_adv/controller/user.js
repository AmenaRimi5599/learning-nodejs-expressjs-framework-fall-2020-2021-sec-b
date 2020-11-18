const express = require('express');
const userModel	= require.main.require('./models/userModel');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('user/create'); 
})

router.post('/create', (req, res)=>{

	var user = {
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})


router.get('/edit/:id', (req, res)=>{

	var data = req.params.id;
    //res.send(data);
    userModel.getById(data, function(results){
        res.render('user/edit', {edit: results});
    });

})


router.post('/edit/:id', (req, res)=>{

	var user = {
		data    :   req.params.id,
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/edit/:id');
		}
	});
})

router.get('/delete/:id', (req, res)=>{
var data = req.params.id;
    //res.send(data);
    userModel.getById(data, function(results){
        res.render('user/delete', {delete: results});
    });
})

router.post('/delete/:id', (req, res)=>{
	var data = req.params.id;

	userModel.delete(data, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/home/userlist');
		}
	});
})

module.exports = router;


//validation -> express-validator (https://www.npmjs.com/package/express-validator)
//file upload -> express-fileupload (https://www.npmjs.com/package/express-fileupload)
