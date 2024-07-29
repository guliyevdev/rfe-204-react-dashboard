import { Button, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log(values);
}

const onFinishFailed = () => {
    console.log("finish failed");
}



export const AddCustomers = () => {
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true, message: 'Please input your Company Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Contact title"
                    name="contactTitle"
                    rules={[{ required: true, message: 'Please input your Contact Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your City Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Country"
                    name="country"
                    rules={[{ required: true, message: 'Please input your Country Name!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};