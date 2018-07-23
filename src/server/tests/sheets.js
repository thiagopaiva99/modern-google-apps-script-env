import { expect } from './config';
import {
  extractIdFromUrl,
  openCurrentSheet,
  openSheetById,
  openSheetByUrl,
  getId,
  currentSheetUrl
} from '../utils/sheet';

const testExtractIdFromUrl = (url, id) => {
  expect(`that the ID extracted be equals to: ${id}`, id, extractIdFromUrl(url));
};

const testOpenCurrentSheet = () => {
  expect('that the current sheet be an object', 'object', typeof openCurrentSheet());
};

const testOpenSheetById = id => {
  expect('that the sheet open by ID and be an object', 'object', typeof openSheetById(id));
};

const testOpenSheetByUrl = url => {
  expect('that the sheet open by URL and be an object', 'object', typeof openSheetByUrl(url));
};

const testCurrentSheetUrl = () => {
  const currentId = getId();
  const currentUrl = `https://docs.google.com/a/ilegra.com/spreadsheets/d/${currentId}/edit`;

  expect(`that the current URL be equals to ${currentUrl}`, currentUrl, currentSheetUrl());
};

export const sheetsTests = () => {
  const url =
    'https://docs.google.com/a/ilegra.com/spreadsheets/d/1w-JtImPbJ8tAIW7WwLpQVfVyS3-5iQfryipQLLeCcEI/edit';

  const id = '1w-JtImPbJ8tAIW7WwLpQVfVyS3-5iQfryipQLLeCcEI';

  /* Running the tests */
  testExtractIdFromUrl(url, id);
  testOpenCurrentSheet();
  testOpenSheetById(id);
  testOpenSheetByUrl(url);
  testCurrentSheetUrl();
};
