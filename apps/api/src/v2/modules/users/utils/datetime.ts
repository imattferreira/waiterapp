const getUTCTime = (): string => new Date().toISOString();

export default Object.freeze({
  getUTCTime,
});
