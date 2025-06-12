// aditional: conver to string and revert

// function arrayBufferToBase64(buffer) {
//   const bytes = new Uint8Array(buffer);
//   let binary = '';
//   for (let i = 0; i < bytes.byteLength; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return btoa(binary); // codifica a base64
// }

export const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  console.log({ buffer });
  const bytes = new Uint8Array(buffer);
  // const bytes = buffer.;
  // console.log({ bytes });
  const binary = bytes.reduce((acc, b) => acc + String.fromCharCode(b), "");
  return btoa(binary); // base64 === string
  // let binary = "";
  // for (let i = 0; i < bytes.byteLength; i++) {
  //   binary += String.fromCharCode(bytes[i]);
  // }
  // return btoa(binary);
};
