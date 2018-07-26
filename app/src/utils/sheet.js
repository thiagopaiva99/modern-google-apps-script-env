import { getCurrentSheetUrl } from './url';

export const openSheetById = sheetId => SpreadsheetApp.openById(sheetId);

export const openSheetByUrl = sheetUrl => SpreadsheetApp.openByUrl(sheetUrl);

export const openCurrentSheet = () => SpreadsheetApp.getActiveSpreadsheet();

export const openCurrentTab = () => openCurrentSheet().getActiveSheet();

export const currentSheetUrl = () => openCurrentSheet().getUrl();

export const getShareMinimalUrl = () => `${currentSheetUrl()}?rm=minimal`;

export const getShareDemolUrl = () => `${currentSheetUrl()}?rm=demo`;

export const getId = () => openCurrentSheet().getId();

export const getTab = name => openCurrentSheet().getSheetByName(name);

export const getRange = range => openCurrentSheet().getRange(range);

export const getValueFrom = range => getRange(range).getValue();

export const getValuesFrom = range => getRange(range).getValues();

export const setValueTo = (range, value) => getRange(range).setValue(value);

export const setValuesTo = (range, values) => getRange(range).setValues(values);

export const setSheetActive = name => getTab(name).activate();

export const clearSheet = name => getTab(name).clear();

export const lastRow = () => openCurrentTab().getLastRow();

export const lastCol = () => openCurrentTab().getLastColumn();

export const sheetLastRow = sheet => getTab(sheet).getLastRow();

export const sheetLastCol = sheet => getTab(sheet).getLastColumn();

export const isHidden = () => openCurrentTab().isSheetHidden();

export const setName = (tab, name) => tab.setName(name);

export const hide = name => (name !== '' ? getTab(name).hideSheet() : openCurrentTab().hideSheet());

export const show = name => getTab(name).showSheet();

export const createSheet = name => SpreadsheetApp.create(name);

export const insertSheet = name => openCurrentSheet().insertSheet(name);

export const flush = () => SpreadsheetApp.flush();

export const toast = ({ message, title, seconds }) =>
  openCurrentSheet().toast(message, title, seconds);

export const getValuesFromSheetWithColAndRow = (sheet, coordinates) =>
  getTab(sheet)
    .getRange(coordinates.firstRow, coordinates.firstCol, coordinates.lastRow, coordinates.lastCol)
    .getValues();

export const getValueFromSheetWithColAndRow = (sheet, coordinates) =>
  getTab(sheet)
    .getRange(coordinates.firstRow, coordinates.firstCol, coordinates.lastRow, coordinates.lastCol)
    .getValue();

export const setValuesToSheetWithColAndRow = (sheet, coordinates, values) =>
  getTab(sheet)
    .getRange(coordinates.firstRow, coordinates.firstCol, coordinates.lastRow, coordinates.lastCol)
    .setValues(values);

export const setValueToSheetWithColAndRow = (sheet, coordinates, value) =>
  getTab(sheet)
    .getRange(coordinates.firstRow, coordinates.firstCol, coordinates.lastRow, coordinates.lastCol)
    .setValue(value);

export const getValuesFromSheet = (sheet, range) =>
  getTab(sheet)
    .getRange(range)
    .getValues();

export const setValuesToSheet = (sheet, range, values) =>
  getTab(sheet)
    .getRange(range)
    .setValues(values);

export const extractIdFromUrl = () => {
  const url = getCurrentSheetUrl();
  const id = url.substring(url.indexOf('/d/') + 3, url.lastIndexOf('/edit'));
  return id;
};
