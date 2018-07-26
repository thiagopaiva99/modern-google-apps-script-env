import { onOpen } from './lifecycle';
import { doGet } from './documentation';

export const setGlobals = () => {
  global.onOpen = onOpen;
  global.doGet = doGet;
};
