export const setUserProperty = (property, value) => {
  const properties = PropertiesService.getUserProperties();
  return properties.setProperty(property, value);
};

export const setScriptProperty = (property, value) => {
  const properties = PropertiesService.getScriptProperties();
  return properties.setProperty(property, value);
};

export const setDocumentProperty = (property, value) => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.setProperty(property, value);
};

export const setUserProperties = values => {
  const properties = PropertiesService.getUserProperties();
  return properties.setProperties(values);
};

export const setScriptProperties = values => {
  const properties = PropertiesService.getScriptProperties();
  return properties.setProperties(values);
};

export const setDocumentProperties = values => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.setProperties(values);
};

export const listUserProperties = () => {
  const properties = PropertiesService.getUserProperties();
  return properties.map(property => property);
};

export const listScriptProperties = () => {
  const properties = PropertiesService.getScriptProperties();
  return properties.map(property => property);
};

export const listDocumentProperties = () => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.map(property => property);
};

export const getUserProperty = property => {
  const properties = PropertiesService.getUserProperties();
  return properties.getProperty(property);
};

export const getScriptProperty = property => {
  const properties = PropertiesService.getScriptProperties();
  return properties.getProperty(property);
};

export const getDocumentProperty = property => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.getProperty(property);
};

export const deleteAllUserProperties = () => {
  const properties = PropertiesService.getUserProperties();
  return properties.deleteAllProperties();
};

export const deleteAllScriptProperties = () => {
  const properties = PropertiesService.getScriptProperties();
  return properties.deleteAllProperties();
};

export const deleteAllDocumentProperties = () => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.deleteAllProperties();
};

export const deleteUserProperty = property => {
  const properties = PropertiesService.getUserProperties();
  return properties.deleteProperty(property);
};

export const deleteScriptProperty = property => {
  const properties = PropertiesService.getScriptProperties();
  return properties.deleteProperty(property);
};

export const deleteDocumentProperty = property => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.deleteProperty(property);
};

export const getUserKeys = () => {
  const properties = PropertiesService.getUserProperties();
  return properties.getKeys();
};

export const getScriptKeys = () => {
  const properties = PropertiesService.getScriptProperties();
  return properties.getKeys();
};

export const getDocumentKeys = () => {
  const properties = PropertiesService.getDocumentProperties();
  return properties.getKeys();
};
