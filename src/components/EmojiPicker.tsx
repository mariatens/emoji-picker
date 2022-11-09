import { useState } from "react";

interface Emoji {
  key: string
}
const emojis: Emoji[] = []

function EmojiStore(props: Emoji){
  return(
    <>
     <li>{props.key}</li>
    </>
  )
}
// in every on click I want to update an array

export default function EmojiPicker(): JSX.Element {
    const [emojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState('');
    const [previousEmojiFromCurrentRender, queueRerenderWithNewPreviousEmoji] =
    useState('');

    const handleEggEmoji = () => {
      queueRerenderWithNewEmoji('🍳'); 
      emojis.push({key: '🍳'}); 
      queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender)
    }
    const handlePlateEmoji = () => {
      queueRerenderWithNewEmoji('🍽️'); 
      emojis.push({key: '🍽️'});
      queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender);
    }
    const handleClockEmoji = () =>{
       queueRerenderWithNewEmoji('⏰');
       emojis.push({key: '⏰'});
       queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender);
    }
    const handleTongueEmoji = () =>{
      queueRerenderWithNewEmoji('😋'); 
      emojis.push({key: '😋'}); 
      queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender)
    }
    const handleBedEmoji = () =>{
      queueRerenderWithNewEmoji('🛌'); 
      emojis.push({key: '🛌'});
       queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender)
    }

    return (
        <>
          <h1>Emoji picker</h1>
          <h2> Current emoji: {emojiFromCurrentRender}</h2>
          <h2> Previous emoji: {previousEmojiFromCurrentRender}</h2>
          <h2> Your stored emojis: {emojis.map(EmojiStore)}</h2> 
          <hr /> 
          <button onClick={handleEggEmoji}>🍳</button>
          <button onClick={handlePlateEmoji}>🍽️</button>
          <button onClick={handleClockEmoji}>⏰</button>
          <button onClick={handleTongueEmoji}>😋</button>
          <button onClick={handleBedEmoji}>🛌</button>
        </>
    );
}