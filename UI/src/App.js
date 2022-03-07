import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Nav from './components/Nav/Nav';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Coaches = React.lazy(() => import('./pages/Coaches/Coaches'));
const Mailing = React.lazy(() => import('./pages/Mailing/Mailing'));

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <Nav />
            </Grid>

            <Grid item xs={12}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Home />
                    </Suspense>
                  }
                />

                <Route
                  path="/current-coaches"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Coaches />
                    </Suspense>
                  }
                />

                <Route
                  path="/mailing-list"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Mailing />
                    </Suspense>
                  }
                />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
