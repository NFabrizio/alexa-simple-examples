# alexa-simple-examples

This repo contains a few directories with code for creating Amazon Alexa skills.
The code in this repo only includes the Lambda functions required to handle
requests and send responses. In order to actually set these up as Alexa skills,
configuration within the Amazon Alexa dashboard is required.  

The [language](https://github.com/NFabrizio/alexa-simple-examples/tree/master/language)
directory is a simple lambda function that asks the user what they think the most
popular language in Codecademy is. It handles the user's response and tells them
whether or not they were correct by checking if they answered "Python". This skill
requires the configuration of a custom slot in the Amazon Alexa dashboard.

The [sport](https://github.com/NFabrizio/alexa-simple-examples/tree/master/sport)
directory is similar to the language skill, but asks about the world's most popular
sport rather than Codecademy language.
