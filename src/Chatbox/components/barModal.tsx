import React from 'react';
import { Modal, Row, Col, List, Avatar, Input } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { ModalUtils, MessageUtils, FriendUtils } from '../hooks';
import './index.less';

const chatData = Array.from(Array(20)).map((r, i) => ({
  id: String(i),
  message: '阿斯顿发送到发送到发送到发送到发送到发送到发送到发送到发撒打发士大夫撒地方',
  status: i % 3,
  errorDesc: '网络错误',
  from: i % 2,
}));

const BarModal: React.FC = () => {
  const modalUtils = ModalUtils.useContainer();
  const friendUtils = FriendUtils.useContainer();
  const messageUtils = MessageUtils.useContainer();

  return (
    <Modal
      // wrapClassName="ant-design-draggable-modal"
      {...modalUtils.modalProps}
      width="1200px"
      bodyStyle={{ padding: 0 }}
      mask={false}
      maskClosable={false}
      wrapClassName="ant-design-draggable-modal"
    >
      <Row>
        <Col flex="280px" style={{ borderRight: '1px solid rgb(0 0 0 / 5%)' }}>
          <Scrollbars style={{ height: '600px' }} autoHide>
            <List
              dataSource={friendUtils.friends}
              renderItem={(item) => (
                <List.Item
                  style={{
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    backgroundColor: item.id === friendUtils.activeId ? '#f0f0f0' : '',
                  }}
                  onClick={() => friendUtils.setActiveId(item.id)}
                >
                  <List.Item.Meta avatar={<Avatar>{item.name}</Avatar>} title={item.name} />
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
              backgroundColor: '#f5f5f5',
            }}
          >
            {friendUtils.activeFriend?.name}
          </div>
          <div
            style={{
              flex: '1',
              backgroundColor: '#f5f5f5',
              borderBottom: '1px solid rgb(0 0 0 / 5%)',
            }}
          >
            <Scrollbars>
              {chatData.map((r) => {
                const isLeft = r.from === 0;
                return (
                  <Row key={r.id} style={{ margin: '16px 0' }}>
                    <Col
                      {...(isLeft ? { span: 6, offset: '1' } : { span: 6, offset: 17 })}
                      style={{
                        ...(isLeft ? { backgroundColor: '#FFF' } : { backgroundColor: '#95de64' }),
                        padding: '16px',
                        borderRadius: '4px',
                      }}
                    >
                      {r.message}
                    </Col>
                  </Row>
                );
              })}
            </Scrollbars>
          </div>
          <div style={{ flex: '0 0 120px', backgroundColor: '#fafafa' }}>
            <Input.TextArea
              style={{ height: '100%', resize: 'none' }}
              bordered={false}
              autoSize={false}
              {...messageUtils.textProps}
            />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default BarModal;
