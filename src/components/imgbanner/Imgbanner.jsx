import React, { Component }  from 'react';
import Image from 'next/image'

import img from '../../../public/assets/images/cinema.png';

const ImgBanner = () => {
 return (
   <>
    <Image 
        src={img} 
        alt="Movies"
        width={384}
        height={270} 
    />
   </>
 )
}

export default ImgBanner