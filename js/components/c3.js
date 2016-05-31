define(['jqueryUI'], function() {

    return {
        render: function() {
            var elementImportLink = document.createElement('link');
            elementImportLink.rel = 'import';
            elementImportLink.href = 'webcomponents/my-button.html';
            document.head.appendChild(elementImportLink);

            var elementImportCSS = document.createElement('link');
            elementImportCSS.rel = 'stylesheet';
            elementImportCSS.href = 'js/libs/jquery-ui/themes/smoothness/jquery-ui.css';
            document.head.appendChild(elementImportCSS);

            var root = document.getElementsByTagName('body')[0];
            var el = document.createElement('my-button');
            root.appendChild(el);
        }
    }
});