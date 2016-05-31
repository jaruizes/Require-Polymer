define(['components/shared', 'components/c2'], function(shared, c2) {

    var text = 'Este es el componente 1';
    var id = 'c1';

    return {
        render: function() {
            shared.render(id,text);
            c2.render(id);
        }
    }
});