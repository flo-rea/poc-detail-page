import * as reaptor from 'reaptor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactAsync from 'reaptor-react-async';
import ReactiveDOM from 'reaptor-react-async/lib/ReactiveDOM';

import { Plop } from './plop';

export namespace ActionHandler {
    export function action(getElement: (() => JSX.Element) | undefined, req: any, res: any): any {
        if (!(getElement instanceof Function)) {
            return;
        }

        let hasTimedOut = false;
        const idTimeout = setTimeout(() => {
            res.status(408);
            hasTimedOut = true;
        }, 10000); // TODO: put the timeout value in config file.

        const element = getElement();

        if (process.env.CLIENT) {
            clearTimeout(idTimeout);
            return ReactDOM.render(element, document.getElementById('app-container'));
        }

        const renderedElement = ReactiveDOM.renderToStaticMarkup(Plop.serverRendering(element));

        if ((renderedElement instanceof Promise)) {
            renderedElement.then((markup: string) => {
                if (!hasTimedOut) {
                    // res.status(200).send(markup);
                    res(markup);
                    clearTimeout(idTimeout);
                }
            });
            return;
        }

        clearTimeout(idTimeout);
        res.status(200).send(renderedElement);
    }
};
