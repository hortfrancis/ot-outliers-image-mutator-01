export default function Result() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute rounded-full bg-slate-600 flex items-center justify-center w-64 h-64 animate-pulse-scale">
        <div className={
          'flex flex-col items-center justify-center gap-1.5' + ' ' +
          'text-4xl font-medium' + ' ' +
          'text-white'
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
    </div>
  )
}
