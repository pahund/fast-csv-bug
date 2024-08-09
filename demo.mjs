import { format } from "@fast-csv/format";
import { createWriteStream } from "fs";

const resultPath = "demo.csv";

const writeA11yIssuesToCsvFile = () =>
  new Promise((resolve, reject) => {
    const writeStream = createWriteStream(resultPath);

    writeStream.on("error", (err) => {
      console.error("Something is wrong:", err);
      reject(err);
    });
    writeStream.on("finish", (results) => {
      console.log("Done!");
      resolve(results);
    });

    const csvStream = format({ headers: true });

    csvStream.pipe(writeStream);
    csvStream.on("error", reject);

    csvStream.write([
      "Column A",
      "Column B",
      "Column C",
      "Column D",
    ]);

    for (let i = 1; i <= 10000; i++) {
      csvStream.write([
        `A-${i}`,
        `B-${i}`,
        `C-${i}`,
        `D-${i}`,
      ]);
    }

    csvStream.end();
    writeStream.end();
  });

await writeA11yIssuesToCsvFile();
