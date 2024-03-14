import { useState, useEffect } from 'react'
import { ConfigProvider, theme, Col, Row } from 'antd'
import Main from './components/Main'
import Sider from './components/Sider'
import getData from './libs/getData'
import './App.css'

const defaultCardData = []
const defaultTableData = []
const defaultData = { defaultCardData, defaultTableData }

const App = () => {
  const [range, setRange] = useState('7D')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(defaultData)
  const [line, setLine] = useState(null)

  useEffect(() => {
    (async function () {
      setLoading(true)
      setLine(null)
      const data = await getData(range)
      setLoading(false)
      setData(data)
    })()
  }, [range])

  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorBgContainer: '#003764',
      },
    }}>
      <Row>
        <Col span={16} className="main-container">
          <Main range={range} setRange={setRange} loading={loading} data={data} setLine={setLine} />
        </Col>
        <Col span={8}>
          <Sider data={line} />
        </Col>
      </Row>
    </ConfigProvider>
  )
}

export default App
