import { firstLetterUp } from './strings';

export const include = filename =>
  HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .getContent();

export const template = filename =>
  HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .setTitle(firstLetterUp(filename));
