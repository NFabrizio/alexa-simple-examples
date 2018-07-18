'use strict';

const Alexa = require('alexa-sdk');

const capitalsDictionary = [
  {
    "state": "Alabama",
    "capital": "Montgomery",
    "lat": "32.361538",
    "long": "-86.279118"
  },
  {
    "state": "Alaska",
    "capital": "Juneau",
    "lat": "58.301935",
    "long": "-134.419740"
  },
  {
    "state": "Arizona",
    "capital": "Phoenix",
    "lat": "33.448457",
    "long": "-112.073844"
  },
  {
    "state": "Arkansas",
    "capital": "Little Rock",
    "lat": "34.736009",
    "long": "-92.331122"
  },
  {
    "state": "California",
    "capital": "Sacramento",
    "lat": "38.555605",
    "long": "-121.468926"
  },
  {
    "state": "Colorado",
    "capital": "Denver",
    "lat": "39.7391667",
    "long": "-104.984167"
  },
  {
    "state": "Connecticut",
    "capital": "Hartford",
    "lat": "41.767",
    "long": "-72.677"
  },
  {
    "state": "Delaware",
    "capital": "Dover",
    "lat": "39.161921",
    "long": "-75.526755"
  },
  {
    "state": "Florida",
    "capital": "Tallahassee",
    "lat": "30.4518",
    "long": "-84.27277"
  },
  {
    "state": "Georgia",
    "capital": "Atlanta",
    "lat": "33.76",
    "long": "-84.39"
  },
  {
    "state": "Hawaii",
    "capital": "Honolulu",
    "lat": "21.30895",
    "long": "-157.826182"
  },
  {
    "state": "Idaho",
    "capital": "Boise",
    "lat": "43.613739",
    "long": "-116.237651"
  },
  {
    "state": "Illinois",
    "capital": "Springfield",
    "lat": "39.783250",
    "long": "-89.650373"
  },
  {
    "state": "Indiana",
    "capital": "Indianapolis",
    "lat": "39.790942",
    "long": "-86.147685"
  },
  {
    "state": "Iowa",
    "capital": "Des Moines",
    "lat": "41.590939",
    "long": "-93.620866"
  },
  {
    "state": "Kansas",
    "capital": "Topeka",
    "lat": "39.04",
    "long": "-95.69"
  },
  {
    "state": "Kentucky",
    "capital": "Frankfort",
    "lat": "38.197274",
    "long": "-84.86311"
  },
  {
    "state": "Louisiana",
    "capital": "Baton Rouge",
    "lat": "30.45809",
    "long": "-91.140229"
  },
  {
    "state": "Maine",
    "capital": "Augusta",
    "lat": "44.323535",
    "long": "-69.765261"
  },
  {
    "state": "Maryland",
    "capital": "Annapolis",
    "lat": "38.972945",
    "long": "-76.501157"
  },
  {
    "state": "Massachusetts",
    "capital": "Boston",
    "lat": "42.2352",
    "long": "-71.0275"
  },
  {
    "state": "Michigan",
    "capital": "Lansing",
    "lat": "42.7335",
    "long": "-84.5467"
  },
  {
    "state": "Minnesota",
    "capital": "Saint Paul",
    "lat": "44.95",
    "long": "-93.094"
  },
  {
    "state": "Mississippi",
    "capital": "Jackson",
    "lat": "32.320",
    "long": "-90.207"
  },
  {
    "state": "Missouri",
    "capital": "Jefferson City",
    "lat": "38.572954",
    "long": "-92.189283"
  },
  {
    "state": "Montana",
    "capital": "Helana",
    "lat": "46.595805",
    "long": "-112.027031"
  },
  {
    "state": "Nebraska",
    "capital": "Lincoln",
    "lat": "40.809868",
    "long": "-96.675345"
  },
  {
    "state": "Nevada",
    "capital": "Carson City",
    "lat": "39.160949",
    "long": "-119.753877"
  },
  {
    "state": "New Hampshire",
    "capital": "Concord",
    "lat": "43.220093",
    "long": "-71.549127"
  },
  {
    "state": "New Jersey",
    "capital": "Trenton",
    "lat": "40.221741",
    "long": "-74.756138"
  },
  {
    "state": "New Mexico",
    "capital": "Santa Fe",
    "lat": "35.667231",
    "long": "-105.964575"
  },
  {
    "state": "New York",
    "capital": "Albany",
    "lat": "42.659829",
    "long": "-73.781339"
  },
  {
    "state": "North Carolina",
    "capital": "Raleigh",
    "lat": "35.771",
    "long": "-78.638"
  },
  {
    "state": "North Dakota",
    "capital": "Bismarck",
    "lat": "48.813343",
    "long": "-100.779004"
  },
  {
    "state": "Ohio",
    "capital": "Columbus",
    "lat": "39.962245",
    "long": "-83.000647"
  },
  {
    "state": "Oklahoma",
    "capital": "Oklahoma City",
    "lat": "35.482309",
    "long": "-97.534994"
  },
  {
    "state": "Oregon",
    "capital": "Salem",
    "lat": "44.931109",
    "long": "-123.029159"
  },
  {
    "state": "Pennsylvania",
    "capital": "Harrisburg",
    "lat": "40.269789",
    "long": "-76.875613"
  },
  {
    "state": "Rhode Island",
    "capital": "Providence",
    "lat": "41.82355",
    "long": "-71.422132"
  },
  {
    "state": "South Carolina",
    "capital": "Columbia",
    "lat": "34.000",
    "long": "-81.035"
  },
  {
    "state": "South Dakota",
    "capital": "Pierre",
    "lat": "44.367966",
    "long": "-100.336378"
  },
  {
    "state": "Tennessee",
    "capital": "Nashville",
    "lat": "36.165",
    "long": "-86.784"
  },
  {
    "state": "Texas",
    "capital": "Austin",
    "lat": "30.266667",
    "long": "-97.75"
  },
  {
    "state": "Utah",
    "capital": "Salt Lake City",
    "lat": "40.7547",
    "long": "-111.892622"
  },
  {
    "state": "Vermont",
    "capital": "Montpelier",
    "lat": "44.26639",
    "long": "-72.57194"
  },
  {
    "state": "Virginia",
    "capital": "Richmond",
    "lat": "37.54",
    "long": "-77.46"
  },
  {
    "state": "Washington",
    "capital": "Olympia",
    "lat": "47.042418",
    "long": "-122.893077"
  },
  {
    "state": "West Virginia",
    "capital": "Charleston",
    "lat": "38.349497",
    "long": "-81.633294"
  },
  {
    "state": "Wisconsin",
    "capital": "Madison",
    "lat": "43.074722",
    "long": "-89.384444"
  },
  {
    "state": "Wyoming",
    "capital": "Cheyenne",
    "lat": "41.145548",
    "long": "-104.802042"
  }
];

const DECK_LENGTH = capitalsDictionary.length;

const handlers = {
  // Open State Capitals Quiz
  'LaunchRequest': function() {
    if (Object.keys(this.attributes).length === 0) {
      this.attributes.flashcards.numberCorrect = 0;
      this.attributes.flashcards.currentFlashcardIndex = 0;

      this.response.speak(AskQuestion(this.attributes)).listen(AskQuestion(this.attributes));
    } else {
      const numberCorrect = this.attributes.flashcards.numberCorrect;
      const currentFlashcardIndex = this.attributes.flashcards.currentFlashcardIndex;

      this.response.speak(`Welcome back to the State Capitals quiz. You are on
        question ${currentFlashcardIndex} and have answered ${numberCorrect} correctly. ${AskQuestion(this.attributes)}`);
    }
    this.emit(':responseReady');
  },

  // User gives an answer
  'AnswerIntent': function() {
    const userAnswer = this.event.request.intent.slots.answer.value;
    const currentFlashcardIndex = this.attributes.flashcards.currentFlashcardIndex;
    const currentIndex = capitalsDictionary[currentFlashcardIndex];
    const correctAnswer = currentIndex.capital;
    const numberCorrect = this.attributes.flashcards.numberCorrect;

    if (userAnswer === correctAnswer){
      this.attributes.flashcards.numberCorrect++;
      this.attributes.flashcards.currentFlashcardIndex++;
      this.response
        .speak(`Nice job! The correct answer is ${correctAnswer}. You
          have gotten ${numberCorrect} out of ${DECK_LENGTH} questions correct. Here is your next question. ${AskQuestion(this.attributes)}`)
        .listen(AskQuestion(this.attributes));
    } else {
      this.attributes.flashcards.currentFlashcardIndex++;
      this.response
        .speak(`Sorry, the correct answer is ${correctAnswer}. You
          have gotten ${numberCorrect} out of ${DECK_LENGTH} questions correct. Here is your next question.
        ${AskQuestion(this.attributes)}`)
        .listen(AskQuestion(this.attributes));
    }
    this.emit(':responseReady');
  },


  // Stop
  'AMAZON.StopIntent': function() {
    this.response.speak('Ok, let\'s play again soon.');
    this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
    this.response.speak('Ok, let\'s play again soon.');
    this.emit(':responseReady');
  },

  // Save state
  'SessionEndedRequest': function() {
    console.log('session ended!');
    this.emit(':saveState', true);
  }

};

// Test my {language} knowledge
const AskQuestion = function(attributes) {
  const currentFlashcardIndex = attributes.flashcards.currentFlashcardIndex;
  if (currentFlashcardIndex >= DECK_LENGTH) {
    return 'No questions remaining.';
  } else {
    const currentState = capitalsDictionary[currentFlashcardIndex].state;
    return `What is the capital of ${currentState}?`;
  }

};

  exports.handler = function(event, context, callback){
    const alexa = Alexa.handler(event, context, callback);

    alexa.dynamoDBTableName = 'StateCapitalFlashcards';
    alexa.registerHandlers(handlers);
    alexa.execute();
  };
