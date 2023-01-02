export const isObj = (obj: unknown): obj is object =>
  typeof obj === "object" && !Array.isArray(obj) && obj !== null;
