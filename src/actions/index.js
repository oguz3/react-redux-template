export const SETCOUNTER = "SETCOUNTER";

export const setCounter = (number) => {
  return { type: SETCOUNTER, payload: number };
};