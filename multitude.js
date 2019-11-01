System.register("multitude", [], function (exports_1, context_1) {
    "use strict";
    var Multitude;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Multitude = class Multitude {
                constructor(element) {
                    console.log(element.nodeType);
                }
            };
            exports_1("default", Multitude);
        }
    };
});
System.register("index", ["multitude"], function (exports_2, context_2) {
    "use strict";
    var multitude_1, select;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (multitude_1_1) {
                multitude_1 = multitude_1_1;
            }
        ],
        execute: function () {
            select = new multitude_1.default(document.querySelector("select"));
        }
    };
});
//# sourceMappingURL=multitude.js.map