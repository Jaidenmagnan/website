import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, typingDelay = 100, erasingDelay = 50, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        setDisplayText((prevText) => prevText + text[currentIndex.current]);
        currentIndex.current++;
        if (currentIndex.current === text.length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            currentIndex.current = 0;
            setDisplayText('');
          }, delay);
        }
      } else {
        setDisplayText((prevText) => prevText.slice(0, -1));
        if (displayText === '') {
          setIsTyping(true);
        }
      }
    }, isTyping ? typingDelay : erasingDelay);

    return () => clearInterval(interval);
  }, [isTyping, text, typingDelay, erasingDelay, delay]);

  return <div>{displayText}</div>;
};

export default Typewriter;
