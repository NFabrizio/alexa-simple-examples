"use strict";

const Alexa = require("alexa-sdk");

const handlers = {
  LaunchRequest() {
    this.response.speak("Hello, Welcome to Codecademy. What do you think is Codecademy's most popular language?").listen("Tell me what you think is Codecademy's most popular language.");
    this.emit(':responseReady');
  },

  LanguageIntent() {
    const myLanguage = this.event.request.intent.slots.language.value;
    if (myLanguage == "python") {
        this.response.speak("Correct! Python is the most popular language.");
    }
    else {
        this.response.speak(`You guessed that ${myLanguage} is the most popular. Actually, Python is our most popular language`);
    }
    this.emit(':responseReady');
  },
}

exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
