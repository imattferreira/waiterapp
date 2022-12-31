import argon2 from "argon2";
import crypto from "node:crypto";

const hash = (plaintext: string): Promise<string> => argon2.hash(plaintext);

const verify = (plaintext: string, hash: string): Promise<boolean> =>
  argon2.verify(hash, plaintext);

const randomUUID = (): string => crypto.randomUUID();

export default Object.freeze({
  hash,
  verify,
  randomUUID,
});
