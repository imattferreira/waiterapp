import argon2 from "argon2";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";

const SECRET = "sdasadasdada";

const hash = (plaintext: string): Promise<string> => argon2.hash(plaintext);

const verify = (plaintext: string, hash: string): Promise<boolean> =>
  argon2.verify(hash, plaintext);

const randomUUID = (): string => crypto.randomUUID();

const sign = (data: object): string =>
  jwt.sign({ data }, SECRET, { expiresIn: "1d" });

// TODO
const decode = <T>(token: string) => jwt.verify(token, SECRET);

export default Object.freeze({
  hash,
  verify,
  randomUUID,
  jwt: {
    sign,
    decode,
  },
});
