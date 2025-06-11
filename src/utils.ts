// 1. convert: text -> bits (BufferSource === Uint8Array === ArrayBuffer)
const encoder = new TextEncoder();

// 2. generate one key for encrypt and decrypt
const key = await crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["decrypt", "encrypt"]
);

// 3. generate a iv (initialization vector)
const iv = crypto.getRandomValues(new Uint8Array(12));

// 4. encrypt
export const encrypt = async (data: string) => {
  const encoded = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(data)
  );
  const stringEncoded = arrayBufferToBase64(encoded) as string;
  return stringEncoded;
};

//  5. decrypt
// export const decrypt = (text: string) => {};
export const decrypt = async (data: string) => {
  console.log("1", { data });
  const base64Decoded = base64ToArrayBuffer(data) as ArrayBuffer;
  console.log("jeje", { base64Decoded });
  const decoded = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    base64Decoded
  );
  console.log("2", { decoded });
  return decoded;
};

// aditional: conver to string and revert
const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  const binary = bytes.reduce((acc, b) => acc + String.fromCharCode(b), "");
  return btoa(binary); // base64 === string
};

const base64ToArrayBuffer = (base64: string) => {
  console.log({ base64 });
  const binary = atob(base64); // Decodifica base64 a texto binario
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i); // convierte cada carácter a byte
  }
  console.log("jiji", bytes.buffer);
  return bytes.buffer;
};
