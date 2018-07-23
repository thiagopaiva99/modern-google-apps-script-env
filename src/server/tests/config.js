export const expect = (message, result, value) => {
  const finalResult = result === value;
  Logger.log(`Expect ${message}: ${finalResult ? 'PASS' : 'FAIL'}`);
  return finalResult;
};
