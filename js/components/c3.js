define(['jquery-autotab'], function() {

    return {
        render: function() {
            var elementImportLink = document.createElement('link');
            elementImportLink.rel = 'import';
            elementImportLink.href = 'webcomponents/num-cuenta.html';
            document.head.appendChild(elementImportLink);

            /*var elementImportCSS = document.createElement('link');
            elementImportCSS.rel = 'stylesheet';
            elementImportCSS.href = 'js/libs/jquery-ui/themes/smoothness/jquery-ui.css';
            document.head.appendChild(elementImportCSS);*/

            var root = document.getElementsByTagName('body')[0];
            var el = document.createElement('num-cuenta');
            el.setAttribute('label', 'Introduce tu número de cuenta:');
            root.appendChild(el);
        }
    }
});