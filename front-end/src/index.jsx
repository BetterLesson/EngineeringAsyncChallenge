import React from 'react';
import ReactDOM from 'react-dom';
import route from './router';

ReactDOM.render(
  (
    <>
    {route(window.location.pathname)}
    </>
  ),
  document.getElementById('root')
);