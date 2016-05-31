define(['components/shared', 'components/c3'], function(shared, c3) {

    var text = 'Este es el componente 2';
    var id = 'c2';

    return {
        render: function(parentId) {
            shared.render(id,text,parentId);
            c3.render(id);
        }
    }
});