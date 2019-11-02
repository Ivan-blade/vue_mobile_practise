export function formatSongDetail (val) {
  const newVal = []
  val.forEach((item) => {
    const detail = {}
    detail.id = item.id
    detail.al = Object.assign({}, item.al || item.song.album)
    detail.ar = [].concat(item.ar || item.song.artists)
    newVal.push(detail)
  })
  return newVal
}
