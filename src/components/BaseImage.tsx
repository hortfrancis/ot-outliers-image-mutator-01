interface ImageProps {
  url: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function Image({
  url,
  position,
}: ImageProps) {

  const positionClasses = {
    'top-left': 'rounded-br-xl rounded-tl-none border-t-0 border-l-0',
    'top-right': 'rounded-bl-xl rounded-tr-none border-t-0 border-r-0',
    'bottom-left': 'rounded-tr-xl rounded-bl-none border-b-0 border-l-0',
    'bottom-right': 'rounded-tl-xl rounded-br-none border-b-0 border-r-0',
  };

  return (
    <div className="relative" >
      <img
        src={url}
        alt="Base image"
        className={
          'w-full h-full object-cover border-black border-4' + ' ' +
          positionClasses[position]
        } />
    </div >
  )
}
