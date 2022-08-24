import "./Icebreakers.css";
import { useState } from "react";
import Cyprus from "../images/Cyprus.png";
import Ecuador from "../images/Ecuador.png";
import Maldives from "../images/Maldives.png";
import Monaco from "../images/Monaco.png";
import NewZealand from "../images/New_Zealand.png";

const Icebreakers = () => {
  const [showFlagAnswer, setShowFlagAnswer] = useState(false);
  const [newFlag, setNewFlag] = useState(Math.floor(Math.random() * 5));
  const [showAnswer, setShowAnswer] = useState(false);
  // show answer is the state object that I am using to track if showing or hiding. 
  // setShowAnswer is the funciton to update the showAnswer state. 
  // It is set as false as by default we don't want the answer displayed.
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 6)
  );
  // randomNumber is the state object. SetRamdomNumber is the function to update the showAnswer state. 
  // By default it gives us a random number between 0+6 to use as our interger value for the brainteaser
  const [newThought, setnewThought] = useState(Math.floor(Math.random() * 15));
  const [newBonding, setnewBonding] = useState(Math.floor(Math.random() * 15));
  // const flag = ['Cyprus', 'Ecuador', 'Maldives', 'Monaco', 'NewZealand']
  const flag = [Cyprus, Ecuador, Maldives, Monaco, NewZealand];
  const flagAnswer = ["Cyprus", "Ecuador", "Maldives", "Monaco", "New Zealand"];
  const bondingq = [
    "What is your favorite work memory?",
    "Do you collect anything?",
    "Do you have any secret talents?",
    "What is your strategy to survive a horror movie?",
    "How would you describe your job to a bunch of kindergarteners?",
    "What is the best piece of advice you ever received?",
    "If you could not work in this industry, what other job would you pursue?",
    "What was the best project you have ever worked on?",
    "What is one item you cannot bear to throw away?",
    "What is your “I wish I had started doing this earlier in my life”?",
    "How do you prefer to receive criticism?",
    "What characteristic do you most admire in others?",
    "What is a concept that you disagree with, but respect?",
    "If you could work anywhere in the world, where would you choose?",
    "Which celebrity would you like to crash our next Teams meeting?",
  ];
  const thoughtday = [
    "The only part of your reflection you can lick is your tongue.",
    "Drinking water with a minty mouth is the cold version of spicy.",
    "It must suck to be an air conditioner repairman. You spend your day working in buildings that have no air conditioning. When it's fixed and finally cool, you leave.",
    "I have seen more of the surface of the Moon with my own eyes than I have of Earth.",
    "Watching a graduation ceremony is like sitting through a movie that's entirely end credits.",
    "The first person who inhaled helium must have been so relieved when the effects wore off.",
    "When medication says 'do not operate heavy machinery,' they're probably mainly referring to cars, but most peoples' mind always goes to a forklift.",
    "Imagine how rich you would've had to be 200 years ago to have music playing in the background while you cook dinner.",
    "Bob's Burgers would also be an appropriate title for SpongeBob SquarePants.",
    "When we're young, we sneak out of our houses to go to parties. When we're old, we sneak out of parties to go home.",
    "A different version of you exists in the minds of everyone who knows you.",
    "Accidentally liking someone's post while snooping through their profile is the digital equivalent of stepping on a twig while sneaking through the forest.",
    "If your identical twin got plastic surgery, it would be hard not to feel a little insulted.",
    "It kinda makes sense that the target audience for fidget spinners lost interest in them so quickly.",
    "Your belly button is just your old mouth.",
  ];
  const brainteaser = [
    "I left my campsite and hiked south for 3 miles. Then I turned east and hiked for 3 miles. I then turned north and hiked for 3 miles, at which time I came upon a bear inside my tent eating my food! What color was the bear?",
    "A woman shoots her husband. Then she holds him under water for over 5 minutes. Finally, she hangs him. But 5 minutes later they both go out together and enjoy a wonderful dinner together. How can this be?",
    "What is special about these words: job, polish, herb?",
    "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody. What am I?",
    "A man stands on one side of a river, his dog on the other. The man calls his dog, who immediately crosses the river without getting wet and without using a bridge or a boat. How did the dog do it?",
    "I cannot be bought, but I can be stolen with a glance. I am worthless to one, but priceless to two. What am I?",
  ];
  const answer = [
    "White, since the only place you can do that is the North Pole and polar bears are the only kind of bears that live there.",
    "The woman was a photographer. She shot a picture of her husband, developed it, and hung it up to dry.",
    "They are pronounced differently when the first letter is capitalized.",
    "Pencil lead",
    "The river was frozen",
    "Love",
  ];
  const getrandnumber = () => {
    setRandomNumber(Math.floor(Math.random() * 6));
    setShowAnswer(false);
    // this function is setting a new random number AND also resetting the answer to be false...
    // (this means it doesn't keep showing the answer when the new brainteaser is called)
  };
  const getNewThought = () => {
    setnewThought(Math.floor(Math.random() * 15));
  };
  const getNewBonding = () => {
    setnewBonding(Math.floor(Math.random() * 15));
  };
  const getNewFlag = () => {
    setNewFlag(Math.floor(Math.random() * 5));
    setShowFlagAnswer(false);
  };
  // I decided to make these functions here as it made more sense to me this way than calling it within the button tags

  return (
    <div className="iceBreaker">
      <h1 className="title">Let's break the ice...</h1>
      <div className="boxwrapper">
        <div className="container-wrapper bg-orange">
          <p className="bondingTitle">{`The bonding quesiton of the day is:`}</p>
          <p className="question">{bondingq[newBonding]}</p>
          <button className="nextBondingButton" onClick={getNewBonding}>
            Next Question
          </button>
        </div>
        <div className="container-wrapper bg-blue">
          <p className="thoughtTitle">{`The thought of the day is:`}</p>
          <p className="thought">{thoughtday[newThought]}</p>
          <button className="nextThoughtButton" onClick={getNewThought}>
            Next Thought
          </button>
        </div>

        <div className="container-wrapper bg-green">
          <div className="brainTeaserWrapper">
            <p className="brainteaserTitle">The brainteaser is...</p>
            <p className="brainteaser">{brainteaser[randomNumber]}</p>
{/* This will display a random brainteaser that is generated by the index number */}
            {showAnswer ? (
              <p className="brainAnswer">{`The answer is: ${answer[randomNumber]}`}</p>
            ) : null}
            {/* I used the terniary operator to check if show answer was true 
            and if it was then show answer, else, return nothing
            the random index number for the answer and the question all correlate which means the correct answer is displaying */}
          </div>
          <button
            className="brainteaserButton"
            onClick={() => setShowAnswer(!showAnswer)}
          >
          {/* Here I am calling the setshow answer function, changing it to true 
          providing that the show answer is currently false (hence the !) (toggling its state) */}
          
            {showAnswer ? `Hide Answer` : `Show Answer`}
            {/* created a turnary operator here to change the button from show to hide answer when the answewr was showing */}
          </button>


          <button className="nextBrainteaserButton" onClick={getrandnumber}>
            New Brainteaser
          </button>
        </div>
        <div className="container-wrapper bg-pink">
          <div className="flagWrapper">
            <p className="flagTitle">Name this flag...</p>
            <img src={flag[newFlag]} className="flagImg"></img>
            {/* We have some state called 'newFlag'. It is a number.
            Every time we click the new flag button it generates a new number on it.
            On the line above we are using the newFlag state as an index to get an image
            from our images array called flags */}
            {showFlagAnswer ? (
              <p className="flagAnswer">{`The answer is ${flagAnswer[newFlag]}`}</p>
            ) : null}
            {/* Turnary operator to show the correct answer to the flag. 
            The index numbers match for the flag and answer which is what makes it work */}
          </div>
          <button
            className="flagAnswerButton"
            onClick={() => setShowFlagAnswer(!showFlagAnswer)}
          >
            {showFlagAnswer ? "Hide Answer" : "Show Answer"}
          </button>

          <button className="nextFlagButton" onClick={getNewFlag}>
            Next Flag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Icebreakers;
