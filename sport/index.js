"use strict";

const Alexa = require("alexa-sdk");

const handlers = {
  LaunchRequest() {
    this.response.speak("Hello, what do you think is the world's most popular sport?").listen("Tell me what you think is the world's most popular sport.");
    this.emit(':responseReady');
  },

  MostPopularSportIntent() {
    const worldSport = this.event.request.intent.slots.sport.value;
    if (worldSport === 'soccer') {
      this.response.speak("Correct! Soccer is the world's most popular sport.");
    } else {
      this.response.speak(`You guessed that ${worldSport} is the most popular. Actually, soccer is the world's most popular sport`);
    }
    this.emit(':responseReady');
  },
}

exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
