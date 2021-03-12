const { addAttach } = require("jest-html-reporters/helper");

const wait = async () => await new Promise((r) => setTimeout(r, 3000));

describe("Application Launch", () => {
  //--
  it("should work", async () => {
    try {
      await page.goto("http://0.0.0.0:1234/");
      await wait();
      const title = await page.textContent("body > app-root > div > div > main > app-home > div > div > h2");
      expect(title).toBe("Shop at Home");
    } catch (ex) {
      const screenshot = await page.screenshot();
      await addAttach(screenshot, "Screenshot at time of failure");
      throw ex;
    }
  });
});
