requirejs.config({
    "baseUrl": "js/libs",
    "paths": {
        "jquery": "jquery/dist/jquery",
        "jquery-autotab": "jquery-autotab/jquery.autotab.min",
        "app": "../",
        "components": "../components"
    },
    shim: {
        "jquery-autotab": {
           deps: ["jquery"]
        }
    }
});

requirejs(["app/main"]);