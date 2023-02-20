import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// @ts-ignore
export const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };
    return (
        <Auth0Provider
          domain={props.domain}
          clientId={props.clientId}
          authorizationParams={{
              redirect_uri: window.location.origin,
              audience: `https://${props.domain}/api/v2/`,
              scope: "read:current_user update:current_user_metadata"
          }}
          onRedirectCallback={onRedirectCallback} {...props}>
            {children}
        </Auth0Provider>
    );
};