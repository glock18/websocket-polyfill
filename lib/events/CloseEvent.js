"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseEvent = void 0;
var Event_1 = require("./Event");
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(type, init) {
        return _super.call(this, type, init) || this;
    }
    return CloseEvent;
}(Event_1.Event));
exports.CloseEvent = CloseEvent;
//# sourceMappingURL=CloseEvent.js.map