import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    const [emojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState('');
    const [previousEmojiFromCurrentRender, queueRerenderWithNewpreviousEmoji] =
    useState('');

    return (
        <>
          <h1>Emoji picker</h1>
          {/* <h2>Previous emoji: {previousEmojiFromCurrentRender} </h2>  */}
          <h2> Current emoji: {emojiFromCurrentRender}</h2>
          <h2> Previous emoji: {previousEmojiFromCurrentRender}</h2>
          <hr />
          <button onClick={() => {queueRerenderWithNewEmoji('🍳'); queueRerenderWithNewpreviousEmoji(emojiFromCurrentRender)}}>🍳</button>
          <button onClick={() => {queueRerenderWithNewEmoji('🍽️'); queueRerenderWithNewpreviousEmoji(emojiFromCurrentRender)}}>🍽️</button>
          <button onClick={() => {queueRerenderWithNewEmoji('⏰'); queueRerenderWithNewpreviousEmoji(emojiFromCurrentRender)}}>⏰</button>
          <button onClick={() => {queueRerenderWithNewEmoji('😋'); queueRerenderWithNewpreviousEmoji(emojiFromCurrentRender)}}>😋</button>
          <button onClick={() => {queueRerenderWithNewEmoji('🛌'); queueRerenderWithNewpreviousEmoji(emojiFromCurrentRender)}}>🛌</button>
        </>
    );
}