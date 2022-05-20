export default function fakeAPI(payload, isResolved = true) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (isResolved) {
        resolve(payload);
        return;
      }

      reject(payload);
    }, 2000);
  });
}
