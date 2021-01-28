import React from 'react';
import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

function StormDiagram() {


    // const engine = createEngine();
    //
    // // node 1
    // const node1 = new DefaultNodeModel({
    //     name: 'Node 1',
    //     color: 'rgb(0,192,255)',
    // });
    // node1.setPosition(100, 100);
    // let port1 = node1.addOutPort('Out');
    //
    // // node 2
    // const node2 = new DefaultNodeModel({
    //     name: 'Node 1',
    //     color: 'rgb(0,192,255)',
    // });
    // node2.setPosition(100, 100);
    // let port2 = node2.addOutPort('Out');
    //
    // // link them and add a label to the link
    // const link = port1.link(port2);
    //
    // const model = new DiagramModel();
    // model.addAll(node1, node2, link);
    // engine.setModel(model);


    return (
        <>
            <div style="width:100%; height: 50vh; background-color:red;">dsf</div>
            {/*<CanvasWidget engine={engine} />*/}
        </>
    );
}

export default StormDiagram;
