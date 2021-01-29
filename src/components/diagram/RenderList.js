import React, {useRef, useEffect} from 'react';
import SimpleDiagram from "./SimpleDiagram";

function RenderList( parentElement, node) {


    let node21 = {
        tag: "node 21",
        id: "node21",
        children: []
    }
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
        children: [node2]
    }
    let node5 = {
        tag: "node 5",
        id: "node5",
        children: [node3, node4]
    }
    let node6 = {
        tag: "node 6",
        id: "node6",
        children: [node21]
    }
    let node7 = {
        tag: "node 7",
        id: "node7",
        children: [node6, node5]
    }
    let node8 = {
        tag: "node 8",
        id: "node8",
        children: []
    }
    let node9 = {
        tag: "node 9",
        id: "node9",
        children: []
    }


    let node1 = {
        tag: "start",
        id: "node1",
        children: [node7, node8, node9]
    }
    return (
        <>
            <SimpleDiagram node={node1}/>
        </>
    );
}

export default RenderList;
