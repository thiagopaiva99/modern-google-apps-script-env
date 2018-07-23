export const authRequired = () => {
  const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
  const authStatus = authInfo.getAuthorizationStatus();
  const isAuthRequired = authStatus === ScriptApp.AuthorizationStatus.REQUIRED;

  if (isAuthRequired) {
    const authScript = `
        <script type="text/javascript">
          function openAuthWindow() {
            window.open("${authInfo.getAuthorizationUrl()}");
          }
        </script>
      `;

    const alert = HtmlService.createHtmlOutput(authScript);

    SpreadsheetApp.getUi().showModalDialog(alert);
  }
};
