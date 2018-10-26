var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

/****************************************
 * Controller Method #1: Simple Response
****************************************/
      //1       //2           
router.post('/one', function(req, res){
  //3
  res.send("Test 1 went through!") 
});
// test two
router.post('/two', function (req, res) {
  let testData = "Test data for endpoint two";

  TestModel
    .create({

      testdata: testData
    })
  res.send("Test three went through!")
  console.log("Test three went through!")
    
});
//test three
router.post('/three', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
  res.send("Test three went through!")
  console.log("Test three went through!")
});
//test four
router.post('/four', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message() {
        res.send("Test 4 went through!");
      }
    );
});
// test 5
router.post('/five', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
  .create({
    testdata: testData
  })
    .then(
      function message(data) {
        res.send(data);
      }
    );
});
// test 6

router.post('/six', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        res.json({
          testdata: testData
        });
      }
    );
});

router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });
      },
      function createError(err) {
        res.send(500, err.message)
      }
    );
});
module.exports = router;