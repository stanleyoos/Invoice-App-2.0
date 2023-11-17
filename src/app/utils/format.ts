const amountFormat = (amount: number): string => {
  return `$${amount / 100}`
}

const dateFormat = (date: string): string => {
  const newDate = new Date(date)

  let day = newDate.getDate().toString()
  let month = String(newDate.getMonth() + 1)
  let year = newDate.getFullYear().toString()

  if (day.length === 1) day = "0" + day
  if (month.length === 1) month = "0" + month

  return `${year}-${month}-${day}`
}

export { dateFormat, amountFormat }
