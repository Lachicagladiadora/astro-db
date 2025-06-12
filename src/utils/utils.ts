// import { iv, key, encoder } from "./constants";

import { arrayBufferToBase64 } from "../bufferToString.utils";
import {
  encoder,
  initializationVector,
  keyInBase64,
} from "../keyEncrypDecrypt.utils";
import { base64ToArrayBuffer } from "../stringToBuffer.utils";

// const encoder = new TextEncoder();

// // 2. generate one key for encrypt and decrypt
// const key = await crypto.subtle.generateKey(
//   { name: "AES-GCM", length: 256 },
//   true,
//   ["decrypt", "encrypt"]
// );

// // 3. generate a iv (initialization vector)
// const iv = crypto.getRandomValues(new Uint8Array(12));

// console.log(iv instanceof Uint8Array, iv.length, { iv });
// // console.log(iv.length);

const keyImported = base64ToArrayBuffer(keyInBase64);
const key = await crypto.subtle.importKey(
  "raw",
  keyImported,
  { name: "AES-GCM" },
  true,
  ["decrypt", "encrypt"]
);

const iv = initializationVector;
console.log({ iv });

// 4. encrypt
export const encrypt = async (data: string) => {
  const encoded = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(data)
  );
  // const stringEncoded = arrayBufferToBase64(encoded) as string;
  // console.log({ stringEncoded, encoded });
  return {
    data: arrayBufferToBase64(encoded) as string,
    intialVector: arrayBufferToBase64(iv.buffer),
  };
};

//  5. decrypt
// export const decrypt = (text: string) => {};
export const decrypt = async ({ data, initialVector }: EncodeData) => {
  console.log("1", { data });
  const tt = data;
  const currentIV = new Uint8Array(base64ToArrayBuffer(initialVector));
  const base64Decoded = base64ToArrayBuffer(tt);
  console.log("jeje", { tt, base64Decoded });
  const decoded = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: currentIV },
    key,
    base64Decoded
  );
  console.log("2", { decoded });
  return decoded;
};
