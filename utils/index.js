import path from "path";
import fs from "fs";

const blogsdir = path.join(process.cwd(), "content", "blogs");

export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function getBlogss() {
  const blogNames = fs.readdirSync(blogsdir);
  return blogNames;
}
export function getPortfolios() {}
