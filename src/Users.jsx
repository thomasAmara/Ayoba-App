import { Box, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Table } from 'antd';

function Users() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch('https://ayoba-sme-accelerator.onrender.com/api/all-users')
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log('my', data);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (text, record) => (
        <Text fontSize='16px' color='#000' fontWeight='500'>
          {text}
        </Text>
      ),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Business Name',
      dataIndex: 'businessName',
      key: 'duration',
    },
    {
      title: 'Business Email',
      dataIndex: 'businessEmail',
      key: 'businessEmail',
    },

    {
      title: 'Phone Number',
      dataIndex: 'phoneNo',
      key: 'phoneNo',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
  ];
  return (
    <div>
      <Box p='25px 35px'>
        <Box>
          <Box borderRadius='20px' color='#FFF' p='20px' bg='#0161A2'>
            <Text fontSize='36px' fontFamily='nunito' fontWeight='700'>
              Total Registration
            </Text>
            {/* <Text>{data.count}</Text> */}
          </Box>
        </Box>
        <Table dataSource={data} columns={columns} />
      </Box>
    </div>
  );
}

export default Users;
