import { Layout, theme } from "antd";
import GetRoutes from "../routes/Router";

const { Content } = Layout;

const Contents = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  /**Render the content as per the route*/
  return (
    <div>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <GetRoutes />
        </div>
      </Content>
    </div>
  );
};

export default Contents;
