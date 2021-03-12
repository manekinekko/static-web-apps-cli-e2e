module.exports = {
  browsers: ["chromium"],
  exitOnPageError: false,
  launchOptions: {
    headless: false,
  },
  serverOptions: {
    command: "swa start $SWA_CLI_APP_ARTIFACT --api ./api --port 1234",
    port: 7071, // we need to wait for the API server to start
    protocol: "http",
    usedPortAction: "kill",
    launchTimeout: 60000,
    debug: true
  },
};
