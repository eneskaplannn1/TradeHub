// We're using the express framework and the mailgun-js wrapper
var express = require("express");
var Mailgun = require("mailgun-js");

// Initialize express
var app = express();

// Your API key, from Mailgun’s Control Panel
var api_key = "MAILGUN-API-KEY";

// Your domain, from the Mailgun Control Panel
var domain = "YOUR-DOMAIN.com";

// Your sending email address
var from_who = "your@email.com";

// Tell express to fetch files from the /js directory
app.use(express.static(__dirname + "/js"));

// We're using the Jade templating language because it's fast and neat
app.set("view engine", "jade");

// Do something when you're landing on the first page
app.get("/", function (req, res) {
  // Render the index.jade file - input forms for humans
  res.render("index", function (err, html) {
    if (err) {
      // Log any error to the console for debugging
      console.log(err);
    } else {
      // No error, so send the HTML to the browser
      res.send(html);
    }
  });
});

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.get("/submit/:mail", function (req, res) {
  // We pass the API key and domain to the wrapper, or it won't be able to identify + send emails
  var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  var data = {
    // Specify email data
    from: from_who,
    // The email to contact
    to: req.params.mail,
    // Subject and text data
    subject: "Hello from Mailgun",
    html:
      'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' +
      req.params.mail +
      '">Click here to add your email address to a mailing list</a>',
  };

  // Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    // If there is an error, render the error page
    if (err) {
      res.render("error", { error: err });
      console.log("Got an error: ", err);
    } else {
      // Here "submitted.jade" is the view file for this landing page
      // We pass the variable "email" from the URL parameter in an object rendered by Jade
      res.render("submitted", { email: req.params.mail });
      console.log(body);
    }
  });
});

app.get("/validate/:mail", function (req, res) {
  var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  var members = [
    {
      address: req.params.mail,
    },
  ];

  // For the sake of this tutorial, you need to create a mailing list on Mailgun.com/cp/lists and put its address below
  mailgun
    .lists("NAME@MAILINGLIST.COM")
    .members()
    .add({ members: members, subscribed: true }, function (err, body) {
      console.log(body);
      if (err) {
        res.send("Error - check console");
      } else {
        res.send("Added to mailing list");
      }
    });
});

app.get("/invoice/:mail", function (req, res) {
  // Which file to send? I made an empty invoice.txt file in the root directory
  // We require the path module here to find the full path to attach the file
  var path = require("path");
  var fp = path.join(__dirname, "invoice.txt");

  // Settings
  var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  var data = {
    from: from_who,
    to: req.params.mail,
    subject: "An invoice from your friendly hackers",
    text: "A fake invoice should be attached, it is just an empty text file after all",
    attachment: fp,
  };

  // Sending the email with attachment
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.render("error", { error: error });
    } else {
      res.send("Attachment is on its way");
      console.log("Attachment sent", fp);
    }
  });
});

app.listen(3030);
