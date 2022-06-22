import React from 'react';
import '../styles/Photo.scss';

// libraries
import ReactImageAppear from 'react-image-appear';
import AudioPlayer from 'react-h5-audio-player';
import BorderAllOutlinedIcon from '@material-ui/icons/BorderAllOutlined';


import midrene_with_roses_audio from '../../audios/Midrene_with_roses_Brooklyn_December_2017.m4a';


function Midrene() {
  return(
    // <div className="c1">
    //   <ReactImageAppear 
    //   className="artist-img"
    //   src="https://res.cloudinary.com/chilesonsal/image/upload/v1603510256/portraits/Midrene_with_roses_Brooklyn_December_2017_xdbvyd.png"
    //   animation="fadeIn"
    //   animationDuration="1s"
    //   showLoader={false}
    //   />
    // </div>

    <div className="photo-container">
      <div className="wrapper-0"> 
        <div className="icon gallery"> 
          <BorderAllOutlinedIcon 
            onClick={this.handleGalleryIcon}
            style={{fontSize:"2em"}} 
          />
        </div>
      </div>

      <ReactImageAppear 
       className="artist-img"
       src="https://res.cloudinary.com/chilesonsal/image/upload/v1603510256/portraits/Midrene_with_roses_Brooklyn_December_2017_xdbvyd.png"
       animation="fadeIn"
       animationDuration="1s"
       showLoader={false}
       />

      <div className="content"> 
      <div className="wrapper-1">
        <div className="c-1">
          <h1 className="portrait-title"> 
            Midrene with roses  
            <span className="icon audio"> 
              <AudioPlayer
                className="audio-player"
                autoPlay={false}
                src={midrene_with_roses_audio}
                onPlay={e => console.log("onPlay")} />
            </span>  
          </h1>
        </div> 

        <div className="c-2"> 
          <p>
          The person in this portrait is off her game and has been caught slipping. The dressing room door where her vulnerability and femininity hides, is cracked open. A stolen glance of her wide hips, soft expression, and un-lotioned hands. She is caught off guard as she is getting ready to walk out and close that door shut behind her. As she prepares to take her post of guarding the entrance with timberlands, baseball caps, and Big Spoon only energy. All those who desire access are not on the list. She is unaware that the post is vacant and her door locks have been picked.
          </p>
        </div>
      </div>

      <div className="wrapper-2">
        <h3 className="location-content">Brooklyn, New York</h3>
        <h3 className=" date">December, 2017</h3>
      </div>
    </div> 
  </div> 
  )
};

export default Midrene;
