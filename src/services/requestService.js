const fetch = window.fetch

export const get = async (url, requestOptions = {}) => {
  const resp = await fetch(url, requestOptions)
  return resp.json()
}

export const post = async (url, requestOptions = { }) => {
  const resp = await fetch(url, {
    ...requestOptions,
    body: JSON.stringify(requestOptions.body),
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json; charset=utf-8' }})
  return resp
}
