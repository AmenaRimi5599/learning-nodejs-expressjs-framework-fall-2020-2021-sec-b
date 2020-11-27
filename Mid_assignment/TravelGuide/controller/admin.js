const express = require("express");
const userModel = require.main.require("./models/userModel");
const touristSpotModel = require.main.require("./models/touristSpotModel");
const router = express.Router();

router.get('/', (req, res)=>{
  if(req.session.user != null){
    res.render('admin/index');
  }else{
    res.redirect('/login');
  }
})

router.get('/userList', (req, res)=>{
    //res.send(data);
    userModel.getAll(function(results){
        res.render('admin/userList', {userlist: results});
    });
})


router.get('/deleteUser/:id', (req, res)=>{
var data = req.params.id;
    //res.send(data);
    userModel.getById(data, function(results){
        res.render('admin/deleteUser', {user: results});
    });
})

router.post('/deleteUser/:id', (req, res)=>{
 var data = req.params.id;
  userModel.delete(data, function(status){
    if(status){
      res.redirect('/admin/userList');
    }else{
      res.redirect('admin/deleteUser/:id');
    }
  });
});

router.get('/adminProfile', (req, res)=>{
  var data = req.cookies['id'];
  userModel.getById(data,function(results){
    res.render('admin/adminProfile', {adminprofilelist: results});
  }); 
});
router.get('/adminEditProfile', (req, res)=>{
  var data = req.cookies['id'];
  userModel.getById(data,function(results){
    console.log("hahahah")
    res.render('admin/adminEditProfile', {adminproflist: results});
  }); 
});
router.post('/adminEditProfile', (req, res)=>{
  var user = {
    userName :  req.body.userName,
    name     :  req.body.name,
    id       :  req.cookies['id'],
    email    :  req.body.email,
    userType :  req.body.userType,
    password :  req.body.password,
    image    :  req.body.image
  }; 
  userModel.updateUser(user, function(status){
    if(status){
      res.redirect('/admin/adminProfile');
    }else{
      res.redirect('admin/adminEditProfile');
    }
  });
});

router.get('/addNewUser', (req, res)=>{
  res.render('admin/addNewUser'); 
});

router.post('/addNewUser', (req, res)=>{
 var user = {
    userName :  req.body.userName,
    name     :  req.body.name,
    id       :  req.cookies['id'],
    email    :  req.body.email,
    userType :  req.body.userType,
    password :  req.body.password,
    image    :  req.body.image
  }; 

  userModel.insert(user, function(status){
    if(status){
      res.redirect('/admin/userList');
    }else{
      res.redirect('/admin/addNewUser');
    }
  });
});

router.get('/allTouristSpot', (req, res)=>{
    //res.send(data);
    touristSpotModel.getAllTouristSpot(function(results){
        res.render('admin/allTouristSpot', {allTouristlist: results});
    });
})

router.get('/approveTouristSpot/:id', (req, res)=>{
  var data = req.params.id;

  touristSpotModel.getAllById(data,function(results){
    console.log(results);
    res.render('admin/approveTouristSpot',{touristSpotlist: results});
  });

});
router.post('/approveTouristSpot/:id',(req,res)=>{
  var data = req.params.id;

  touristSpotModel.updateApprove(data,function(status){
    console.log("ejfgiweuiw")
    if (status) {
      res.redirect('/admin/allTouristSpot');
    }else{
      res.redirect('/admin/approveTouristSpot');
    }
  });
});

module.exports = router;
