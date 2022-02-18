(async function ($) {
  const url_chapter = './html/chapter.html';
  $('#chapter').load(url_chapter, function() {
    console.log('have loaded chapter the content');
  });
  const url_screen = './html/screen.html';
  $('#screen').load(url_screen, function() {
    console.log('have loaded the screen of the content');
    const url_chapter = './data/the_story_of_mankind/religious_warfare.html';
    $('#article').load(url_chapter, function() {
      console.log('have loaded the chapter of the content');
    });
  });
})(jQuery);


