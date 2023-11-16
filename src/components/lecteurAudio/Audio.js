import React, { useState, useRef } from 'react';

const AudioPlayer = () => {
  const audioFileUrl = 'https://voca.ro/15Wdc2mJHKsf';
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioFileUrl));

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <h2>Lecture audio</h2>
      <button onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default AudioPlayer;
