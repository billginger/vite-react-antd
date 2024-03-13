import { useState, useEffect } from 'react'
import { ConfigProvider, theme, Col, Row } from 'antd'
import Main from './components/Main'
import getData from './libs/getData'
import './App.css'

const defaultCardData = []
const defaultTableData = []
const defaultData = { defaultCardData, defaultTableData }

const App = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    getData(setData)
  }, []);

  console.log(data)

  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorBgContainer: '#003764',
      },
    }}>
      <Row>
        <Col span={16} className="main-container">
          <Main data={data} />
        </Col>
        <Col span={8}>
          Sider
        </Col>
      </Row>
    </ConfigProvider>
  )
}

export default App
