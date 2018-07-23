export const getTriggers = () => ScriptApp.getScriptTriggers();

export const existsTrigger = name => {
  const triggers = getTriggers();

  const trigger = triggers.filter(currentTrigger => currentTrigger.getHandlerFunction() === name);

  return trigger > 0;
};

export const disableAllTriggers = () => {
  const triggers = getTriggers();

  triggers.map(trigger => ScriptApp.deleteTrigger(trigger));
};

export const disableTrigger = triggerName => {
  const triggers = getTriggers();

  const trigger = triggers.filter(
    currenTrigger => currenTrigger.getHandlerFunction() === triggerName
  );

  ScriptApp.deleteTrigger(trigger);
};

export const createTriggerToMinutes = trigger => {
  ScriptApp.newTrigger(trigger.handlerFunction)
    .timeBased()
    .everyMinutes(trigger.time)
    .create();
};

export const createTriggerToHours = trigger => {
  ScriptApp.newTrigger(trigger.handlerFunction)
    .timeBased()
    .everyHours(trigger.time)
    .create();
};

export const createTriggerToDays = trigger => {
  ScriptApp.newTrigger(trigger.handlerFunction)
    .timeBased()
    .everyDays(trigger.time)
    .create();
};

export const createTriggerToCustomTime = trigger => {
  const date = new Date(trigger.year, trigger.month, trigger.day, trigger.hour, trigger.minute);

  ScriptApp.newTrigger(trigger.handlerFunction)
    .timeBased()
    .at(date)
    .create();
};

export const listTriggers = () => {
  const triggers = getTriggers();

  return triggers.map(trigger => trigger);
};
