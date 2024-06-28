import React, { useEffect, useState } from 'react';
import GetCredentials from '../../utils/get_credentials.util';
import { decrypt } from '../../utils/decrypt_data.util';

export default function NavUser() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            const credentials = GetCredentials();
            const decryptedName = await decrypt(credentials['name']);
            setUserName(decryptedName);
        };

        fetchUserName();
    }, []);

    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img
                    src="/dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                />
            </div>
            <div className="info">
                <a href="#" className="d-block">
                    {userName}
                </a>
            </div>
        </div>
    );
}
