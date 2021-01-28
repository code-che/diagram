import React, {useRef, useEffect} from 'react';
import SimpleDiagram from "./SimpleDiagram";

function RenderList( parentElement, node) {


    let node2 = {
        tag: "node 2",
        id: "node2",
        children: []
    }
    let node3 = {
        tag: "node 3",
        id: "node3",
        children: []
    }
    let node4 = {
        tag: "node 4",
        id: "node4",
        children: []
    }
    let node5 = {
        tag: "node 5",
        id: "node5",
        children: []
    }

    let node1 = {
        tag: "start",
        id: "node1",
        children: [node2, node3, node4, node5]
    }
    return (
        <>
            <SimpleDiagram node={{tag:"dfsa", id:"dsaf", children: [1,2]}}/>
        </>
    );
}

export default RenderList;
