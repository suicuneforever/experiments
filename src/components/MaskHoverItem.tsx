import { useLayoutEffect, useRef, useState } from 'react';
import { getMousePos, getRandomString, lerp, useGsapContext } from '../utils';
import './MaskHoverItem.scss';
import { gsap } from 'gsap';
import { ReactComponent as Test } from '../assets/test.svg';

let mousePos = { x: 0, y: 0 };

window.addEventListener('mousemove', (event) => {
  mousePos = getMousePos(event);
});

type ContextFunctions = {
  mouseEnter: () => void;
  mouseLeave: () => void;
  setCoordinates: (xCoord: number, yCoord: number) => void;
};

function MaskHoverItem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLAnchorElement>(null);
  const decoRef = useRef<HTMLDivElement>(null);
  const context = useGsapContext<HTMLDivElement, ContextFunctions>(containerRef);
  const [randomString, setRandomString] = useState<string>(getRandomString(2000));
  const [requestId, setRequestId] = useState<number | undefined>(undefined);
  const coordinates = {
    x: { previous: 0, current: 0, amt: 0.1 },
    y: { previous: 0, current: 0, amt: 0.1 },
  };
  let scrollValue = { x: 0, y: 0 };
  let rect: DOMRect | undefined = undefined;

  useLayoutEffect(() => {
    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    context.add('mouseEnter', () => {
      gsap.to(decoRef.current, { duration: 0.5, ease: 'power3', opacity: 1 });
    });

    context.add('mouseLeave', () => {
      gsap.to(decoRef.current, { duration: 0.5, ease: 'power3', opacity: 0 });
    });

    context.add('setCoordinates', (xCoord: number, yCoord: number) => {
      console.log('previous x ', coordinates['x'].previous);
      console.log('previous y ', coordinates['y'].previous);
      gsap.set(imgRef.current, {
        '--x': xCoord,
        '--y': yCoord,
      });
    });
  }, []);

  const calculateSizePosition = () => {
    scrollValue = { x: window.scrollX, y: window.scrollY };
    rect = imgRef.current?.getBoundingClientRect();
  };

  const handleMouseMove = () => {
    setRandomString(getRandomString(2000));
  };

  const handleMouseEnter = () => {
    context.mouseEnter?.();
    calculateSizePosition();
    loopRender(true);
  };

  const handleMouseLeave = () => {
    stopRender();
    context.mouseLeave?.();
  };

  const loopRender = (isFirstTick = false) => {
    if (!requestId) {
      setRequestId(requestAnimationFrame(() => renderAnimation(isFirstTick)));
    }
  };

  const stopRender = () => {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      setRequestId(undefined);
    }
  };

  const renderAnimation = (isFirstTick: boolean) => {
    setRequestId(undefined);

    const scrollDiff = {
      x: scrollValue.x - window.scrollX,
      y: scrollValue.y - window.scrollY,
    };

    if (rect) {
      coordinates['x'].current = mousePos.x - (scrollDiff.x + rect.left);
      coordinates['y'].current = mousePos.y - (scrollDiff.y + rect.top);
    }

    // If it's the first animation tick, set the
    // previous values to be the same as the current ones
    if (isFirstTick) {
      coordinates['x'].previous = coordinates['x'].current;
      coordinates['y'].previous = coordinates['y'].current;
    }

    for (const key in coordinates) {
      coordinates[key as keyof typeof coordinates].previous = lerp(
        coordinates[key as keyof typeof coordinates].previous,
        coordinates[key as keyof typeof coordinates].current,
        coordinates[key as keyof typeof coordinates].amt,
      );
    }

    console.log(coordinates);

    context.setCoordinates?.(coordinates['x'].previous, coordinates['y'].previous);

    loopRender();
  };

  return (
    <div ref={containerRef}>
      <a
        className="grid__item-img"
        ref={imgRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid__item-img-deco" ref={decoRef}>
          {randomString}
        </div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="#fff">
          <Test />
        </svg>
      </a>
    </div>
  );
}

export default MaskHoverItem;
