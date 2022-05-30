import React from 'react';
import { Modal, Row, Col, List, Avatar, Typography } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { BarUtils } from '../hooks';

const { Text } = Typography;

const siderData = Array.from(Array(100)).map((r, i) => ({
  id: i,
  name: `用户${i}`,
  date: '17:53',
  preview: '阿斯顿发送到发送到发送到发送到发送到发送到发送到发送到发撒打发士大夫撒地方',
}));

// const siderData = [
//   {
//     id: 1,
//     name: '江亦峰',
//     date: '17:53',
//     preview: '阿斯顿发送到发送到发送到发送到发送到发送到发送到发送到发撒打发士大夫撒地方',
//   },
//   {
//     id: 2,
//     name: '郭文龙',
//     date: '17:53',
//     preview: '阿斯顿发送到发送到发送到发送到发送到发送到发送到发送到发撒打发士大夫撒地方',
//   },
// ];

const BarModal: React.FC = () => {
  const { modalProps } = BarUtils.useContainer();

  return (
    <Modal {...modalProps} width="1200px">
      <Row>
        <Col flex="280px" style={{ borderRight: '1px solid black' }}>
          <Scrollbars style={{ height: '600px' }} autoHide>
            <List
              dataSource={siderData}
              renderItem={(item) => (
                <List.Item extra={item.date}>
                  <List.Item.Meta
                    avatar={<Avatar>{item.name}</Avatar>}
                    title={item.name}
                    description={<Text ellipsis>{item.preview}</Text>}
                  />
                </List.Item>
              )}
            />
          </Scrollbars>
        </Col>
        <Col flex="1">right</Col>
      </Row>
    </Modal>
  );
};

export default BarModal;
