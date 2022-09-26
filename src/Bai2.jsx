import { useState, useEffect } from 'react';
import './App.css';
function Bai2() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const changeHandle = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);  
  }, [text]);
  return (
    <div className='container'>
        <textarea
          value={text}
          onChange={changeHandle}
        ></textarea>
          <p>Word(s): {wordCount}</p>
        
      
    </div>
  );
}

export default Bai2;