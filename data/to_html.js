#!/usr/bin/env node

const fs = require('fs');

try {
  const path = __dirname + '/the_story_of_mankind/';
  const name = 'religious_warfare';
  const chapter = '46';
  const file_en = path + chapter + '_en_' + name;
  const file_zh = path + chapter + '_zh_' + name;
  const data_en = fs.readFileSync(file_en, 'UTF-8');
  const data_zh = fs.readFileSync(file_zh, 'UTF-8');

  const lines_en = data_en.split(/\r?\n/);
  const lines_zh = data_zh.split(/\r?\n/);

  const sections = [];
  lines_en.forEach((line_en, i) => {
    sections.push(
    `<div class="section">
      <p>${line_en}</p>
      <p>${lines_zh[i]}</p>
    </div>`
    );
  });

  const out_file = path + name + '.html';
  fs.writeFileSync(out_file, sections.join(''));
} catch (err) {
  console.error(err);
}