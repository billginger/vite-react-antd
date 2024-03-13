import request from './request'

const getData = async (setData) => {
  const aggregateData = await request(true)
  const dailyData = await request(false)
  const aggregateJson = JSON.parse(aggregateData)
  const dailyJson = JSON.parse(dailyData)
  const cardData = [{
    label: 'cpm',
    value: aggregateJson.cpm[0],
    data: dailyJson.cpm,
  }, {
    label: 'ROAS',
    value: aggregateJson['purchase_roas.omni_purchase'][0],
    data: dailyJson['purchase_roas.omni_purchase'],
  }, {
    label: 'spend',
    value: aggregateJson.spend[0],
    data: dailyJson.spend,
  }, {
    label: '# purchase',
    value: aggregateJson['actions.omni_purchase'][0],
    data: dailyJson['actions.omni_purchase'],
  }, {
    label: 'ctr',
    value: aggregateJson.ctr[0],
    data: dailyJson.ctr,
  }]
  const tableData = []
  for (let i = 0; i < Object.keys(dailyJson.query_time).length; i++) {
    const queryData = new Date(dailyJson.query_time[i])
    const query_time = queryData.toJSON().slice(0, 10)
    const item = {
      key: i,
      cpm: dailyJson.cpm[i],
      ROAS: dailyJson['purchase_roas.omni_purchase'][i],
      spend: dailyJson.spend[i],
      '# purchase': dailyJson['actions.omni_purchase'][i],
      ctr: dailyJson.ctr[i],
      market_name: dailyJson.market_name[i],
      query_time,
    };
    tableData.push(item)
  }
  setData({ cardData, tableData })
}

export default getData
