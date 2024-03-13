import { Flex, Card as C } from 'antd'

const Card = ({ data }) => (
  <C bordered={false} size="small" hoverable>
    <Flex>
      <Flex vertical style={{ width: 110 }}>
        <Flex style={{ color: '#999' }}>{data.label}</Flex>
        <Flex>{data.value}</Flex>
      </Flex>
      <Flex style={{ width: 110 }}>chart</Flex>
    </Flex>
  </C>
)

export default Card
