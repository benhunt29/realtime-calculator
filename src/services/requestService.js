const fetch = window.fetch

export const get = async (url, requestOptions = {}) => {
  const resp = await fetch(url, requestOptions)
  return resp.json()
}
