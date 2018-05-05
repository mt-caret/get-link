const code = `
(() => {
  let input = document.createElement("input");
  input.value = '[' + document.title + '](' + window.location.href + ')';
  document.body.appendChild(input);
  input.select();
  console.log(document.execCommand('copy'));
  document.body.removeChild(input);
})();
`;

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({ code });
});
