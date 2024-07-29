import {Popconfirm, TableProps,Table,Button} from 'antd';
import {useEffect, useState} from "react";
import axios from 'axios';

interface DataType {
    key: string;
    name: string;
    address: string;
}

interface Address {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    phone: string;
}

interface Customer {
    id: string;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: Address;
}


const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'CompanyName',
    },
    {
        title: 'Contact Title',
        dataIndex: 'contactTitle',
        key: 'ContactTitle',
    },
    {
        title: 'Address',
        dataIndex: ['address',"city"],
        key: 'ContactTitle',
    },
    {
        title: 'Contact Title',
        dataIndex: 'contactTitle',
        key: 'ContactTitle',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: any, record: Customer) => (
            <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={() => deleteCustomer(record.id)}
                okText="Yes"
                cancelText="No"
            >
                <Button danger>Delete</Button>
            </Popconfirm>
        ),
    },
    {
        title: 'Add to Favorite',
        dataIndex: '',
        key: 'y',
        render: () => <a>Add to Favorite</a>,
    },
];
const deleteCustomer = async (id: String) => {
    const response = await axios.delete(`https://northwind.vercel.app/api/customers/${id}`)
    console.log(response)
}

export const CustomerList = () => {
    const [data, setData]  = useState<Customer[]>([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("https://northwind.vercel.app/api/customers");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect( () => {
        fetchData();
    })
    return (
        <>
            <div >
                <Table columns={columns} dataSource={data}/>
            </div>
        </>
    );
};