!function(o){"use strict";wp.customize("amp_customizer[header_color]",(function(e){e.bind((function(e){o(".amp-wp-header a").css("color",e),o(".amp-wp-header div").css("color",e),o(".amp-wp-header .amp-wp-site-icon").css("border-color",e).css("background-color",e)}))})),wp.customize("amp_customizer[header_background_color]",(function(e){e.bind((function(e){o("html, .amp-wp-header").css("background-color",e),o(".amp-wp-article a, .amp-wp-article a:visited, .amp-wp-footer a, .amp-wp-footer a:visited").css("color",e),o("blockquote, .amp-wp-byline amp-img").css("border-color",e)}))})),wp.customize("amp_customizer[color_scheme]",(function(e){e.bind((function(e){var c=amp_customizer_design.color_schemes[e];c?(o("body").css("background-color",c.theme_color),o("body, a:hover, a:active, a:focus, blockquote, .amp-wp-article, .amp-wp-title").css("color",c.text_color),o(".amp-wp-meta, .wp-caption .wp-caption-text, .amp-wp-tax-category, .amp-wp-tax-tag, .amp-wp-footer p").css("color",c.muted_text_color),o(".wp-caption .wp-caption-text, .amp-wp-comments-link a, .amp-wp-footer").css("border-color",c.border_color),o(".amp-wp-iframe-placeholder, amp-carousel, amp-iframe, amp-youtube, amp-instagram, amp-vine").css("background-color",c.border_color)):console.error('Selected color scheme "%s" not registered.',e)}))})),wp.customize("blogname",(function(e){e.bind((function(e){o(".amp-wp-header .amp-site-title, .amp-wp-footer h2").text(e)}))}))}(jQuery);