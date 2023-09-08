/**
 * command: node ./main.mjs <csvFilePath> <exportPath>
 * 
 * csv example:
 * 
 * key,en-US,zh-CN,zh-HK
 * hello,hello,你好,你好
 * 
 */

import csv from 'csvtojson';
import fs from 'fs';

// csv config
const config = {};

const reformatJsonToFileFormat = (json) => {
  const files = {};
  for (const row of json) {
    const key = row.key;
    for (const [locale, text] of Object.entries(row)) {
      if (locale === 'key') continue;
      if (files[locale] == null) files[locale] = {};

      files[locale][key] = text;
    }
  }
  return files;
};

const csv2Json = async (importFile, exportPath) => {
  const jsonArrayCommon = await csv(config).fromFile(importFile);
  const localeFilesJson = reformatJsonToFileFormat(jsonArrayCommon);

  for (const [locale, content] of Object.entries(localeFilesJson)) {
    fs.writeFileSync(`${exportPath}${locale}.json`, JSON.stringify(content));
  }
};

const main = () => {
  const csvFilePath = process.argv[2];
  const exportPath = process.argv[3];

  csv2Json(csvFilePath, exportPath);
};

main();
