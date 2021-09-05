import React, { PureComponent } from 'react';
import VisGraph from './assets/js/visgraph.min.js';
import { config } from './assets/canvasConfig.js'
import LayoutFactory from './assets/js/visgraph-layout.min.js';
import './index.css';

export class canvas extends PureComponent {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.visGraph = null;
    }

    componentDidMount() {


        if (this.visGraph === null) {
            this.createCanvas()
        } else {
            this.refreshCanvas()
        }



        // this.visGraph = new VisGraph(this.ref.current, config);//初始化绘图客户端
        // this.visGraph.drawData(graphData);//绘制图完成

    }

    // 执行布局算法
    layoutCanvas() {
        var layout = new LayoutFactory(this.visGraph.getVisibleData()).createLayout('fastFR')
        layout.initAlgo()
        let i = 0
        while (i++ < 300) {
            layout.runLayout()
        }
        // this.loading = false
    }

    // 刷新知识图谱
    refreshCanvas() {

        const graphData = {
            nodes: [{ id: '1', label: '刘备', type: '男', properties: { age: 50 } },
            { id: '2', label: '关羽', type: '男' },
            { id: '3', label: '张飞', type: '男' }],
            links: [{ source: '1', target: '2', label: '二弟', properties: { other: 'other prop' } },
            { source: '1', target: '3', label: '三弟' }]
        };


        this.visGraph.clearAll()
        this.visGraph.drawData(graphData)
        this.layoutCanvas()
    }

    // 创建canvas
    createCanvas() {
        this.visGraph = new VisGraph(this.ref.current, config)
        this.refreshCanvas()
    }

    render() {
        return (
            <div id="graph-panel" ref={this.ref} className="graph-panel">
                111
            </div>
        )
    }
}

export default canvas
