import { Button, Form, Input, message } from 'antd';
import axios from "axios";
import { useForm } from 'antd/es/form/Form';

const onFinish = async (values, form, messageApi) => {
    const data = {
        "companyName": values.companyName,
        "contactTitle": values.contactTitle,
        "address": {
            "city": values.city,
            "country": values.country
        }
    }
    await axios.post(
        'https://northwind.vercel.app/api/customers/', data)
        .then(() => {
            form.resetFields();
            messageApi.open({
                type: 'success',
                content: 'Customer added successfully',
            });
        })
        .catch((error) => {
            messageApi.open({
                type: 'error',
                content: 'Error adding customer',
            });
        });
}

const onFinishFailed = (messageApi) => {
    messageApi.open({
        type: 'error',
        content: 'Error in form submission',
    });
}

export const AddCustomers = () => {
    const [form] = useForm();
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <>
            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={(values) => onFinish(values, form, messageApi)}
                onFinishFailed={() => onFinishFailed(messageApi)}
                autoComplete="off"
            >
                <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true, message: 'Please input your Company Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Contact Title"
                    name="contactTitle"
                    rules={[{ required: true, message: 'Please input your Contact Title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your City Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
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