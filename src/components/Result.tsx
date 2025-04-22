import { HTMLAttributes } from 'react';

interface ResultProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
}

export default function Result({
  imageUrl,
  ...props
}: ResultProps) {
  return (
    <div {...props}
      className="flex items-center justify-center h-full w-full relative">
      {imageUrl ? (
        <div className='flex items-center jusitify-center absolute w-72 h-72 z-10'>
          <img
            src={imageUrl}
            alt="Mutated result"
            className={
              'absolute w-full h-full object-cover' + ' ' +
              'border-2 border-amber-500 shadow-2xl rounded-md'
            }
          />
        </div>
      ) : (
        <div className={
          'flex items-center justify-center absolute w-64 h-64 z-10' + ' ' +
          'rounded-full bg-black animate-pulse-scale'
        }>
          <div className={
            'flex flex-col items-center justify-center gap-1.5 mb-4' + ' ' +
            'text-4xl font-medium text-white'
          }>
            <span>Feed</span>
            <span className='text-2xl font-normal my-[-4px]'>the</span>
            <span>image</span>
            <span className='font-black'>mutator</span>
          </div>
        </div>
      )}
    </div >
  )
}
