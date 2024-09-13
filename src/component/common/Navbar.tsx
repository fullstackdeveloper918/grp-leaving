"use client"
import React from 'react';
import { Menu, Button, Typography } from 'antd';
import { MailOutlined, DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Text } = Typography;

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleMenuClick = (url: string) => {
    router.push(url);
  };

  return (
    <div style={navbarStyle}>
      {/* Left Section: Logo and Menu */}
      <div style={leftSectionStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          <MailOutlined style={{ fontSize: '32px', color: '#FF00A1' }} />
          <Text style={{ marginLeft: '8px', color: '#001D6E', fontWeight: 'bold' }}>Group Leaving Cards</Text>
        </div>

        {/* Menu Items */}
        <Menu mode="horizontal" style={menuStyle}>
          <Menu.SubMenu key="cards" title="Cards by Occasion" icon={<DownOutlined />}>
            <Menu.Item key="1" onClick={() => handleMenuClick('/birthday-cards')}>Birthday Cards</Menu.Item>
            <Menu.Item key="2" onClick={() => handleMenuClick('/wedding-cards')}>Wedding Cards</Menu.Item>
            <Menu.Item key="3" onClick={() => handleMenuClick('/thank-you-cards')}>Thank You Cards</Menu.Item>
            <Menu.Item key="4" onClick={() => handleMenuClick('/sympathy-cards')}>Sympathy Cards</Menu.Item>
            <Menu.Item key="5" onClick={() => handleMenuClick('/congratulations-cards')}>Congratulations Cards</Menu.Item>
            {/* Add more items as needed */}
          </Menu.SubMenu>

          <Menu.Item key="pricing">Pricing</Menu.Item>
        </Menu>
      </div>

      {/* Right Section: Buttons */}
      <div style={rightSectionStyle}>
        <Button type="primary" style={demoButtonStyle}>
          Try Demo
        </Button>
        <Button style={getStartedButtonStyle}>
          Get Started
        </Button>
        <Button type="link" style={loginButtonStyle}>
          Login
        </Button>
        <Button type="primary" danger style={registerButtonStyle}>
          Register
        </Button>
      </div>
    </div>
  );
};

// Inline CSS styles (same as before)
const navbarStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 40px', backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' };
const leftSectionStyle = { display: 'flex', alignItems: 'center' };
const logoStyle = { display: 'flex', alignItems: 'center', marginRight: '30px' };
const menuStyle = { background: 'transparent', borderBottom: 'none' };
const rightSectionStyle = { display: 'flex', alignItems: 'center' };
const demoButtonStyle = { backgroundColor: '#E1EAFE', color: '#001D6E', border: 'none', marginRight: '20px', borderRadius: '8px' };
const getStartedButtonStyle = { backgroundColor: '#001D6E', color: '#fff', border: 'none', marginRight: '20px', borderRadius: '8px' };
const loginButtonStyle = { color: '#001D6E', marginRight: '20px' };
const registerButtonStyle = { backgroundColor: '#FF4D4F', color: '#fff', border: 'none', borderRadius: '8px' };

export default Navbar;
