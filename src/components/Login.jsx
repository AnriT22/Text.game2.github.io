import React, { useState } from "react";
import Clock from "./Clock"; // Import the Clock component


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [randomStory, setRandomStory] = useState("");

  const funnyStories = [
    "You must be the change you wish to see in the world.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Believe you can and you're halfway there.",
    "Life is what happens when you're busy making other plans.",
    "The only way to do great work is to love what you do.",
    "The mind is everything. What you think you become.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "To find yourself, think for yourself.",
    "The only thing necessary for the triumph of evil is for good men to do nothing.",
    "The only real mistake is the one from which we learn nothing.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Life is really simple, but we insist on making it complicated.",
    "The purpose of our lives is to be happy.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Be yourself; everyone else is already taken.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Your time is limited, don't waste it living someone else's life.",
    "The journey of a thousand miles begins with one step.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "The only thing worse than being blind is having sight but no vision.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "It's not the load that breaks you, it's the way you carry it.",
  "Life is really simple, but we insist on making it complicated.",
  "The purpose of our lives is to be happy.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Be yourself; everyone else is already taken.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The best way to predict the future is to create it.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "Your time is limited, don't waste it living someone else's life.",
  "The journey of a thousand miles begins with one step.",
  "Our greatest glory is not in never falling, but in rising every time we fall.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "The only thing worse than being blind is having sight but no vision.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "The only thing you can't control is the outcome.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "In the middle of every difficulty lies opportunity.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "The only place where success comes before work is in the dictionary.",
  "You can't cross the sea merely by standing and staring at the water.",
  "The best revenge is massive success.",
  "The way to get started is to quit talking and begin doing.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Dream big and dare to fail.",
  "The secret of getting ahead is getting started.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "It always seems impossible until it is done.",
  "The only person you are destined to become is the person you decide to be.",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
  "Your time is now. Start where you stand and work with whatever tools you may have at your command.",
  "Don't count the days, make the days count.",
  "Success is not just about making money. It's about making a difference.",
  "Opportunities don't happen. You create them.",
  "I find that the harder I work, the more luck I seem to have.",
  "The future depends on what you do today.",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  "The only thing worse than being blind is having sight but no vision.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    
  ];

  const getRandomStory = () => {
    const randomIndex = Math.floor(Math.random() * funnyStories.length);
    return funnyStories[randomIndex];
  };

  const handleLogin = () => {
    // Simulate a successful login
    setIsLoggedIn(true);
    // Get a random funny story
    const story = getRandomStory();
    setRandomStory(story);
  };

  const handleBack = () => {
    // Simulate going back to the login page
    setIsLoggedIn(false);
    // Clear the random story
    setRandomStory("");
  };

  const handleRefresh = () => {
    // Generate a new random story and update the state
    const newStory = getRandomStory();
    setRandomStory(newStory);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button
          style={{
            backgroundColor: "#4caf50", // Green background
            color: "white", // White text color
            border: "none", // Remove border
            padding: "10px 20px", // Padding
            cursor: "pointer", // Add cursor on hover
            borderRadius: "5px", // Rounded corners
            marginRight: "10px", // Margin between buttons
            fontSize: "18px", // Larger font size
            transition: "background-color 0.3s, color 0.3s", // Add transition effect
            animation: "colorChange 3s infinite alternate", // Add color animation
          }}
          onClick={handleLogin}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "red"; // Change background color on mouse enter
            e.target.style.color = "white"; // Change text color on mouse enter
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4caf50"; // Restore original background color on mouse leave
            e.target.style.color = "white"; // Restore original text color on mouse leave
          }}
        >
          Start Now
        </button>
      ) : (
        <div>
          <button
            style={{
              backgroundColor: "#008CBA", // Blue background for back button
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              marginRight: "10px",
              fontSize: "18px", // Larger font size
              transition: "background-color 0.3s, color 0.3s", // Add transition effect
            }}
            onClick={handleBack}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "red"; // Change background color on mouse enter
              e.target.style.color = "white"; // Change text color on mouse enter
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#008CBA"; // Restore original background color on mouse leave
              e.target.style.color = "white"; // Restore original text color on mouse leave
            }}
          >
            Back
          </button>
          <button
            style={{
              backgroundColor: "#008CBA", // Blue background for refresh button
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "18px", // Larger font size
              transition: "background-color 0.3s, color 0.3s", // Add transition effect
            }}
            onClick={handleRefresh}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "red"; // Change background color on mouse enter
              e.target.style.color = "white"; // Change text color on mouse enter
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#008CBA"; // Restore original background color on mouse leave
              e.target.style.color = "white"; // Restore original text color on mouse leave
            }}
          >
            Refresh
          </button>
          <p
            className="story-text" // Add the className here
          >
            {randomStory}
          </p>
          <div style={{ marginTop: "20px" }}>
            <Clock /> {/* Include the Clock component here */}
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes colorChange {
            0% {
              background-color: #4caf50;
              color: white;
            }
            50% {
              background-color: red;
              color: white;
            }
            100% {
              background-color: #4caf50;
              color: white;
            }
          }

          .story-text {
            font-size: 30px; /* 2x bigger font size */
          }
        `}
      </style>
    </div>
  );
}

export default Login;