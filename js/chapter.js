function tmpl_head(book_name) {
  return `<a class="vm_name" href="../index.html">${ book_name }</a>`;
}

function tmpl_chapter(d, book_id) {
  return `
  <div class="vm_section">
    <div class="item">
      <a class="vm_content" href="screen.html?book=${ book_id }&chapter=${ d.id }">
        <div>${ d.en }</div>
        <div>${ d.zh }</div>
      </a>
    </div>
  </div>`;
}

function build_chapter_list(d) {
  const elm_body = document.querySelector('#chapter_body');
  const elm_list = elm_body.querySelector('.roll');

  const chapters = d.book.chapters;
  const book_id = d.book.id;
  const parts = chapters.map(i => tmpl_chapter(i, book_id));
  elm_list.innerHTML = parts.join('');
}

function build_chapter_head(d) {
  const elm_head = document.querySelector('#chapter_head');
  const elm_name = elm_head.querySelector('.vm_title');

  const book_name = d.book.name;
  const part = tmpl_head(book_name);

  elm_name.innerHTML = part;
}

function get_book() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const book = url.searchParams.get('book');
  return book || '';
}

(async function() {
  const book = get_book();
  const file = `../data/${ book }/meta.json`;
  const res = await fetch(file);

  if (200 == res.status) {
    const data = await res.json();
    build_chapter_list(data);
    build_chapter_head(data);
  }
})();
