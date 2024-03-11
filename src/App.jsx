import { Col, Row } from 'antd'
import './App.css'

const App = () => (
  <Row>
    <Col span={16} className="main">
      Main
    </Col>
    <Col span={8}>
      Sider
    </Col>
  </Row>
)

export default App
