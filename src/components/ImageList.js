import './ImageList.css';
import './ImageCard';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const images = props.images.map((image) => {
        //console.log("image is",image);
        return <ImageCard key={image.id} image={image}/>;
    })

    //console.log("image list is :", props.images);
    return <div className = "image-list">{images}</div>;
};

export default ImageList;