export const jsbridge = (
  name: string,
  param: string,
  successCallback: () => void,
  errorCallback: () => void
) => {
  let json = {
    name,
    param,
    successCallback,
    errorCallback,
  };
  const str = JSON.stringify(json);
  console.log("res===str", str);
  window.webkit.messageHandlers.jsbridge.postMessage(str);
};
