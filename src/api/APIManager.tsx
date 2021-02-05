export const get = async (params: any) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title: 'React POST Request Example' }),
  }
  const response = await fetch(params, requestOptions)
  const data = await response.json()
  console.groupCollapsed(
    `%cREQUESTED %cGET ${params}`,
    'color: DodgerBlue',
    'color: inherit'
  )
  console.log(data)
  console.groupEnd()
  return data
}
