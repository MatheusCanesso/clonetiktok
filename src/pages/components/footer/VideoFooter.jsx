import React from "react";
import "./VideoFooter.css";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
      <h3>@{ name }</h3>
      <p>{ description }</p>
      <div className="videoFooter__music">
           <AudiotrackIcon className="videoFooter__icon"/>
           <div className="videoFooterMusic__text">
               <p>{ music }</p>
           </div>
      </div>
      </div>
      {/* <img 
        className="videoFooter__record" 
        alt="Vinil girando"
        src="./src/assets/vinil.png"
      
      /> */}
      <FontAwesomeIcon className="videoFooter__record" style={{color: "#f3d7c2",}} icon={faCompactDisc} size='2x'/>
    </div>
  );
}

export default VideoFooter;
