import { arrayBufferToBase64 } from "./bufferToString.utils";

// 1. convert: text -> bits (BufferSource === Uint8Array === ArrayBuffer)
export const encoder = new TextEncoder();

// 2. generate one key for encrypt and decrypt
const key = await crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["decrypt", "encrypt"]
);

// 3. generate a iv (initialization vector)
export const initializationVector = crypto.getRandomValues(new Uint8Array(12));

// export and import key
// //** additional export and import for key */
const exportedKey = await crypto.subtle.exportKey("raw", key);
export const keyInBase64 = arrayBufferToBase64(exportedKey);
