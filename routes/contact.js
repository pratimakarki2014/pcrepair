var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact'
    });
});

//send Email
router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
      service:'Gmail',
      auth: {
        user: 'pratima.karki.2014@gmail.com',
        pass: 'PratimaKarki2016'
      }
    });

    var mailOptions = {
        from: '"Pratima Karki ?" <pratima.karki.2014@gmail.com>',
        to: 'Apil.tamang@gmail.com',
        subject: 'Hello from PCRepair',
        text: 'You have a submission from... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
        html: '<p>You have a submission from...</p> <ul><li> Name: '+req.body.name+'</li><li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message Sent: '+ info.response);
        res.redirect('/');
    });
});

module.exports = router;