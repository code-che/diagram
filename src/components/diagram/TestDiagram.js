import React, {useState} from 'react';
import Tree from 'react-d3-tree';
import 'react-tree-graph/dist/style.css';

function TestDiagram( parentElement, node) {

    // let data = {
    //     name: 'Parent',
    //     children: [{
    //         name: 'Child One'
    //     }, {
    //         name: 'Child Two'
    //     }]
    // };

    const data = {
        name: 'CEO',
        children: [
            {
                name: 'Manager',
                attributes: {
                    department: 'Production',
                },
                children: [
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Fabrication',
                        },
                        children: [
                            {
                                name: 'Worker',
                                children: [
                                    {
                                        name: 'Worker 2',
                                    },
                                ],
                            },
                            {
                                name: 'Worker34',
                                children: [
                                    {
                                        name: 'Worker 2432',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                ],
            },
        ],
    };

    // const initialSchema = createSchema({
    //     nodes: [
    //         { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
    //         { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
    //         { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
    //         { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
    //     ],
    //     links: [
    //         { input: 'node-1',  output: 'node-2' },
    //         { input: 'node-1',  output: 'node-3' },
    //         { input: 'node-1',  output: 'node-4' },
    //     ]
    // });

    return (
        <Tree
            data={data}
            svgClassName="svg"
            branchNodeClassName="node__branch"
            orientation="vertical"
            pathClassFunc={() => 'custom-link'}
        />
    );
}

export default TestDiagram;
