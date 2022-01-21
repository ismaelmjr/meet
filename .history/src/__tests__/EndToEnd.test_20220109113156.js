import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .show-details-btn");
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .hide-details-btn");
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeNull();
  });

  afterAll(() => {
    browser.close();
  });
});

describe("Specify number of events", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".NumberOfEvents");
  });

  test("Number of events by default", async () => {
    const numberOfEvents = await page.$(".NumberOfEvents");
    expect(numberOfEvents).toBeDefined();
  });

  test("When user changes the number of events", async () => {
    const numberOfEvents = await page.$(".NumberOfEvents");
    expect(numberOfEvents).toBeDefined();
  });



});
