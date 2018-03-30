var express = require('express');
var router = express.Router();

var mockData = {
  banner: [
    "",
    ""
  ],
  always: {
    name: "PRICH休闲外套",
    nums: 180
  },
  ju_owns: [],
  others: [],
  order_pindan: {
    time: "02:49:00",
    imgs: "",
    nums: "7",
    old_price: "200",
    new_price: "160",
    total: 90,
    now_nums: 76,
    list: []
  },

  all: []
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
