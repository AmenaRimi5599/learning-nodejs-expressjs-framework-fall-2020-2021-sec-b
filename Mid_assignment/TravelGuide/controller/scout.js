const express = require("express");
const userModel = require.main.require("./models/UserModel");
const router = express.Router();

router.get('/', (req, res)=>{
  if(req.session.user != null){
    res.render('scout/index');
  }else{
    res.redirect('/login');
  }
})
router.get('/scoutProfile', (req, res)=>{
  var data = req.cookies['id'];
  userModel.getById(data,function(results){
    res.render('scout/scoutProfile', {adminprofilelist: results});
  }); 
});
router.get('/scoutEditProfile', (req, res)=>{
  var data = req.cookies['id'];
  userModel.getById(data,function(results){
    console.log("hahahah")
    res.render('scout/scoutEditProfile', {adminproflist: results});
  }); 
});
router.post('/scoutEditProfile', (req, res)=>{
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
      res.redirect('/scout/scoutProfile');
    }else{
      res.redirect('scout/scoutEditProfile');
    }
  });
});

router.get('/createTouristSpot', (req, res)=>{
  res.render('scout/createTouristSpot'); 
});

router.post('/createTouristSpot', (req, res)=>{

 var user = {
    creatorId       :  req.cookies['id'],
    country         :  req.body.country,
    place           :  req.body.place,
    travelingMedium :  req.body.travelingMedium,
    cost            :  req.body.cost
  }; 

  userModel.insert(user, function(status){
    if(status){
      res.redirect('/scout/allTouristSpot');
    }else{
      res.redirect('/scout/createTouristSpot');
    }
  });
});


router.get("/approve/:id", (req, res) => {
  var data2 = req.params.id;

  eventModel.getById(data2, function (results) {
    res.render("moderator/approve", { approve: results });
  });
});

router.get("/decline/:id", (req, res) => {
  var data = req.params.id;

  eventModel.getById(data, function (results) {
    res.render("moderator/decline", { decline: results });
  });
});



router.post("/approve/:id", (req, res) => {
  var user = {
    data: req.params.id,
  };
  eventModel.update(user, function (status) {
    if (status) {
      eventModel.getAll(function (results) {
        // res.render('moderator/index', { EventList : results});
        res.redirect("/moderator");
      });
    } else {
      res.redirect(user.data);
    }
  });
});


module.exports = router;
