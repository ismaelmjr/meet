import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
  });
  test("An event element is collapsed by default", async () => {
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    const eventDetails = await page.$(".event .extra_details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
