"use strict";
/*//////////////////////////////////
         POPSCRIPT LANGUAGE
                Addon
//////////////////////////////////*/
exports.__esModule = true;
var Aliase = /** @class */ (function () {
    function Aliase() {
    }
    Aliase.prototype.exec = function (token, value, context, specs, tokens, index) {
        if (token === void 0) { token = ''; }
        if (value === void 0) { value = ''; }
        if (context === void 0) { context = []; }
        if (tokens === void 0) { tokens = []; }
        if (index === void 0) { index = 0; }
        context.push('ALIASE::DECLARE');
        return;
    };
    return Aliase;
}());
exports["default"] = Aliase;
