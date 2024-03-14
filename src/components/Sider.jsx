import { Line } from '@ant-design/plots'

const Sider = ({ data }) => {
  if (data == null) {
    return <></>
  }
  const config = {
    data: data.data,
    height: 220,
    xField: 'date',
    yField: 'value',
    style: {
      lineWidth: 2,
    },
    axis: {
      x: {
        labelAutoRotate: false,
        tickStroke: '#fff',
        labelFill: '#fff',
        gridStroke: '#fff',
      },
      y: {
        tickStroke: '#fff',
        labelFill: '#fff',
        gridLineDash: [20, 2],
        gridStroke: '#fff',
        gridStrokeOpacity: 0.8,
      },
    },
  }
  return (
    <div className="sider">
      <div className="line-container">
        <div className="line-title">{data.label}</div>
        <Line {...config} />
      </div>
    </div>
  )
}

export default Sider
