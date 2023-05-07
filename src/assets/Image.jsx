import React from 'react'

export const Image = ({src, ...rest}) => {

     src = src && src.includes('https://') 
                ? 
                src : 'https://api-bookingapp.vercel.app/uploads/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  )
}
