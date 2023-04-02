import bcrypt from 'bcrypt';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const ENCRYPT_ALGO = process.env.ENCRYPT_ALGO;
const ENCRYPT_KEY = process.env.ENCRYPT_KEY; 

//encrption/decrtiption is for user person info: address, email, or whatever should be more hidden
//brcypt can be used for the password user sets

export function encryptData(text) {
  const iv = crypto.randomBytes(16); // randomly generated initialization vector
  const cipher = crypto.createCipheriv(ENCRYPT_ALGO, Buffer.from(ENCRYPT_KEY), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decryptData(text) {
  const [iv, encrypted] = text.split(':');
  const decipher = crypto.createDecipheriv(ENCRYPT_ALGO, Buffer.from(ENCRYPT_KEY), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(Buffer.from(encrypted, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
