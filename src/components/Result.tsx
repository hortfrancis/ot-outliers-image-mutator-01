interface ResultProps {
  imageUrl: string;
}

export default function Result({
  imageUrl,
}: ResultProps) {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      {imageUrl ? (
        <div className='flex items-center jusitify-center absolute w-72 h-72 z-10'>
          <img
            src={imageUrl}
            alt="Mutated result"
            className={
              'absolute w-full h-full object-cover' + ' ' +
              'shadow-2xl rounded-md'
            }
          />
        </div>
      ) : (
        <div className={
          'flex items-center justify-center absolute w-64 h-64 z-10' + ' ' +
          'rounded-full bg-slate-600 animate-pulse-scale'
        }>
          <div className={
            'flex flex-col items-center justify-center gap-1.5' + ' ' +
            'text-4xl font-medium text-white'
          }>
            <span>
              Feed
            </span>
            <span>
              the
            </span>
            <span>
              image
            </span>
            <span>
              mutator
            </span>
          </div>
        </div>
      )}
    </div >
  )
}
