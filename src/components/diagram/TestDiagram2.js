import React, {useRef, useEffect} from 'react';
import { Chart, LinearScale, Point } from 'chart.js';
// import 'react-tree-graph/dist/style.css';

function TestDiagram2( parentElement, node) {

    // let data = {
    //     name: 'Parent',
    //     children: [{
    //         name: 'Child One'
    //     }, {
    //         name: 'Child Two'
    //     }]
    // };

    // const data = {
    //     name: 'CEO',
    //     children: [
    //         {
    //             name: 'Manager',
    //             attributes: {
    //                 department: 'Production',
    //             },
    //             children: [
    //                 {
    //                     name: 'Foreman',
    //                     attributes: {
    //                         department: 'Fabrication',
    //                     },
    //                     children: [
    //                         {
    //                             name: 'Worker',
    //                             children: [
    //                                 {
    //                                     name: 'Worker 2',
    //                                 },
    //                             ],
    //                         },
    //                         {
    //                             name: 'Worker34',
    //                             children: [
    //                                 {
    //                                     name: 'Worker 2432',
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     name: 'Foreman',
    //                     attributes: {
    //                         department: 'Assembly',
    //                     },
    //                     children: [
    //                         {
    //                             name: 'Worker',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ],
    // };

    const data = `https://raw.githubusercontent.com/sgratzl/chartjs-chart-graph/master/samples/tree.json`;

    function createChart(nodes, id, type, orientation, canvas) {
        console.log("-------------------");
        console.log(canvas);
        console.log("-------------------");
        console.log(nodes);
        new Chart(canvas.getContext('2d'), {
            type,
            data: {
                labels: nodes.map((d) => d.name),
                datasets: [{
                    pointBackgroundColor: 'steelblue',
                    pointRadius: 5,
                    data: nodes.map((d) => Object.assign({}, d)),
                }]
            },
            options: {
                tree: {
                    orientation
                },
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        left: 5,
                        top: 5,
                        bottom: 5,
                        right: 5
                    }
                }
            }
        });
    }

    // fetch(data).then((r) => r.json()).then((nodes) => {
    //     createChart(nodes, 'tv', 'tree', 'vertical');
    //     // console.log(nodes);
    // });

    // const Canvas = props => {
    //
    //     const canvasRef = useRef(null);
    //
    //     useEffect(() => {
    //         const canvas = canvasRef.current;
    //         const context = canvas.getContext('2d');
    //         fetch(data).then((r) => r.json()).then((nodes) => {
    //             createChart(nodes, 'tv', 'tree', 'vertical', canvas);
    //             // console.log(nodes);
    //         });
    //         //Our first draw
    //         // context.fillStyle = '#000000';
    //         // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    //     }, []);
    //
    //     return <canvas ref={canvasRef} {...props}/>
    // };


    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        console.log(canvas);
        fetch(data).then((r) => r.json()).then((nodes) => {
            createChart(nodes, 'tv', 'tree', 'vertical', canvas);
            // console.log(nodes);
        });
        //Our first draw
        // context.fillStyle = '#039afd';
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }, []);

    return (
        <>
            <div><canvas ref={canvasRef}></canvas> </div>
        </>
    );
}

export default TestDiagram2;
