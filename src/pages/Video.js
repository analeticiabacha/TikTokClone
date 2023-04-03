import React, { useRef, useState } from "react";
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./video.css";

function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    //enxergar estado que o video está
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    //apos o return apenas é conteudo visual
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Video;
