import React, { useState } from 'react';
import data from '../assets/data/data';
import BorderAllOutlinedIcon from '@material-ui/icons/BorderAllOutlined';
import '../styles/Photo.scss';
import AudioPlayer from 'react-h5-audio-player';
import {
  useHistory,
  useParams,

} from "react-router-dom";

import { PhotoSizeSelectActual } from '@material-ui/icons';


export default function Photo() {
  const [photosData, setPhotosData] = useState({data});
  
  let history = useHistory();
  let { id } = useParams();
  const photos = photosData.data[parseInt(id, 10)];


  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="backdrop-filter">
      <div className="photo-modal">
        
        <div className="wrapper-0"> 
          <div className="icon gallery close" onClick={back}> 
            <div class="arrow"></div>
          </div>
        </div>
        <div className="portrait-img"> 
          <img
              src={photos.imgUrl} 
              alt={photos.portrait} 
          />
        </div>
        <div className="content"> 
          <div className="wrapper-1">
            <div className="c-1">
              <div className="portrait-title"> 
                <h2> {photos.portrait}</h2>
                <span className="icon audio"> 
                  <AudioPlayer
                    className="audio-player"
                    autoPlay={false}
                    src={photos.audioUrl}
                    onPlay={e => console.log("onPlay")}
                  />
                </span>  
              </div>
            </div> 

            <div className="c-2"> 
              <p dangerouslySetInnerHTML={{ __html: photos.personalNote }} />
            </div>
          </div>

          <div className="wrapper-2">
            <h3 className="location-content">{photos.location}</h3>
            <h3 className=" date"> {photos.date} </h3>
          </div>
        </div> 
      </div>
    </div>
  );
};