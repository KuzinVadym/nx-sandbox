import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export const UsersPage = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState('');
    
    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = process.env.DOMAIN;
            console.log('domain')
            console.log(domain)
            try {
                const accessToken = await getAccessTokenSilently();
                console.log('accessToken')
                console.log(accessToken)
                setAccessToken(accessToken);
            } catch (e) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);
    
    const onRequestHandler = async (): Promise<void> => {
        console.log('221 15');
        console.log(accessToken)
        const temp = await fetch(
          'http://localhost:4444/api',
          {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },);

        console.log('temp');
        console.log(temp);
    }

    return <div>
        <Button variant="text">Unsecure request</Button>
        <Button variant="text" onClick={onRequestHandler}>Secure request</Button>
    </div>;
}
//
// headers: {
//     'Accept': 'application/json',
//         'Content-Type': 'application/json',
// },
// credentials: 'same-origin'
// }