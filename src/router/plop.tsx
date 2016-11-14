import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactAsync from 'reaptor-react-async';
import ReactiveDOM from 'reaptor-react-async/lib/ReactiveDOM';
import Button from '../lib/view/elements/button';
import Bootstrap from '../bootstrap/bootstrap';

const app = Bootstrap.Application;

export namespace Plop {

  export function serverRendering(elements: any) {
    return (
    <body>
      <div id="app-container">
      {elements}
      </div>
      <script src="client.js" />
    </body>
    );
  }

  function clicked() {
    // () => console.log('go to isting !!')
    console.log('wiojfwoifjowefjwoeijf');
  }

  export function home() {
    return (
      <div>
        <div>Welcome Home!</div>
        <div>Send me to the <button onClick={clicked}>Listing</button></div>
        <div>Send me to the <button onClick={() => goTo('listing')}>Listing</button></div>
      </div>
    );
  }

  function goTo(link: string) {
    console.log(`go ${link}`);
    app.Router.redirect(link);
  }

  export function listing() {
    return (
      <ul>
        <li><Button onClick={() => goTo('home')}>link 1</Button></li>
        <li><Button onClick={() => goTo('home')}>link 2</Button></li>
        <li><Button onClick={() => goTo('home')}>link 3</Button></li>
      </ul>
    );
  }
};
