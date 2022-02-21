(async function ($) {
  const url_chapter = '../data/the_story_of_mankind/religious_warfare.html';
  $('#article').load(url_chapter, function() {
    console.log('have loaded the chapter of the content');
  });
})(jQuery);


