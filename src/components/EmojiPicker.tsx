import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    const [emojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState('');
    const [previousEmojiFromCurrentRender, queueRerenderWithNewPreviousEmoji] =
    useState('');
    const [storedEmojisFromCurrentRender, queueRerenderWithNewEmojis] =
    useState<string[]>([]);

    const handleStoreEmojis = () => {
      queueRerenderWithNewEmojis([
        ...storedEmojisFromCurrentRender,
        emojiFromCurrentRender,
      ]);
    };

    return (
        <>
          <h1>Emoji picker</h1>
          <h2> Current emoji: {emojiFromCurrentRender}</h2>
          <h2> Previous emoji: {previousEmojiFromCurrentRender}</h2>
          <h2> Your stored emojis: {storedEmojisFromCurrentRender.join(',')}</h2>
          <hr />
          <button onClick={() => {queueRerenderWithNewEmoji('🍳'); queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender); handleStoreEmojis()}}>🍳</button>
          <button onClick={() => {queueRerenderWithNewEmoji('🍽️'); queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender); handleStoreEmojis()}}>🍽️</button>
          <button onClick={() => {queueRerenderWithNewEmoji('⏰'); queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender); handleStoreEmojis()}}>⏰</button>
          <button onClick={() => {queueRerenderWithNewEmoji('😋'); queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender); handleStoreEmojis()}}>😋</button>
          <button onClick={() => {queueRerenderWithNewEmoji('🛌'); queueRerenderWithNewPreviousEmoji(emojiFromCurrentRender); handleStoreEmojis()}}>🛌</button>
        </>
    );
}