import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import {Auth0ProviderWithRedirectCallback} from './containers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
        <Auth0ProviderWithRedirectCallback
            domain={process.env.DOMAIN || 'http://localhost:4200/'}
            clientId={process.env.AUTH0_CLIENT_ID || ''}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </StrictMode>
);
