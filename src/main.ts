import * as Reaptor from 'reaptor';
import * as React from 'react';
import Bootstrap from './bootstrap/bootstrap';

const app = new Bootstrap();

app.start()
  .then(() => {
    console.log('loaded');
  });
