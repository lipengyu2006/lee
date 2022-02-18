(async function ($) {
  load_sections($);
  listen_content_head($);
  listen_nav($);
})(jQuery);

function listen_nav($) {
  $('#btn_layout_simple').click(function() {
    layout_simple($);
  });
  $('#btn_layout_reset').click(function() {
    layout_reset($);
  });
  $('#btn_nav_close').click(function() {
    navigation_close($);
  });
  $('#btn_nav_open').click(function() {
    navigation_open($);
  });
}

function listen_chapter($) {
  $('#btn_chapter_close').click(function() {
    chapter_close($);
  });
  $('#btn_chapter_open').click(function() {
    chapter_open($);
  });
}

function listen_content_head($) {
  $('#btn_content_head_close').click(function() {
    content_head_close($);
  });
  $('#btn_content_head_open').click(function() {
    content_head_open($);
  });
}

function load_sections($) {
  const url_nav = './html/nav.html';
  $('#nav').load(url_nav, function() {
    console.log('have loaded nav bar');
  });
  const url_content = './html/content.html';
  $('#content').load(url_content, function() {
    listen_chapter($);
  });
}

function layout_simple($) {
  content_head_close($);
  navigation_close($);
  chapter_close($);
  $('#btn_layout_simple').addClass('hidden');
  $('#btn_layout_reset').removeClass('hidden');
}

function layout_reset($) {
  content_head_open($);
  navigation_open($);
  chapter_open($);
  $('#btn_layout_simple').removeClass('hidden');
  $('#btn_layout_reset').addClass('hidden');
}

function content_head_close($) {
  $('#content_head').addClass('hidden');
  $('#btn_content_head_open').removeClass('hidden');
  $('#btn_content_head_close').addClass('hidden');
}

function content_head_open($) {
  $('#content_head').removeClass('hidden');
  $('#btn_content_head_open').addClass('hidden');
  $('#btn_content_head_close').removeClass('hidden');
}

function navigation_close($) {
  $('#nav').addClass('hidden');
  $('#btn_nav_close').addClass('hidden');
  $('#btn_nav_open').removeClass('hidden');
  $('#nav_bar').addClass('hidden');
}

function navigation_open($) {
  $('#nav').removeClass('hidden');
  $('#btn_nav_close').removeClass('hidden');
  $('#btn_nav_open').addClass('hidden');
  $('#nav_bar').removeClass('hidden');
}

function chapter_close($) {
  $('#chapter').addClass('hidden');
  $('#btn_chapter_close').addClass('hidden');
  $('#btn_chapter_open').removeClass('hidden');
  $('#chapter_bar').addClass('hidden');
}

function chapter_open($) {
  $('#chapter').removeClass('hidden');
  $('#btn_chapter_close').removeClass('hidden');
  $('#btn_chapter_open').addClass('hidden');
  $('#chapter_bar').removeClass('hidden');
}