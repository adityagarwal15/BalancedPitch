import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const songs = [
    {
      id: 1,
      title: "Dreamland",
      artist: "By Balanced Pitch",
      diskArt: "/songs/dreamland.png",
      mp3: "/songs/dreamland.mp3",
    },
    {
      id: 2,
      title: "Gameplay",
      artist: "By Balanced Pitch",
      diskArt: "/songs/gameplay.png",
      mp3: "/songs/gameplay.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const audioRef = useRef(null);
  const diskRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsFlipping(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleFlip = (direction) => {
    if (isFlipping) return;
    setIsFlipping(true);

    const nextIndex =
      direction === "next"
        ? currentSongIndex === songs.length - 1
          ? 0
          : currentSongIndex + 1
        : currentSongIndex === 0
        ? songs.length - 1
        : currentSongIndex - 1;

    const currentRotation = gsap.getProperty(diskRef.current, "rotateY");
    gsap.to(diskRef.current, {
      duration: 1,
      rotateY: currentRotation + 180,
      ease: "power1.inOut",
      onComplete: () => {
        setCurrentSongIndex(nextIndex);
        setIsFlipping(false);
      },
    });
  };

  const handlePrevious = () => handleFlip("prev");
  const handleNext = () => handleFlip("next");
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="player-container">
      <audio ref={audioRef} onEnded={handleNext}>
        <source src={songs[currentSongIndex].mp3} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="vinyl-container">
        <div className="disk-wrapper" ref={diskRef}>
          <div className="disk-side front">
            <img
              src={songs[0].diskArt}
              alt={`Vinyl for ${songs[0].title}`}
              className={isPlaying ? "spinning" : ""}
            />
          </div>
          <div className="disk-side back">
            <img
              src={songs[1].diskArt}
              alt={`Vinyl for ${songs[1].title}`}
              className={isPlaying ? "spinning" : ""}
            />
          </div>
        </div>
      </div>

      <div className="song-info">
        <h2>{songs[currentSongIndex].title}</h2>
        <p>{songs[currentSongIndex].artist}</p>
      </div>

      <div className="controls">
        <button
          onClick={handlePrevious}
          className="control-button"
          aria-label="Previous track"
          disabled={isFlipping}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 20L9 12l10-8v16z" />
            <line x1="5" y1="19" x2="5" y2="5" />
          </svg>
        </button>

        <button
          onClick={togglePlay}
          className="play-button"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        <button
          onClick={handleNext}
          className="control-button"
          aria-label="Next track"
          disabled={isFlipping}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 4l10 8-10 8V4z" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
