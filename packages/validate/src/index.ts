const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const uuidV4Regex =
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

function validatePassword(password: string) {
  if (password.length < 8) {
    return false;
  }

  return passwordRegex.test(password);
}

const validateEmail = (email: string) => emailRegex.test(email);

const validateUUIDV4 = (id: string) => uuidV4Regex.test(id);

const regex = Object.freeze({
  password: passwordRegex,
  email: emailRegex,
  uuidV4: uuidV4Regex,
});

const validate = Object.freeze({
  password: validatePassword,
  email: validateEmail,
  uuidV4: validateUUIDV4,
});

export { regex, validate };
