import { ImgHTMLAttributes } from 'react';
import logoSrc from '../assets/images/hajonsoft-logo-transparent.png';

export default function HajonsoftLogo({
  className = 'h-10 w-auto',
  alt = 'Hajj On Soft',
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={className}
      draggable={false}
      {...props}
    />
  );
}
