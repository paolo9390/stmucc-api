
var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AVBH0v7D6VeoqVyK8OqXGuXuADEYNQapqDd8CGpwGLGMTa6eYimFZYomXzrqiZ4-T5iWv7Y5YB-p9j-v',
    'client_secret': 'EAcKiNrXzPDOHGu_3rslWqjZ31oETYb0NkcjfiPAGOpnH9-VyCffsHydpHuO3TCinzvVp3rNshsO0hpR'
  });

// Create endpoint for /paypal/pay
exports.pay = function (req, res) {
    console.log("TRYING TO GET FROM GUI REQUEST"+ req.toString())
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:8080/api/paypal/success",
            "cancel_url": "http://localhost:8080/api/paypal/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Donation",
                    "sku": "001",
                    "price": "10.00",
                    "currency": "GBP",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "GBP",
                "total": "10.00"
            },
            "description": "Donation."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);

            // here rather than redirect the user we can send back the payment href link to the gui and redirect him from there
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url'){
                    res.send({"redirectUrl": payment.links[i].href});
                    // res.redirect(payment.links[i].href);
                }
            }
        }
    });
};


// Create endpoint for /paypal/success
exports.getSuccess = function (req, res) {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    
    const execute_payment_json = {
        "payer_id": payerId
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment){
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.redirect('http://localhost:4200/support/success');
        }
    })
};


// Create endpoint for /paypal/cancel
exports.getCancel = function (req, res) {
    res.send('Cancel');
}