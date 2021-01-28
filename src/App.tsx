import React, {useRef} from 'react';
import SimpleDiagram from "./components/diagram/SimpleDiagram";
import RenderList from "./components/diagram/RenderList";
import TestDiagram from "./components/diagram/TestDiagram";
import TestDiagram2 from "./components/diagram/TestDiagram2";
import StormDiagram from "./components/diagram/StormDiagram";
import Storm from "./components/diagram/Storm";
import './App.css';

function App() {

    const parentElement = useRef(null);

    // console.log(parentElement);
    return (
        <>
            {/*<div className="App" ref={parentElement}>*/}
            {/*    <SimpleDiagram parentElement={parentElement}/>*/}
            {/*</div>*/}
            <div className="App" ref={parentElement}>
                <RenderList/>
            </div>
            <div className="test">
                <TestDiagram/>
            </div>
            {/*<div className="test2">*/}
            {/*    <TestDiagram2/>*/}
            {/*</div>*/}
            {/*<div className="storm">*/}
            {/*    <Storm/>*/}
            {/*</div>*/}
        </>

    );
}

export default App;
