export const base64ToArrayBuffer = (base64: string) => {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
};

// export const base64ToArrayBuffer = (base64: string) => {
//   console.log("jaja", { base64 });
//   const binary = atob(base64);
//   // console.log("jiji", );
//   const bytes = new Uint8Array([...binary].map((char) => char.charCodeAt(0)));
//   console.log("juju", { bytes });
//   console.log("jojo", bytes.buffer);
//   return bytes.buffer;
// };
