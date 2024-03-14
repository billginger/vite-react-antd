import { Flex, Card as C } from 'antd'
import { Tiny } from '@ant-design/plots'

const Card = ({ data, setLine }) => {
  const config = {
    data: data.data,
    width: 110,
    height: 70,
    shapeField: 'smooth',
    xField: 'date',
    yField: 'value',
  }
  return (
    <C bordered={false} size="small" hoverable onClick={() => setLine(data)}>
      <Flex>
        <Flex vertical style={{ width: 110 }}>
          <Flex style={{ color: '#999' }}>{data.label}</Flex>
          <Flex>{data.value}</Flex>
        </Flex>
        <Flex style={{ width: 110 }}>
          <Tiny.Line className="tinyLine" {...config} />
        </Flex>
      </Flex>
    </C>
  )
}

export default Card
