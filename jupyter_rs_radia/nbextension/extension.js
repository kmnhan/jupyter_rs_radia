define(function () {
    "use strict";

    function load_ipython_extension() {
        require.config({
            paths: {
                "jupyter_rs_radia": "nbextensions/jupyter_rs_radia/index"
            }
        });
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
