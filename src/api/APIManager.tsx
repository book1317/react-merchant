export const get = async (params: any) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title: 'React POST Request Example' }),
  }
  const response = await fetch(params, requestOptions)
  const data = await response.json()
  return data
}
