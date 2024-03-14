import getDate from './getDate'
import request from './request'

const getData = async (dateRange) => {
  const startDate = getDate(dateRange)
  const aggregateData = await request(startDate, true)
  const dailyData = await request(startDate, false)
  const aggregateJson = JSON.parse(aggregateData)
  const dailyJson = JSON.parse(dailyData)
  const tableData = []
  const cpmData = []
  const roasData = []
  const spendData = []
  const purchaseData = []
  const ctrData = []
  for (let i = 0; i < Object.keys(dailyJson.query_time).length; i++) {
    const queryTime = new Date(dailyJson.query_time[i]).toJSON().slice(0, 10)
    const shortDate = queryTime.slice(5)
    const tableItem = {
      key: i,
      cpm: dailyJson.cpm[i],
      ROAS: dailyJson['purchase_roas.omni_purchase'][i],
      spend: dailyJson.spend[i],
      '# purchase': dailyJson['actions.omni_purchase'][i],
      ctr: dailyJson.ctr[i],
      market_name: dailyJson.market_name[i],
      query_time: queryTime,
    }
    const cpmItem = {
      value: dailyJson.cpm[i],
      date: shortDate,
    }
    const roasItem = {
      value: dailyJson['purchase_roas.omni_purchase'][i],
      date: shortDate,
    }
    const spendItem = {
      value: dailyJson.spend[i],
      date: shortDate,
    }
    const purchaseItem = {
      value: dailyJson['actions.omni_purchase'][i],
      date: shortDate,
    }
    const ctrItem = {
      value: dailyJson.ctr[i],
      date: shortDate,
    }
    tableData.push(tableItem)
    cpmData.push(cpmItem)
    roasData.push(roasItem)
    spendData.push(spendItem)
    purchaseData.push(purchaseItem)
    ctrData.push(ctrItem)
  }
  const cardData = [{
    label: 'cpm',
    value: aggregateJson.cpm[0],
    data: cpmData,
  }, {
    label: 'ROAS',
    value: aggregateJson['purchase_roas.omni_purchase'][0],
    data: roasData,
  }, {
    label: 'spend',
    value: aggregateJson.spend[0],
    data: spendData,
  }, {
    label: '# purchase',
    value: aggregateJson['actions.omni_purchase'][0],
    data: purchaseData,
  }, {
    label: 'ctr',
    value: aggregateJson.ctr[0],
    data: ctrData,
  }]
  return { cardData, tableData }
}

export default getData
