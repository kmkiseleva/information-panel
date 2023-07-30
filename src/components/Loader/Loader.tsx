// Components
import { Spin } from "antd";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Spin size="large" />
      <div style={{ marginTop: "10px" }}>Loading...</div>
    </div>
  );
};

export default Loader;
