import React from 'react';
import ReactDOM from 'react-dom';

var Template = () => (
  <div>
    <div>
      Hello from react!
    </div>
    <img src="../public/makeyousshungry.jpg" alt="Girl in a jacket" />

  </div>
)

ReactDOM.render(<Template />, document.getElementById('root'));
