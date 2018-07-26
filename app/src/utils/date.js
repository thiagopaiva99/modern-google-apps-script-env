export const createDateFromString = string => {
  const dateData = string.split(' ');

  const date = dateData[0];
  const hour = dateData[1] ? dateData[1] : '';

  const datePieces = date.split('/');
  const hourPieces = hour !== '' ? hour.split(':') : '';

  if (hourPieces.length > 0) {
    return new Date(datePieces[2], datePieces[1] - 1, datePieces[0], hourPieces[0], hourPieces[1]);
  }

  return new Date(datePieces[2], datePieces[1] - 1, datePieces[0]);
};

export const createDateStringFromDate = date => {
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const createHourStringFromDate = date => {
  const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  return `${hour}:${minute}`;
};

export const generateCurrentDate = () => {
  const date = new Date();

  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const generateCurrentHour = () => {
  const date = new Date();

  const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  return `${hour}:${minute}`;
};

export const generateCurrentDateTime = () => {
  const date = generateCurrentDate();
  const hour = generateCurrentHour();

  return `${date} ${hour}`;
};

export const formatDate = date => {
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const addDays = (date, days) => {
  date.setDate(date.getDate() + days);

  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const addMinutes = (date, minutes, hour) => {
  date.setMinutes(date.getMinutes() + minutes);

  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  if (hour) return `${day}/${month}/${year} ${hours}:${minute}`;
  return `${day}/${month}/${year}`;
};

export const getDay = () => {
  const date = new Date();

  return date.getDate();
};

export const getHour = () => {
  const date = new Date();

  return date.getUTCHours();
};

export const getMinute = () => {
  const date = new Date();

  return date.getMinutes();
};

export const getDays = () => [
  'segunda-feira',
  'terça-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira'
];
