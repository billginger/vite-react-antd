import { Col, Row } from 'antd'
import Main from './components/Main'
import './App.css'

const App = () => {
  const data = {
    table: []
  }
  return (
    <Row>
      <Col span={16} className="main-container">
        <Main data={data} />
      </Col>
      <Col span={8}>
        Sider
      </Col>
    </Row>
  )
}

export default App
