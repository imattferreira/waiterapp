import argon2 from "argon2";
import crypto from "node:crypto";

export function hash(plaintext: string): Promise<string> {
  return argon2.hash(plaintext);
}

export function verify(plaintext: string, hash: string): Promise<boolean> {
  return argon2.verify(hash, plaintext);
}

export function randomUUID() {
  return crypto.randomUUID();
}
