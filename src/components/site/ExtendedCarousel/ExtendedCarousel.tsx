'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import React from 'react';

import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButtons';
import { DotButton, useDotButton } from './DotButton'

const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function ExtendedCarousel() {
  // Carousel settings
  const options = {
    // loop: true,
    align: 'end',
    containScroll: 'trimSnaps',
    slidesToScroll: 'auto',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const className = [
    'c-carousel-container__vacancy_carousel__outer-wrapper',
    'outer-wrapper',
  ].join(' ');

  return (
    <section className="embla">
      <div className="carousel__vacancy_carousel">
        <div className="c-carousel-container__vacancy_carousel">
          <div className={className}>
            <div className="c-carousel-container__vacancy_carousel__inner-wrapper inner-wrapper">
             

              <div className="embla pt-4 relative">
                <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">
                    {SLIDES.map((index) => (
                      <div
                        className="embla__slide"
                        key={index}
                      >
                        {/* <img src="https://picsum.photos/400/900" /> */}
                        <div className="embla__slide__number">{index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="embla__controls">
                  <div className="embla__buttons">
                    <PrevButton
                      onClick={onPrevButtonClick}
                      disabled={prevBtnDisabled}
                    />
                    <NextButton
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    />
                  </div>

                  <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                      <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'bg-black ml-1 embla__dot'.concat(
                          index === selectedIndex
                            ? ' embla__dot--selected'
                            : '',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
