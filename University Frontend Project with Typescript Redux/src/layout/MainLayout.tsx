import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from "react";


const items : MenuProps['items'] = [
  {
    key : 1,
    label : 'Admin'
  },
  {
    key : 2, 
    label : 'User Management',
    children : [
      {
        key : 2.1 ,
        label : 'Add User'
      },
      {
        key : 2.2,
        label : 'Edit User'
      },
      {
        key : 2.3,
        label : 'Delete User'
      }
    ] 
  },
  {
    key : 3,
    label : 'Dashboard'
  }
]

const MainLayout = () => {
  return (
    <Layout style={{height : '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Hello University
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
