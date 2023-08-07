import { DOMElement, ForwardedRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getMousePos, getRandomString, lerp, useGsapContext } from '../utils';
import React from 'react';
import './MaskHoverItem.scss';
import { gsap, random } from 'gsap';
import { ReactComponent as Test } from '../assets/test.svg';
import { render } from 'react-dom';

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
  const [renderStopped, setRenderStopped] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<number | undefined>(undefined);

  // let requestId: number | undefined = undefined;
  let scrollValue = { x: 0, y: 0 };
  let rect: DOMRect | undefined = undefined;
  const coordinates = {
    x: { previous: 0, current: 0, amt: 0.1 },
    y: { previous: 0, current: 0, amt: 0.1 },
  };

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
    // request id?
    setRequestId(undefined);

    const scrollDiff = {
      x: scrollValue.x - window.scrollX,
      y: scrollValue.y - window.scrollY,
    };

    // console.log(scrollDiff);

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

// class MaskHoverItem extends React.Component {
//   // let scrollValue = { x: 0, y: 0 };
//   // let rect = null;
//   anchorRef = useRef<HTMLAnchorElement>();
//   divRef = useRef<HTMLDivElement>();
//   renderedStyles = {
//     x: { previous: 0, current: 0, amt: 0.1 },
//     y: { previous: 0, current: 0, amt: 0.1 },
//   };
//   // random string of 2000 chars
//   randomString = getRandomString(2000);
//   // tracks scroll position
//   scrollValue = { x: 0, y: 0 };
//   // tracks size and position of the DOM element
//   rect: DOMRect | undefined = undefined;
//   requestId: number | undefined = undefined;
//   isFirstTick = false;

//   constructor(props: any) {
//     super(props);
//     this.scrollValue = { x: 0, y: 0 };
//     this.calculateSizePosition();
//     this.initEvents();
//   }

//   calculateSizePosition = () => {
//     this.scrollValue = { x: window.scrollX, y: window.scrollY };
//     this.rect = this.anchorRef.current?.getBoundingClientRect();
//   };

//   initEvents() {
//     window.addEventListener('resize', () => this.calculateSizePosition());

//     this.anchorRef.current?.addEventListener('mouseenter', () => {

//       this.isFirstTick = true;
//       this.loopRender();
//     });

//     this.anchorRef.current?.addEventListener('mouseleave', () => {
//       this.stopRendering();

//     });
//   }

//   loopRender() {
//     if (!this.requestId) {
//       this.requestId = requestAnimationFrame(() => this.render());
//     }
//   }

//   stopRendering() {
//     if (this.requestId) {
//       window.cancelAnimationFrame(this.requestId);
//       this.requestId = undefined;
//     }
//   }

//   render() {
//     // Clear requestId for the next frame
//     this.requestId = undefined;

//     // Calculate the difference between the current
//     // scroll position and the stored one
//     const scrollDiff = {
//       x: this.scrollValue.x - window.scrollX,
//       y: this.scrollValue.y - window.scrollY,
//     };

//     // Calculate the new translation values based on
//     // the mouse position, scroll difference and
//     // the element's position
//     if (this.rect?.left && this.rect?.right) {
//       this.renderedStyles['x'].current = mousePos.x - (scrollDiff.x + this.rect.left);
//       this.renderedStyles['y'].current = mousePos.y - (scrollDiff.y + this.rect.top);
//     }

//     // If it's the first animation tick, set the
//     // previous values to be the same as the current ones
//     if (this.isFirstTick) {
//       this.renderedStyles['x'].previous = this.renderedStyles['x'].current;
//       this.renderedStyles['y'].previous = this.renderedStyles['y'].current;
//     }

//     // Update the previous value to be a linear
//     // interpolation between the previous and current values
//     for (const key in this.renderedStyles) {
//       this.renderedStyles[key as keyof typeof this.renderedStyles].previous = lerp(
//         this.renderedStyles[key as keyof typeof this.renderedStyles].previous,
//         this.renderedStyles[key as keyof typeof this.renderedStyles].current,
//         this.renderedStyles[key as keyof typeof this.renderedStyles].amt,
//       );
//     }

//     // Apply the new styles to the DOM element
//     // using CSS variables
//     gsap.set(this.anchorRef.current, {
//       '--x': this.renderedStyles['x'].previous,
//       '--y': this.renderedStyles['y'].previous,
//     });

//     // Set the deco element's innerHTML to the random string
//     // if (this.divRef.current) {
//     //   this.divRef.current.innerHTML = this.randomString;
//     // }

//     // Request the next frame
//     this.loopRender();

//     return (
//       <a className="grid__item-img" ref={this.anchorRef}>
//         <>
//           <div className="grid__item-img-deco" ref={this.divRef}>
//             {this.randomString}
//           </div>
//           <svg width="40" height="40" viewBox="0 0 40 40" fill="none"></svg>
//         </>
//       </a>
//     );
//   }
// }

export default MaskHoverItem;
