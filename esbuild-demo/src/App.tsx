import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1 className='heading heading--main'>
        Transpiling and Bundling with esbuild-wasm
      </h1>

      <div className='paragraph paragraph--time'>
        Posted on <span>May 04, 2022</span>
      </div>

      <div className='section-text'>
        <h2 className='heading heading--section-text'>Transpiling</h2>
        <p className='paragraph paragraph--section-text'>
          Transpiling is a way of converting one high level language to another
          high level language. For example, Typescript can be transpiled into
          JavaScript which can be interpreted by the browser. Or Babel for
          example can transpile ES6 JavaScript code into ES5 JavaScript code,
          which makes applications more compatible with most of the modern
          browsers.
        </p>
      </div>

      <div className='section-text'>
        <h2 className='heading heading--section-text'>Bundling</h2>
        <p className='paragraph paragraph--section-text'>
          Bundling is the output of a process that merges all JavaScript modules
          into a few &#10098;in not single&#10099; file in the most optimized
          manner. For example, webpack is one of the popular bundlers that make
          sure modules are linked together and working properly.
        </p>
      </div>

      <div className='section-text'>
        <h2 className='heading heading--section-text'>esbuild-wasm</h2>
        <p className='paragraph paragraph--section-text'>
          esbuild is essentially a tool that can perform both transpiling and
          bundling tasks in a very short of time comparing to other transpilers
          and bundlers. It supports bundling between many different file types,
          like JavaScript, Typescript, JSX, and CSS. <br /> <br />
          esbuild-wasm is the WebAssembly version that works only in browser.
          So, it does not depend on local machine and node, everything will be
          done in browser. According to the official documentation at current
          time, the performance is relatively slow and limited comparing to
          esbuild local version.
        </p>
      </div>

      <div className='section-text'>
        <h2 className='heading heading--section-text'>Application</h2>
        <p className='paragraph paragraph--section-text'>
          This application will be used as a demo of first-time using
          esbuild-wasm@0.14.38. The application simply has one text area for
          user to type JSX code, one submit button that calls esbuild to
          transpile and bundle the code, and finally a section to show the
          resulting code.
        </p>
      </div>

      <div className='section-code'>
        <pre>
          <code>
            {`App.tsx

import React, { useState } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setCode('');
  };

  return (
    <>
      <textarea value={input} onChange={onChange}></textarea>
      <button onClick={onClick}>Submit</button>
      <pre>{code}</pre>
    </>
  );
};

export default App;`}
          </code>
        </pre>
      </div>

      <div className='section-next-page'>
        <Link to='/initialization'>Next Page</Link>
      </div>
    </div>
  );
};

export default App;
