import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Row, 
  Col, 
  Card, 
  Avatar, 
  Typography, 
  Button, 
  Form, 
  Input, 
  Modal,
  Statistic
} from 'antd';
import { 
  HomeOutlined, 
  InfoCircleOutlined, 
  ContactsOutlined, 
  LoginOutlined, 
  UserOutlined, 
  LogoutOutlined,
  PhoneOutlined,
  MailOutlined,
  StarOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;

const HostelEaseLandingPage = () => {
  const [activePage, setActivePage] = useState('home');
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const renderContent = () => {
    switch(activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={2}>Welcome to HostelEase</Title>
          <Paragraph>
            Your ultimate platform for finding and managing hostel accommodations
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-6">
        <Col span={8}>
          <Statistic title="Total Clients" value={5426} prefix={<UserOutlined />} />
        </Col>
        <Col span={8}>
          <Statistic title="Total Hostels" value={256} prefix={<HomeOutlined />} />
        </Col>
        <Col span={8}>
          <Statistic title="Website Views" value={124578} prefix={<StarOutlined />} />
        </Col>
      </Row>
    </div>
  );

  const AboutPage = () => (
    <div>
      <Title level={2}>About HostelEase</Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Title level={4}>Hostel Facilities</Title>
            <ul>
              <li>Secure and comfortable accommodations</li>
              <li>Gender-specific hostel options</li>
              <li>24/7 security</li>
              <li>High-speed WiFi</li>
              <li>Clean and maintained rooms</li>
              <li>Common study areas</li>
              <li>Mess and dining facilities</li>
              <li>Laundry services</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );

  const ContactPage = () => (
    <div>
      <Title level={2}>Contact Us</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card>
            <Title level={4}>Contact Information</Title>
            <Paragraph>
              <PhoneOutlined /> +91 9876543210
            </Paragraph>
            <Paragraph>
              <MailOutlined /> support@hostelease.com
            </Paragraph>
            <Paragraph>
              Address: 123, Tech Park, Cyber City, India
            </Paragraph>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Title level={4}>Send us a Message</Title>
            <Form>
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item name="message" rules={[{ required: true }]}>
                <Input.TextArea placeholder="Your Message" rows={4} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );

  const LoginPage = () => (
    <div>
      <Title level={2}>Login to HostelEase</Title>
      <Row justify="center">
        <Col span={12}>
          <Card>
            <Form>
              <Form.Item name="username" rules={[{ required: true }]}>
                <Input placeholder="Username" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true }]}>
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Button type="primary" block>
                Login
              </Button>
              <div className="mt-3 text-center">
                <a>Forgot Password?</a> | <a>Create New Account</a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          backgroundColor: '#1890ff',
          color: 'white'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img 
            src="/api/placeholder/50/50" 
            alt="HostelEase Logo" 
            style={{ marginRight: '10px', borderRadius: '50%' }} 
          /> */}
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            HostelEase
          </Title>
        </div>
        
        <Menu 
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={['home']}
          style={{ backgroundColor: 'transparent' }}
        >
          <Menu.Item key="home" onClick={() => setActivePage('home')}>
            <HomeOutlined /> Home
          </Menu.Item>
          <Menu.Item key="about" onClick={() => setActivePage('about')}>
            <InfoCircleOutlined /> About
          </Menu.Item>
          <Menu.Item key="contact" onClick={() => setActivePage('contact')}>
            <ContactsOutlined /> Contact
          </Menu.Item>
          <Menu.Item key="login" onClick={() => setActivePage('login')}>
            <LoginOutlined /> Login/Signup
          </Menu.Item>
          <Menu.SubMenu 
            key="profile" 
            icon={<UserOutlined />} 
            title="Profile"
          >
            <Menu.Item key="view-profile">View Profile</Menu.Item>
            <Menu.Item key="logout">
              <LogoutOutlined /> Logout
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      
      <Content style={{ padding: '20px', margin: '20px' }}>
        {renderContent()}
      </Content>
      
      <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Title level={5}>Copyright</Title>
            <Paragraph>
              © 2024 HostelEase. All Rights Reserved.
            </Paragraph>
          </Col>
          <Col span={8}>
            <Title level={5}>Privacy Policy</Title>
            <Paragraph>
              We protect your personal information with utmost care and security.
            </Paragraph>
          </Col>
          <Col span={8}>
            <Title level={5}>Security</Title>
            <Paragraph>
              256-bit encryption. Regular security audits. Your data is safe with us.
            </Paragraph>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HostelEaseLandingPage;