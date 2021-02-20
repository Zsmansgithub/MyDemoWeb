import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { getDvaApp } from 'umi';

const { Option } = Select;

const Demo = ({ query }) => {
  const [form] = Form.useForm();
  form.setFieldsValue({
    name: query.name,
    age: query.age,
    tag: query.tag,
  });
  const getList = () => {
    getDvaApp()._store.dispatch({type:"tableDef/fetchTableData"});
  }
  const onFinish = (values: any) => {
    getDvaApp()._store.dispatch({type:"tableDef/save", payload: {query: Object.assign(query, values)}});
    getList();
  };
  const onReset = () => {
    getDvaApp()._store.dispatch({type:"tableDef/save", payload: {query: {
        age: undefined,
        name: undefined,
        tag: undefined,
        page: 1,
        limit: 20,
    }}});
    
    form.resetFields();
    getList();
  };

  return (
    <Form layout='inline' form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="name" label="姓名">
        <Input placeholder="请填写姓名" defaultValue={query?.name} />
      </Form.Item>
      <Form.Item name="age" label="年龄">
        <Input placeholder="请填写年龄" defaultValue={query?.tag}/>
      </Form.Item>
      {/* <Form.Item name="tag" label="标签" rules={[{ required: true }]}> */}
      <Form.Item name="tag" label="标签">
        <Select
          placeholder="请选择"
          defaultValue={query?.tag}
          allowClear
        >
          <Option value="nice">nice</Option>
          <Option value="developer">developer</Option>
          <Option value="loser">loser</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) => {
          return getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null;
        }}
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Demo
