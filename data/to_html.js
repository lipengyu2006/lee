#!/usr/bin/env node

const fs = require('fs');

try {
  const name = process.argv[2] || '';
  const numb = process.argv[3] || 0;

  if (!name || !numb) return;

  const book = 'the_story_of_mankind';
  const path = __dirname + '/' + book + '/';
  const file_en = path + numb + '_en_' + name;
  const file_zh = path + numb + '_zh_' + name;
  const data_en = fs.readFileSync(file_en, 'UTF-8');
  const data_zh = fs.readFileSync(file_zh, 'UTF-8');

  const lines_en = data_en.split(/\r?\n/);
  const lines_zh = data_zh.split(/\r?\n/);

  const sections = [];
  let i=0, j=0;
  while (i<lines_en.length) {
    const sentence = lines_en[i++];
    if (/^img_/.test(sentence)) {
      const des = lines_en[i++];
      sections.push(
      `<div class="plate">
        <img src="../data/${ book }/${ sentence }.png">
        <p>${ des }</p>
      </div>`
      );
    } else {
      const line_zh = lines_zh[j++];
      sections.push(
      `<div class="section">
        <p>${ sentence }</p>
        <p>${ line_zh }</p>
      </div>`
      );
    }
  }

  const out_file = path + name + '.html';
  fs.writeFileSync(out_file, sections.join(''));
} catch (err) {
  console.error(err);
}