const code = `
(() => {
  const escapeHtml = (unsafeString) => {
    return unsafeString
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };
  let input = document.createElement("input");
  input.value = '[' + escapeHtml(document.title) + '](' + window.location.href + ')';
  document.body.appendChild(input);
  input.select();
  console.log(document.execCommand('copy'));
  document.body.removeChild(input);
})();
`;

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({ code });
});
