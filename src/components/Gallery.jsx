import React, { useEffect, useState } from 'react';
import '../styles/Gallery.scss';
import data from '../assets/data/data';

// components
import Photo from './Photo'; 

// libraries
import ReactImageAppear from 'react-image-appear';
import {Link, useLocation} from 'react-router-dom';
import { RestaurantRounded } from '@material-ui/icons';


export default function Gallery () {
  let location = useLocation();
  console.log("tryan see some change",location)
  const [photosData, setPhotosData] = useState({data});


  const photos = photosData.data;
  let photoArr = [];
  if (photos) {
  photos.map( (photo, id) => {
    photoArr.push(
        <div 
          key={id} 
          className={photo.className} 
          // onClick={() => {this.handlePhoto(photo)}}
          >
        <Link 
          to={{
            pathname: `/img/${id}`,
            state: { background: location }
          }}
        >
        <ReactImageAppear 
          alt={photo.portrait}
          src={photo.imgUrl}
          animation="fadeIn"
          animationDuration="1s"
          showLoader={false}
          />
        </Link>
        </div>

    )
  });
  }
//   function renderPhotos() {
//     photosData.data.map((photo, id) => {
//       console.log(photo.portrait) 
//       return (
//       <h3 key={id}> {photo.portrait } works! </h3>
//       );
//     })
//  }

  return(
    <div className="gallery-parent-container">
      {photoArr}
    </div>
  )
}

