import { Flex, Radio, Card, Table } from 'antd'
import Title from './Title'

const columns = ['cpm', 'ROAS', 'spend', '# purchase', 'ctr', 'market_name', 'query_time'].map(item => ({
  title: item,
  dataIndex: item,
}))

const Main = ({ data }) => (
  <Flex vertical gap="middle" className="main">
    <Flex gap="middle" align="center">
      <Title>Pinned Metrics</Title>
      <Radio.Group defaultValue="7d" size="small" buttonStyle="solid">
        <Radio.Button value="7d">7D</Radio.Button>
        <Radio.Button value="14d">14D</Radio.Button>
        <Radio.Button value="1m">1M</Radio.Button>
        <Radio.Button value="3m">3M</Radio.Button>
        <Radio.Button value="ytd">YTD</Radio.Button>
      </Radio.Group>
    </Flex>
    <Flex gap="middle">
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
      <Card>4</Card>
      <Card>5</Card>
    </Flex>
    <Flex>
      <Title>Table Summary</Title>
    </Flex>
    <Flex>
      <Table columns={columns} dataSource={data.table} />
    </Flex>
  </Flex>
)

export default Main
