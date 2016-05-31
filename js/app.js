requirejs.config({
    "baseUrl": "js/libs",
    "paths": {
        "jquery": "jquery/dist/jquery",
        "jqueryUI": "jquery-ui/jquery-ui",
        "app": "../",
        "components": "../components"
    },
    shim: {
        "jqueryUI": {
            export:"$" ,
            deps: ["jquery"]
        }
    }
});

requirejs(["app/main"]);