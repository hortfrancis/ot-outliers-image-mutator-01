interface ImageProps {
  url: string;
}

export default function Image({
  url,
}: ImageProps) {

  return (
    <div className="relative">
      <img
        src={url}
        alt="Image"
        className="object-cover w-full h-full"
        style={{ aspectRatio: '1 / 1' }}
      />
    </div>
  )
}
