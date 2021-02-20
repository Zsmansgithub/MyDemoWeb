let tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'
      ],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'
      ],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'
      ],
  },
];

export default {
    'POST /mockapi/table/tableDef': (req: any, res: any) => {
        try {
          const { name = '', age = '', tag = '', page = 1, limit = 20 } = req.body;
          const data = tableData.filter((item: any) => (
            (name ? item.name.includes(name) : true)
            && (age ? item.age === parseInt(age) : true)
            && (tag ? item.tags.includes(tag) : true)
            ));
          const total = data.length;
          const resData = total > page * limit ? data.slice(page * limit, limit) : data.slice(-total % limit,);
          res.send({
            code: 0,
            data: resData,
            total,
          });
        } catch(e) {
          res.send({
            msg: e,
            code: 500,
          });
        }
      },
}