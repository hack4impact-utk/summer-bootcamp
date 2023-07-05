import React from 'react';

function App() {
  const [text, setText] = React.useState('');

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <div className="columns mb-6">
        <div className="column is-full">
          <h1 className="title is-2">React Basic App</h1>
        </div>
      </div>
      <div className="columns">
        <div id="input" className="column is-half">
          <div className="columns">
            <div className="column is-half">
              <input
                type="text"
                id="text-input"
                className="input"
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div id="text-display" className="column is-half">
          <div className="columns">
            <div className="column is-full">
              <h1 id="text" className="title">
                {text}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
