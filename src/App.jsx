// import AppRoutes from "./AppRoutes";
import { Layout } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div
              style={{
                height: 32,
                margin: 16,
                background: "rgba(255, 255, 255, 0.2)",
              }}
            />
            <div>
              <Link to="home" title="Home">
                Home
              </Link>
              <Link to="about" title="About">
                About
              </Link>
            </div>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <AppRoutes />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
