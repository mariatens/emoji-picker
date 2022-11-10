import { useState } from "react";

interface Emoji {
  key: string
}
const emojis: Emoji[] = []

// in every on click I want to update an array

export default function EmojiPicker(): JSX.Element {
    const [emoji, setEmoji] = useState('');

    const handleEggEmoji = () => {
      setEmoji('🍳'); 
      emojis.push({key: '🍳'}); 
    }
    const handlePlateEmoji = () => {
      setEmoji('🍽️'); 
      emojis.push({key: '🍽️'});
    }
    const handleClockEmoji = () =>{
       setEmoji('⏰');
       emojis.push({key: '⏰'});
    }
    const handleTongueEmoji = () =>{
      setEmoji('😋'); 
      emojis.push({key: '😋'}); 
    }
    const handleBedEmoji = () =>{
      setEmoji('🛌'); 
      emojis.push({key: '🛌'});
    }

    return (
        <>
          <h1>Emoji picker</h1>
          <h2> Current emoji: {emoji} </h2>
          <h2> Previous emoji: {emojis.slice(-2,-1).map((emoji)=>
          <li key = {emoji.key}>
            {emoji.key}
          </li>
          )}
          </h2>
          <h2> Your stored emojis: {emojis.slice(-5).map((emoji)=>
          <li key = {emoji.key}>
            {emoji.key}
          </li>
          )}
          </h2> 
          <hr /> 
          <button onClick={handleEggEmoji}>🍳</button>
          <button onClick={handlePlateEmoji}>🍽️</button>
          <button onClick={handleClockEmoji}>⏰</button>
          <button onClick={handleTongueEmoji}>😋</button>
          <button onClick={handleBedEmoji}>🛌</button>
        </>
    );
}