"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(type, init) {
        this.type = type;
        if (init)
            Object.assign(this, init);
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map