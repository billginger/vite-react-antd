import { Typography } from 'antd'

const T = Typography.Title

const Title = ({ children }) => (
  <T level={4} className="title">
    {children}
  </T>
)

export default Title
