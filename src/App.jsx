import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase.js";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <div className="App" style={{ maxHeight: maxHeight + "px" }}>
        <div className="app__videos">
          {video.map((item) => {
            return (
              <Video
                likes={item.likes}
                messages={item.messages}
                saves={item.saves}
                name={item.name}
                description={item.description}
                music={item.music}
                url={item.url}
                urlPerfil={item.urlPerfil}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
