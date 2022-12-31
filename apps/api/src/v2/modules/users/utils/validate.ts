import { validate } from 'validate';

const requiredFields = <T extends object>(
  requiredFields: (keyof T)[],
  obj: Partial<T>
): boolean => requiredFields.every((field) => field in obj);

export default Object.freeze({
  requiredFields,
  ...validate
});
