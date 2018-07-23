import { openCurrentSheet } from './sheet';

export const getCurrentSheetUrl = () => {
  const sheet = openCurrentSheet();
  return sheet.getUrl();
};

export const getCurrentScriptUrl = () => {
  const script = ScriptApp;
  return script.getUrl();
};
