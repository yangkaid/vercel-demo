module.exports = async (req, res) => {
  const data = {
    msg: 'Hello World'
  }
  res.status(200).json(data)
}
