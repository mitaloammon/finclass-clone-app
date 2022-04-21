import React from 'react';
import useAuth from '../hooks/useAuth/Index';
import SignInStack from './SignInStack/index';
import SignedInBottomTab from './SignedInBottomTab/Index';

const Navigation: React.FC = () => {
    const { isLogged } = useAuth();
    return isLogged ? <SignedInBottomTab/> : <SignInStack />;
}

export default Navigation;