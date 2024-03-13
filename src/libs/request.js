import sleep from './sleep'

const fetchHeaders = {
  'x-api-key': 'shulabs_data_fetcher_api_key',
}

const dataRequest = async (aggregation) => {
  const startDate = new Date()
  startDate.setMonth(startDate.getMonth() - 3)
  const endDate = new Date()
  const start_time = startDate.toJSON().slice(0, 10)
  const end_time = endDate.toJSON().slice(0, 10)
  const fetchUrl = 'https://z62x5u2bnl.execute-api.us-east-1.amazonaws.com/dev/dataRequest'
  const fetchBody = {
    user_id: 'gifteal',
    x_level: 'ad_market',
    y_level: 'ad_market',
    y: ['gifteal_global'],
    start_time,
    end_time,
    aggregation,
  }
  try {
    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: fetchHeaders,
      body: JSON.stringify(fetchBody),
    })
    if (!response.ok) {
      throw new Error('api error')
    }
    return response.json()
  } catch (error) {
    console.error('dataRequest error:', error)
  }
}

const dataStatus = async (job_id) => {
  const fetchUrl = 'https://z62x5u2bnl.execute-api.us-east-1.amazonaws.com/dev/dataStatus'
  const fetchBody = { job_id }
  try {
    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: fetchHeaders,
      body: JSON.stringify(fetchBody),
    })
    if (!response.ok) {
      throw new Error('api error')
    }
    return response.json()
  } catch (error) {
    console.error('dataStatus error:', error)
  }
}

const request = async (aggregation) => {
  try {
    let data = await dataRequest(aggregation)
    if (data.status == 'success' || data.status == 'error') {
      return data.value
    }
    while (true) {
      await sleep(1000)
      data = await dataStatus(data.job_id)
      if (data.status == 'success' || data.status == 'error') {
        return data.value
      }
    }
  } catch (error) {
    console.error('request error:', error)
  }
}

export default request
