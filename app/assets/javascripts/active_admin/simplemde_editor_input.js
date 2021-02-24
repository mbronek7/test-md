$(document).ready(function () {
    $('.simplemde-editor').each(function () {
        new EasyMDE( {
			element: $(this).get(0)
		});
    });
});
