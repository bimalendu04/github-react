import React from 'react';
import { Layout } from 'antd';
import './App.css';
import SearchComponent from './components/search';
import Result from './components/results';


export const AppContext = React.createContext();

const { Header, Content } = Layout;

const App = () => {
  const [state, setState] = React.useState({
    searchedText: null,
    userDetails: null,
    userLoading: false,
    repos: null
  });

  const contextValue = React.useMemo(() => {
    const updateState = (value) => {
      const updatedState = { ...state, ...value };
      setState(updatedState);
    }
    return { state, updateState }
  }, [state]);

  return <Layout style={{ height: "100%", overflowX: 'hidden' }}>
    <AppContext.Provider value={contextValue}>
      <Header></Header>
      <Content className="content">
        <SearchComponent />
        <Result />
      </Content>
    </AppContext.Provider>
  </Layout>
};

export default App;