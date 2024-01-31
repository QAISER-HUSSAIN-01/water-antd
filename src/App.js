import { ConfigProvider, theme } from "antd";
import ErrorBoundary from "shared/ErrorBoundary";
import AppRoutes from "routes";
import "./App.css";
import {useSelector} from 'react-redux';
function App() {
  const { token } = theme.useToken();
  const isDark = useSelector((state)=>state.theme.isDark)
  return (
      <ErrorBoundary>
        <ConfigProvider
          theme={{
            algorithm: isDark ? [theme.darkAlgorithm,theme.compactAlgorithm] : [theme.defaultAlgorithm,theme.compactAlgorithm],
            components: {
              Layout: {
                headerBg: '#4096ff',
                headerColor:'white',
              },
              Table: {
                headerBg: isDark ? '' : '#f5f5f5',
                headerBorderRadius:'0'
              },
              Card:{
                
                // headerBg: '#4096ff',
                // colorTextHeading:'white',
                // paddingLeft:'0px',
                // headerBg: '#6aabfbae'
              },
              
              
            },
          }}
        >
          <AppRoutes />
        </ConfigProvider>
      </ErrorBoundary>
  );
}
export default App;
