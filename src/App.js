import React, { useRef } from 'react';
import VisGraph from './assets/js/visgraph.min.js'
// import LayoutFactory from './assets/js/visgraph-layout.min.js'
import './index.css';

function App() {
    const cRef = useRef(null);
    const graphData = {
        nodes: [
            { id: '1', label: '刘备', type: '男', properties: { age: 50 } },
            { id: '2', label: '关羽', type: '男' },
            { id: '3', label: '张飞', type: '男' }
        ],
        links: [
            { source: '1', target: '2', label: '二弟', properties: { other: 'other prop' } },
            { source: '1', target: '3', label: '三弟' }
        ]
    };

    // const CvisGraph = new VisGraph(cRef.current);//初始化绘图客户端
    // console.error(CvisGraph, 'CvisGraph');

    let visGraph = new VisGraph(cRef.curren);

    //调用绘图方法，绘制关系图
    visGraph.drawData(graphData);


    // this.visGraph.drawData(graphData);//绘制图完成

    return (
        <div id="graph-panel" ref={cRef} className="graph-panel">
            111
        </div>
    )
}

export default App
