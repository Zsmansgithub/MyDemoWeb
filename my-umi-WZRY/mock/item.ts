const itemJson = [
  {
    a: 'item'
  }
]
export default {
  "POST /api/item.json": (req, res) => {
    const { a } = req.body;
    console.log(a)
    res.send(itemJson);
  }
}
