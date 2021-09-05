export const config = {
  node: { // 节点的默认配置
    label: { // 标签配置
      show: true, // 是否显示
      color: '0,0,0', // 字体颜色
      font: '16px 微软雅黑', // 字体大小及类型
      wrapText: false, // 节点包裹文字
      textPosition: 'Middle_Center'// 文字位置 Top_Center,Bottom_Center,Middle_Right
    },
    shape: 'circle', // 节点形状 circle,rect,square,ellipse,triangle,star,polygon,text
    // image:'images/T1030001.svg',//节点图标(设置后节点显示为圆形图标)
    color: '255,255,255', // 节点颜色
    borderColor: '255,255,255', // 边框颜色
    borderWidth: 2, // 边框宽度,
    lineDash: [0], // 边框虚线间隔,borderWidth>0时生效
    alpha: 1, // 节点透明度
    size: 60, // 节点大小
    selected: { // 选中时的样式设置
      borderColor: '50,120,230', // 选中时边框颜色
      borderAlpha: 1, // 选中时的边框透明度
      borderWidth: 8, // 选中是的边框宽度
      showShadow: false, // 是否展示阴影
      shadowColor: '50,100,250'// 选中是的阴影颜色
    }
  },
  link: { // 连线的默认配置
    label: { // 连线标签
      show: true, // 是否显示
      color: '255,0,0', // 字体颜色
      font: '12px 微软雅黑'// 字体大小及类型
    },
    lineType: 'direct', // 连线类型,direct,curver,vlink,hlink,bezier,vbezier,hbezier
    colorType: 'defined', // 连线颜色类型 source:继承source颜色,target:继承target颜色 both:用双边颜色，defined:自定义
    color: '144,147,153', // 连线颜色
    alpha: 0.8, // 连线透明度
    lineWidth: 1, // 连线宽度
    lineDash: [0], // 虚线间隔样式如：[5,8]
    showArrow: false, // 显示箭头
    selected: { // 选中时的样式设置
      color: '250,50,50', // 选中时的颜色
      alpha: 1,
      showShadow: false, // 是否展示阴影
      shadowColor: '250,40,30'// 选中连线时的阴影颜色
    }
  },
  highLightNeiber: true, // 相邻节点高度标志
  wheelZoom: 0.8// 滚轮缩放开关，不使用时不设置[0,1]
}
