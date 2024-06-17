import scrape from "website-scraper"; // only as ESM, no CommonJS
import SaveToExistingDirectoryPlugin from "website-scraper-existing-directory";

const options = {
  urls: [
    {
      url: "https://cityofsydnt1.valhalla10.stage.jobs2web.com/go/Available-Jobs/7439460/",
      filename: "jobs.html",
    },
    {
      url: "https://cityofsydnt1.valhalla10.stage.jobs2web.com/job/SOCIAL-POLICY-&-PROGRAMS-Social-Policy-Work-Placement-AGEN-10058/166542666/",
      filename: "job-example.html",
    },
    {
      url: "https://career10preview.sapsf.com/careers?company=cityofsydnT1",
      filename: "careers.html",
    },
  ],
  directory: "./",
  subdirectories: [
    { directory: "public/img", extensions: [".jpg", ".png", ".svg", ".ico", ".webp", ".gif", ".htc"] },
    { directory: "public/js", extensions: [".js"] },
    { directory: "public/css", extensions: [".css"] },
    {
      directory: "public/fonts",
      extensions: [".ttf", ".woff", ".woff2", ".eot"],
    },
  ],
  plugins: [new SaveToExistingDirectoryPlugin()],
};

// with async/await
const result = await scrape(options);
