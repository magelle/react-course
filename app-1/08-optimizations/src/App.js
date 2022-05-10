import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const [allowToggle, setAllowToggle] = useState();

  console.log('APP RUNNING');

  const onShowParagraphHandler = useCallback(() => {
      if (allowToggle) setShowParagraph(prevShowParagraph => !prevShowParagraph)
    }, [allowToggle]);

  const onAllowToggleHandler = () => setAllowToggle(prev => !prev)

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={onAllowToggleHandler}>Allow Toggling</Button>
      <Button onClick={onShowParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
