$(document).ready(function () {
    $('.simplemde-editor').each(function () {
        options = $.extend({}, options, $(this).data('options'));
        new EasyMDE( {
			element: $(this).get(0)
		});
    });
});
