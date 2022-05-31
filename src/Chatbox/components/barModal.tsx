import React from 'react';
import { Modal, Row, Col, List, Avatar, Typography } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { BarUtils } from '../hooks';

const { Text } = Typography;

const siderData = Array.from(Array(100)).map((r, i) => ({
  id: String(i),
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
  const { modalProps, handleClickItem, activeKey } = BarUtils.useContainer();

  return (
    <Modal {...modalProps} width="1200px" bodyStyle={{ padding: 0 }}>
      <Row>
        <Col flex="280px" style={{ borderRight: '1px solid rgb(0 0 0 / 5%)' }}>
          <Scrollbars style={{ height: '600px' }} autoHide>
            <List
              dataSource={siderData}
              renderItem={(item) => (
                <List.Item
                  extra={item.date}
                  style={{
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    backgroundColor: item.id === activeKey ? '#f0f0f0' : '',
                  }}
                  onClick={() => handleClickItem(item.id)}
                >
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
        <Col flex="1" style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              flex: '0 0 50px',
              borderBottom: '1px solid rgb(0 0 0 / 5%)',
              paddingLeft: '16px',
              lineHeight: '50px',
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            {siderData.find((r) => r.id === activeKey)?.name}
          </div>
          <div style={{ flex: '1' }}>456</div>
        </Col>
      </Row>
    </Modal>
  );
};

export default BarModal;
