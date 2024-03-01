import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../routes';
import { Context } from '../index';

export function AppRouter() {
    const {user} = React.useContext(Context);
    

    return (
        <Routes>
            {routes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />
            )}
            <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
    );
}
