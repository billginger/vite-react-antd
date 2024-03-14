import { Flex, Radio, Card as C, Spin, Table } from 'antd'
import Title from './Title'
import Card from './Card'

const options = ['7D', '14D', '1M', '3M', 'YTD'].map(item => ({
  label: item,
  value: item,
}))

const columns = ['key', 'cpm', 'ROAS', 'spend', '# purchase', 'ctr', 'market_name', 'query_time'].map(item => {
  const title = item == 'key' ? '' : item
  return ({
    title,
    dataIndex: item,
    align: 'right',
  })
})

const Main = ({ range, setRange, loading, data, setLine }) => (
  <Flex vertical gap="middle" className="main">
    <Flex gap="middle" align="center">
      <Title>Pinned Metrics</Title>
      <Radio.Group
        size="small"
        optionType="button"
        buttonStyle="solid"
        options={options}
        value={range}
        disabled={loading}
        onChange={({ target: { value } }) => setRange(value)}
      />
    </Flex>
    <Flex gap="middle" wrap="wrap" style={{ marginBottom: 20 }}>
      {loading ? (
        <C bordered={false}>
          <Spin />
        </C>
      ) : data.cardData.map(item => (
        <Card key={item.label} data={item} setLine={setLine} />
      ))}
    </Flex>
    <Flex>
      <Title>Table Summary</Title>
    </Flex>
    <Flex>
      <Table size="middle" columns={columns} dataSource={data.tableData} loading={loading} />
    </Flex>
  </Flex>
)

export default Main
