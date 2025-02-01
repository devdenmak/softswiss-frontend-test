import React from 'react'

export type IImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src2x: string
}

const Img: React.FC<IImageProps> = ({ src, alt, src2x, className, ...props }) => {
  return (
    <img src={src} alt={alt} className={className} srcSet={`${src} 1x, ${src2x} 2x`} {...props} />
  )
}

export default Img
