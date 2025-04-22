import { useState, useEffect, useCallback } from 'react';
import Image from './components/Image';
import Button from './components/Button';
import Result from './components/Result';

// Base images
import gothsWithFishImage from './assets/images/source_images/goths_with_fish.webp';
import greenCleanImage from './assets/images/source_images/green_clean.webp';
import heuresMoonImage from './assets/images/source_images/heures_moon.png';
import redCubeImage from './assets/images/source_images/red_cube.png';

// Blended images: two sources
import gothsAndCubeBlend from './assets/images/blends/from_two_sources/goths_cube_blend.webp';
import gothsAndHeuresBlend from './assets/images/blends/from_two_sources/goths_heures_blend.webp';
import greenAndCubeBlend from './assets/images/blends/from_two_sources/green_cube_blend.webp';
import heuresAndGreenBlend from './assets/images/blends/from_two_sources/heures_green_blend.webp';
import heuresAndCubeBlend from './assets/images/blends/from_two_sources/heures_cube_blend.webp';
import gothsAndGreenBlend from './assets/images/blends/from_two_sources/goths_green_blend.webp';

const baseImages = {
  topLeft: gothsWithFishImage,
  topRight: heuresMoonImage,
  bottomLeft: redCubeImage,
  bottomRight: greenCleanImage,
};

const blendedImages = {
  twoSources: {
    gothsAndCubeBlend,
    gothsAndHeuresBlend,
    greenAndCubeBlend,
    heuresAndGreenBlend,
    heuresAndCubeBlend,
    gothsAndGreenBlend,
  }
};

function App() {

  const [mutatedImage, setMutatedImage] = useState('');
  const [activeButtons, setActiveButtons] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });

  const assignImage = useCallback(() => {
    if (activeButtons.topLeft && activeButtons.topRight) {
      return blendedImages.twoSources.gothsAndHeuresBlend;
    } else if (activeButtons.topLeft && activeButtons.bottomLeft) {
      return blendedImages.twoSources.gothsAndCubeBlend;
    } else if (activeButtons.topRight && activeButtons.bottomRight) {
      return blendedImages.twoSources.heuresAndGreenBlend;
    } else if (activeButtons.bottomLeft && activeButtons.bottomRight) {
      return blendedImages.twoSources.greenAndCubeBlend;
    } else if (activeButtons.topLeft && activeButtons.bottomRight) {
      return blendedImages.twoSources.gothsAndGreenBlend;
    } else if (activeButtons.topRight && activeButtons.bottomLeft) {
      return blendedImages.twoSources.heuresAndCubeBlend;
    }
    return '';
  }, [activeButtons]);

  useEffect(() => {
    setMutatedImage(assignImage());
  }, [activeButtons, assignImage]);

  function handleButtonClick(image: keyof typeof activeButtons) {
    console.log('Button clicked');
    console.log('Image:', image);

    setActiveButtons((prevState) => ({
      ...prevState,
      [image]: !prevState[image],
    }));

  };



  return (
    <div
      className={
        'grid grid-cols-3 grid-rows-3' + ' ' +
        'min-h-[100dvh]'
      }
    >
      <div className='flex flex-col justify-start align-center relative'>
        <Image url={baseImages.topLeft} />
        <Button placement='right' activated={activeButtons.topLeft}
          onClick={() => handleButtonClick('topLeft')} />
      </div>

      <div>2</div>

      <div className='flex flex-col justify-start align-center relative'>
        <Image url={baseImages.topRight} />
        <Button placement='bottom' activated={activeButtons.topRight}
          onClick={() => handleButtonClick('topRight')} />
      </div>

      <div>4

        {activeButtons.topLeft ? 'top left' : ''}
        {activeButtons.topRight ? 'top right' : ''}
        {activeButtons.bottomLeft ? 'bottom left' : ''}
        {activeButtons.bottomRight ? 'bottom right' : ''}

      </div>

      <Result imageUrl={mutatedImage} />

      <div>6</div>

      <div className='flex-col justify-start align-center relative'>
        <Image url={baseImages.bottomLeft} />
        <Button placement='top' activated={activeButtons.bottomLeft}
          onClick={() => handleButtonClick('bottomLeft')} />
      </div>

      <div>8</div>

      <div className='flex-col justify-start align-center relative'>
        <Image url={baseImages.bottomRight} />
        <Button placement='left' activated={activeButtons.bottomRight}
          onClick={() => handleButtonClick('bottomRight')} />
      </div>
    </div>
  )
}

export default App;
