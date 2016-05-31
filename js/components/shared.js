define(function () {
    checkPolymerLib();

    function checkPolymerLib() {
        if (!document.querySelector('link[href="libs/polymer/polymer.html"]')) {
            var polymerLink = document.createElement('link');
            polymerLink.rel = 'import';
            polymerLink.href = 'js/libs/polymer/polymer.html';
            document.head.appendChild(polymerLink);
            console.log('Add polymer link to head');
        } else {
            console.log('Polymer link already added to head');
        }
    }

    return {
        render: function (id, text, parentId) {
            var d = document.createElement('div');
            d.setAttribute('id', id);
            var p = document.createElement('p');
            p.innerHTML = text;
            d.appendChild(p);

            var root = document.getElementsByTagName('body')[0];
            if (parentId) {
                root = document.getElementById(parentId);
            }
            root.appendChild(d);
            console.log('Se ha pintado el componente ' + id);            
        },
        renderPolymer: function (id) {
            checkElementLink();

            function checkElementLink() {
                var href = 'html/' + id + '.html';
                if (!document.querySelector('link[href="' + href + '"]')) {
                    var polymerLink = document.createElement('link');
                    polymerLink.rel = 'import';
                    polymerLink.href = href;
                    document.head.appendChild(polymerLink);
                    console.log('Add element link to head');
                } else {
                    console.log('Element link already added to head');
                }
            }
        }
    }
});