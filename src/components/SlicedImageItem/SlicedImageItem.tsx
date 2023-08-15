import { ReactElement, useLayoutEffect, useRef, useState } from 'react';
import './SlicedImageItem.scss';
import { lettersAndSymbols, useGsapContext } from '../../utils';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

type ContextFunctions = {
  setOrientation: () => void;
  mouseEnter: () => void;
  mouseLeave: () => void;
  shuffleChars: () => void;
};

type SlicedImageItemProps = {
  imgPath: string;
  title: string;
  date: string;
  orientation?: string;
  slicesTotal?: number;
};

function SlicedImageItem({ imgPath, title, date, orientation = 'vertical', slicesTotal = 5 }: SlicedImageItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardImgRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const letterRef = useRef<HTMLSpanElement>(null);
  //TODO
  //   const context: gsap.Context = gsap.context(() => {}, containerRef);
  const context = useGsapContext<HTMLDivElement, ContextFunctions>(containerRef);
  const settings = {
    animation: {
      duration: 0.5,
      ease: 'power3.inOut',
    },
  };
  const isVeritcal = orientation === 'vertical';
  const chars = {
    title: title,
  };

  Splitting();

  useLayoutEffect(() => {
    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    context.add(
      'setOrientation',
      () => {
        gsap.set('.card__img', {
          [isVeritcal ? '--columns' : '--rows']: slicesTotal,
        });
      },
      containerRef,
    );

    context.add(
      'mouseEnter',
      () => {
        const percentAxis = isVeritcal ? 'yPercent' : 'xPercent';
        gsap
          .timeline({
            defaults: { ...settings.animation },
          })
          .addLabel('start', 0)
          .fromTo(
            '.card__img',
            {
              [percentAxis]: 100,
              opacity: 0,
            },
            {
              [percentAxis]: 0,
              opacity: 1,
            },
            'start',
          )
          .fromTo(
            '.card__img-wrap',
            {
              [percentAxis]: -100,
            },
            {
              [percentAxis]: 0,
            },
            'start',
          )
          .fromTo(
            '.card__img-inner',
            {
              [percentAxis]: (position: number) =>
                position % 2 ? gsap.utils.random(-75, -25) : gsap.utils.random(25, 75),
            },
            {
              [percentAxis]: 0,
            },
            'start',
          );
      },
      containerRef,
    );

    context.add(
      'mouseLeave',
      () => {
        const percentAxis = isVeritcal ? 'yPercent' : 'xPercent';
        gsap
          .timeline({
            defaults: { ...settings.animation },
          })
          .addLabel('start', 0)
          .to(
            '.card__img',
            {
              [percentAxis]: 100,
              opacity: 0,
            },
            'start',
          )
          .to(
            '.card__img-wrap',
            {
              [percentAxis]: -100,
            },
            'start',
          )
          .to(
            '.card__img-inner',
            {
              [percentAxis]: (position: number) =>
                position % 2 ? gsap.utils.random(-75, -25) : gsap.utils.random(25, 75),
            },
            'start',
          );
      },
      containerRef,
    );

    context.add(
      'shuffleChars',
      (char: Element, index: number) => {
        const chars = dateRef.current?.children;
        // const originalChar = char.innerHTML;
        // gsap.killTweensOf(char);

        for (const char of chars ?? []) {
          const originalChar = char.innerHTML;
          gsap.killTweensOf(char);
          gsap.fromTo(
            char,
            {
              opacity: 0,
            },
            {
              duration: 0.03,
              innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
              repeat: 3,
              repeatRefresh: true,
              opacity: 1,
              repeatDelay: 0.05,
              onComplete: () => {
                gsap.set(char, { innerHTML: originalChar, delay: 0.03 });
              },
            },
          );
        }
      },
      containerRef,
    );
  }),
    [];

  const renderCardSlices = () => {
    const cardSlices = [];
    for (let i = 0; i < slicesTotal; ++i) {
      cardSlices.push(getCardSlice(i));
    }

    context.setOrientation?.();

    return <div className="card__img-wrap">{cardSlices}</div>;
  };

  const getCardSlice = (index: number) => {
    const a1 = (index * 100) / slicesTotal;
    const b1 = (index * 100) / slicesTotal + 100 / slicesTotal;

    return (
      <div
        className="card__img-inner"
        key={index}
        style={{
          backgroundImage: `url('${imgPath}')`,
          clipPath: isVeritcal
            ? `polygon(${a1}% 0%, ${b1}% 0%, ${b1}% 100%, ${a1}% 100%)`
            : `polygon(0% ${a1}%, 100% ${a1}%, 100% ${b1}%, 0% ${b1}%)`,
          [isVeritcal ? 'left' : 'top']: index * -1,
        }}
      ></div>
    );
  };

  const handleMouseEnter = () => {
    context.mouseEnter?.();
    context.shuffleChars?.();
  };

  const handleMouseLeave = () => {
    context.mouseLeave?.();
  };

  return (
    <div ref={containerRef}>
      <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="card__img" ref={cardImgRef} style={{ backgroundImage: `url('${imgPath}')` }}>
          {renderCardSlices()}
        </div>
        <span className="card__date" ref={dateRef}>
          {date.split('').map((char: string, index: number) => {
            return (
              <span className="card__title-letter" key={index}>
                {char}
              </span>
            );
          })}
        </span>
        <span className="card__title" ref={titleRef}>
          {title.split('').map((char: string, index: number) => {
            return (
              <span className="card__title-letter" key={index}>
                {char}
              </span>
            );
          })}
        </span>
        <a href="#" className="card__link" data-splitting>
          Read the article
        </a>
      </div>
    </div>
  );
}

export default SlicedImageItem;
