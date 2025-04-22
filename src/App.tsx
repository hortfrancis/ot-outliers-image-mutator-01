import Image from './components/Image';
import Result from './components/Result';
import gothsWithFishImage from './assets/images/source_images/goths_with_fish.webp';
import greenCleanImage from './assets/images/source_images/green_clean.webp';
import heuresMoonImage from './assets/images/source_images/heures_moon.png';
import redCubeImage from './assets/images/source_images/red_cube.png';

const baseImages = {
  topLeft: gothsWithFishImage,
  topRight: greenCleanImage,
  bottomLeft: heuresMoonImage,
  bottomRight: redCubeImage,
}

function App() {
  return (
    <div
      className={
        'grid grid-cols-3 grid-rows-3' + ' ' +
        'min-h-[100dvh]'
      }
    >
      <Image url={baseImages.topLeft} />
      <div>2</div>
      <Image url={baseImages.topRight} />
      <div>4</div>
      <Result />
      <div>6</div>
      <Image url={baseImages.bottomLeft} />
      <div>8</div>
      <Image url={baseImages.bottomRight} />
    </div>
  )
}

export default App;
