import { RefObject, useMemo } from 'react';
import { gsap } from 'gsap';

// Linear interpolation
export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

// Gets the mouse position
export const getMousePos = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

// This function generates a random string of a given length
export const getRandomString = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

/**
 * Wrapper hook initializes GSAP context object
 *
 * @param {RefObject}
 * @param {gsap.ContextFunc}
 * @returns {gsap.Context}
 */
export function useGsapContext<
  T extends HTMLElement = HTMLDivElement,
  R extends Record<string, unknown> = Record<string, unknown>,
  // It's ok to allow an empty function since gsap.context() needs a function argument to initialize
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>(scope?: RefObject<T>, context: gsap.ContextFunc = () => {}) {
  return useMemo(
    () => gsap.context(context, scope),
    // It's not necessary to list `context` as a dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scope],
    /**
     * Normally its hacky to type assert - but since this context logic is
     * isolated in this hook there is little risk for these types causing issues
     * with other implementations of GSAP context
     */
  ) as Partial<R> & gsap.Context;
}

export const lettersAndSymbols = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '-',
  '_',
  '+',
  '=',
  ';',
  ':',
  '<',
  '>',
  ',',
];
