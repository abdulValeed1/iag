import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import Form from "./Pages/Form"
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
              <Form/>
          }
        />
        <Route
          path="linked-ai-value"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
