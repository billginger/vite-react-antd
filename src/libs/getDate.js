const getDate = dateRange => {
  let date = new Date()
  switch(dateRange) {
    case '7D':
      date.setDate(date.getDate() - 7)
      break
    case '14D':
      date.setDate(date.getDate() - 14)
      break
    case '1M':
      date.setMonth(date.getMonth() - 1)
      break
    case '3M':
      date.setMonth(date.getMonth() - 3)
      break
    case 'YTD':
      date.setFullYear(date.getFullYear() - 1)
      break
  }
  return date.toJSON().slice(0, 10)
}

export default getDate
