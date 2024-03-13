import { Flex, Radio, Card as C, Spin, Table } from 'antd'
import Title from './Title'
import Card from './Card'

const columns = ['key', 'cpm', 'ROAS', 'spend', '# purchase', 'ctr', 'market_name', 'query_time'].map(item => {
  const title = item == 'key' ? '' : item
  return ({
    title,
    dataIndex: item,
    align: 'right',
  })
})

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
    <Flex gap="middle" wrap="wrap" style={{ marginBottom: 20 }}>
      {data.cardData?.length ? data.cardData.map(item => (
        <Card key={item.label} data={item} />
      )) : (
        <C bordered={false}>
          <Spin />
        </C>
      )}
    </Flex>
    <Flex>
      <Title>Table Summary</Title>
    </Flex>
    <Flex>
      <Table size="middle" columns={columns} dataSource={data.tableData} loading={!data.tableData?.length} />
    </Flex>
  </Flex>
)

export default Main
