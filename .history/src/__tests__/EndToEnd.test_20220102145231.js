import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });
  test("An event element is collapsed by default", async () => {
\    await page.goto("http://localhost:3000/");

    const eventDetails = await page.$(".event .extra_details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
