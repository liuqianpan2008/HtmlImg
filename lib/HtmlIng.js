import fs from "fs";
import artTemplate from "art-template";
import puppeteer from "puppeteer";
import path from "path";
const __dirname = path.resolve();
async function HtmlImg(mode = "", data) {
  const html = artTemplate(`${__dirname}/modular/${mode}/index.html`, data);
  fs.writeFile(`${__dirname}/resources/${mode}/index.html`, html, (err) => {
    if (err) {
      console.log(err);
    }
  });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(__dirname + `/resources/${mode}/index.html`);
  const img = await page.screenshot({ encoding: "base64" });
  await browser.close();
  return img;
}
export default { HtmlImg };
