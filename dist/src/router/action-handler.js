"use strict";
const ReactDOM = require('react-dom');
const ReactiveDOM_1 = require('reaptor-react-async/lib/ReactiveDOM');
const plop_1 = require('./plop');
var ActionHandler;
(function (ActionHandler) {
    function action(getElement, req, res) {
        if (!(getElement instanceof Function)) {
            return;
        }
        let hasTimedOut = false;
        const idTimeout = setTimeout(() => {
            res.status(408);
            hasTimedOut = true;
        }, 10000);
        const element = getElement();
        if (process.env.CLIENT) {
            console.log('IM THE CLIENT ! :D');
            return ReactDOM.render(element, document.getElementById('app-container'));
        }
        const renderedElement = ReactiveDOM_1.default.renderToStaticMarkup(plop_1.Plop.serverRendering(element));
        if ((renderedElement instanceof Promise)) {
            renderedElement.then((markup) => {
                if (!hasTimedOut) {
                    res(markup);
                    clearTimeout(idTimeout);
                }
            });
            return;
        }
        clearTimeout(idTimeout);
        res.status(200).send(renderedElement);
    }
    ActionHandler.action = action;
})(ActionHandler = exports.ActionHandler || (exports.ActionHandler = {}));
;
//# sourceMappingURL=action-handler.js.map