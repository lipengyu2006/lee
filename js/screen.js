function get_chapter() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const chapter = url.searchParams.get('chapter');
  return chapter || '';
}

function get_book() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const book = url.searchParams.get('book');
  return book || '';
}


(async function() {
  const book = get_book();
  const chapter = get_chapter();
  const file = `../data/${ book }/${ chapter }.html`;
  const res = await fetch(file);

  if (200 == res.status) {
    const txt = await res.text();
    const elm = document.querySelector('#article');
    elm.innerHTML = txt;
  }
})();