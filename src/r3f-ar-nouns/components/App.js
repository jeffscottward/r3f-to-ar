import NounCanvas from './NounCanvas';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Dropdown, Navbar, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [autoRotate, setAutoRotate] = useState(false);

  const [head, setHead] = useState('rabbit'); //crab
  const [glasses, setGlasses] = useState('orange'); //blue
  const [body, setBody] = useState('purple'); //lightblue
  const [pants, setPants] = useState('grey'); //black

  return (
    <div className="full-width">
      <div className="nouns-canvas">
        <NounCanvas autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
      </div>
    </div>
  );
};

export default App;
