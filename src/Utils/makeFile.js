export const makeFile = (base64String) => {
  return new Promise((resolve, reject) => {
    var parts = base64String.split(";base64,");
    var contentType = parts[0].split(":")[1];
    var fileExtension = contentType.split("/")[1];
    var fileName = "file." + fileExtension;
    const base64Data = base64String.split(",")[1];
    const binaryData = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: contentType });
    const file = new File([blob], fileName, { type: contentType });
    if (file) {
      resolve(file);
    } else {
      reject();
    }
  });
};
