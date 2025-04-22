import { useState, useEffect, useCallback } from 'react';
import BaseImage from './components/BaseImage';
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

// Blended images: three sources
import gothsAndCubeAndGreenBlend from './assets/images/blends/from_three_sources/goths_cube_green_blend.webp';
import gothsAndCubeAndHeuresBlend from './assets/images/blends/from_three_sources/goths_cube_heures_blend.webp';
import gothsAndHeuresAndGreenBlend from './assets/images/blends/from_three_sources/goths_heures_green_blend.webp';
import heuresAndGreenAndCubeBlend from './assets/images/blends/from_three_sources/heures_green_cube_blend.webp';

// Blended images: four sources
import allFourImagesBlend from './assets/images/blends/from_four_sources/all_four_blend.webp';

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
  },
  threeSources: {
    gothsAndCubeAndGreenBlend,
    gothsAndCubeAndHeuresBlend,
    gothsAndHeuresAndGreenBlend,
    heuresAndGreenAndCubeBlend,
  },
  fourSources: {
    allFourImagesBlend,
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
    // Four sources
    if (activeButtons.topLeft && activeButtons.topRight && activeButtons.bottomLeft && activeButtons.bottomRight) {
      return blendedImages.fourSources.allFourImagesBlend;
    }

    // Three sources
    else if (activeButtons.topLeft && activeButtons.topRight && activeButtons.bottomLeft) {
      return blendedImages.threeSources.gothsAndCubeAndHeuresBlend;
    } else if (activeButtons.topLeft && activeButtons.topRight && activeButtons.bottomRight) {
      return blendedImages.threeSources.gothsAndHeuresAndGreenBlend;
    } else if (activeButtons.topLeft && activeButtons.bottomLeft && activeButtons.bottomRight) {
      return blendedImages.threeSources.gothsAndCubeAndGreenBlend;
    } else if (activeButtons.topRight && activeButtons.bottomLeft && activeButtons.bottomRight) {
      return blendedImages.threeSources.heuresAndGreenAndCubeBlend;
    }

    // Two sources
    else if (activeButtons.topLeft && activeButtons.topRight) {
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
    } else {
      return '';
    }
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
        'min-h-[100dvh]' + ' ' +
        'bg-stone-400 border-14 border-black'
      }
    >
      <div className='flex flex-col justify-start align-center relative'>
        <BaseImage url={baseImages.topLeft} position={'top-left'} />
        <Button placement='right' activated={activeButtons.topLeft}
          onClick={() => handleButtonClick('topLeft')} />
      </div>

      <div />

      <div className='flex flex-col justify-start align-center relative'>
        <BaseImage url={baseImages.topRight} position={'top-right'} />
        <Button placement='below' activated={activeButtons.topRight}
          onClick={() => handleButtonClick('topRight')} />
      </div>

      <div className='flex flex-col justify-start p-2 text-xs italic text-slate-500'>
        <span>{activeButtons.topLeft ? 'top left' : '---'}</span>
        <span>{activeButtons.topRight ? 'top right' : '---'}</span>
        <span>{activeButtons.bottomLeft ? 'bottom left' : '---'}</span>
        <span>{activeButtons.bottomRight ? 'bottom right' : '---'}</span>
      </div>

      <Result imageUrl={mutatedImage} />

      <div className='flex flex-col justify-end p-2 text-right text-xs italic text-slate-500'>
        <span>{activeButtons.topLeft ? 'goths' : '---'}</span>
        <span>{activeButtons.topRight ? 'très riches heures' : '---'}</span>
        <span>{activeButtons.bottomLeft ? 'grafik cubic' : '---'}</span>
        <span>{activeButtons.bottomRight ? 'clean & green' : '---'}</span>
      </div>

      <div className='flex-col justify-start align-center relative'>
        <BaseImage url={baseImages.bottomLeft} position={'bottom-left'} />
        <Button placement='above' activated={activeButtons.bottomLeft}
          onClick={() => handleButtonClick('bottomLeft')} />
      </div>

      <div />

      <div className='flex-col justify-start align-center relative'>
        <BaseImage url={baseImages.bottomRight} position={'bottom-right'} />
        <Button placement='left' activated={activeButtons.bottomRight}
          onClick={() => handleButtonClick('bottomRight')} />
      </div>
    </div>
  )
}

export default App;
