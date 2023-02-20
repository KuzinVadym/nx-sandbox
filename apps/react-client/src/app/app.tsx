import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

import { Route, Routes, Link } from 'react-router-dom';
import PrivateRoute from '../components/ProtectedRoute';
import {UsersPage} from '../pages';
import { Button } from '@mui/material';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {

  const { loginWithRedirect, logout } = useAuth0();

  return (
    <StyledApp>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <Button variant="text" onClick={() => loginWithRedirect()}>Login</Button>
      <Button variant="text" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Protected page</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={<PrivateRoute>
              <UsersPage/>
          </PrivateRoute>}
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
