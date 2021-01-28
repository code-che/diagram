import React from 'react';
import Diagram, {createSchema, useSchema} from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';

function SimpleDiagram( parentElement, node) {
    // example for nodes in props : [[nodeTag, nodeId] , [nodeTag, nodeId], ... ]
    // example for links in props :

    // let ali = [
    //     { tag : "sdfa" , fg: "sdafa", fdffg: 123},
    //     { tag : "fdgs332" , fg: "tgjhjf", fdffg: 144},
    // ];
    //
    // let ali2 = [['ali', 'reza', 'hassan'], ['hossein', 'shayan', 'mammad']];
    // console.log(ali2[0].indexOf('daffsdf'));
    // for ( let temp of ali){
    //     console.log(temp);
    // }

    // console.log(parentElement);
    // console.log(parentElement.parentElement.current.offsetWidth);
    console.log(node);

    let nodes = [];
    let links = [];
    function drawTree(node, coorX, coorY, location) {
        let temp = {};
        let widthOfChildren = 0;
        let coorXChildren = {
            right: coorX,
            left: coorX,
            center: coorX,
        }
        if (node.children.length === 0 ){
            let x = calcuteX( 100, coorX, location);
            nodes.push(creatNode(node, x, coorY));
            return 100;
        }
        else if (node.children.length%2 === 0){
            let toggleLocation = "right";
            let widthThisChild = 0;
            for ( let index in node.children ){
                widthThisChild = creatNode( node.children[index], coorXChildren[toggleLocation], coorY + 200, toggleLocation);
                widthOfChildren += widthThisChild;
                toggleLocation === "right" ? coorXChildren["right"] += widthThisChild : coorXChildren["left"] -= widthThisChild;
                toggleLocation === "right" ? toggleLocation = "right" : toggleLocation = "left";

                links.push({ input: node.id, output: node.children[index].id})
            }
        }
        else {
            let toggleLocation = "center";
            let widthThisChild = 0;
            for ( let index in node.children ){
                widthThisChild = creatNode( node.children[index], coorXChildren[toggleLocation], coorY + 200, toggleLocation );
                widthOfChildren += widthThisChild;
                switch (toggleLocation) {
                    case "center":
                        coorXChildren["right"] += widthThisChild/2;
                        coorXChildren["left"] -= widthThisChild/2;
                        toggleLocation = "right";
                        break;
                    case "right":
                        coorXChildren["right"] += widthThisChild;
                        toggleLocation = "right";
                        break;
                    case "left":
                        coorXChildren["left"] -= widthThisChild;
                        toggleLocation = "left";
                        break;
                }

                links.push({ input: node.id, output: node.children[index].id})
            }
        }

        let x = calcuteX( 100, coorX, location);
        nodes.push(creatNode(node, x, coorY));

    }

    const calcuteX = ( width, parentX, location) => {
        switch (location) {
            case "center":
                return parentX;

            case "left":
                return parentX - width/2;

            case "right":
                return parentX + width/2;

        }
    }

    const creatNode = (node, coorX, coorY) => {
        return {
            id: node.id,
            content: node.tag,
            coordinates: [coorX, coorY]
        };
    }

    // drawTree(node, 800, 200, "center");

    // function searchNode(node, matchingIdNode){
    //     if(node.id === matchingIdNode){
    //         return node;
    //     }else if (node.children != null){
    //         var i;
    //         var result = null;
    //         for(i=0; result == null && i < node.children.length; i++){
    //             result = searchNode(node.children[i], matchingIdNode);
    //         }
    //         return result;
    //     }
    //     return null;
    // }

    const initialSchema = createSchema({
        nodes: [
            { id: 'node-1', content: 'Node 1', coordinates: [250, 0], },
            { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
            { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
            { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
        ],
        links: [
            { input: 'node-1',  output: 'node-2' },
            { input: 'node-1',  output: 'node-3' },
            { input: 'node-1',  output: 'node-4' },
        ]
    });

    // const initialSchema = createSchema({
    //     nodes: [
    //         ...nodes
    //     ],
    //     links: [
    //         ...links
    //     ]
    // });

    const [schema, { onChange }] = useSchema(initialSchema);
    // console.log(schema);


    return (
        <div className="Simple-diagram">
            <div style={{ height: '22.5rem' }}>
                <Diagram schema={schema} onChange={onChange} />
            </div>
        </div>
    );
}

export default SimpleDiagram;
