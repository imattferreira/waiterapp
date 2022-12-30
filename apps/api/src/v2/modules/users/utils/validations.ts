export function isPasswordValid(password: string): boolean {
  if (password.length < 8) {
    return false;
  }

  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  return regex.test(password);
}

export function isEmailValid(email: string): boolean {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
}

export function isFieldsRequired<T extends object>(
  requiredFields: (keyof T)[],
  obj: object
): boolean {
  return requiredFields.every((field) => field in obj);
}
