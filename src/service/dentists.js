async function searchDentists({endpoint}) {
  try {
    const res = await fetch(endpoint)

    if (!res.ok) {
      throw {status: res.status, statusText: res.statusText}
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
export default searchDentists
