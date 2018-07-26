import { openCurrentSheet } from './sheet';

export const convertFile = (type, blobName, folder, sheet) => {
  const spreadsheet = openCurrentSheet();

  const options = [
    `format=${type}`,
    '&size=A4',
    '&portrait=false',
    '&fitw=true&source=labnol',
    '&sheetnames=false&printtitle=false',
    '&pagenumbers=false&gridlines=false',
    '&fzr=true',
    `&gid=${sheet.getId()}`
  ];

  const url = `https://docs.google.com/spreadsheets/d/${spreadsheet.getId()}/export?${options.join(
    ''
  )}`;

  const token = ScriptApp.getOAuthToken();

  const response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const blobs = response.getBlob().setName(blobName);

  folder.createFile(blobs);

  return blobs;
};
