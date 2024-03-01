import React, {useContext} from 'react';
import { Context } from '..';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

export const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: '#fff', textDecoration: 'none'}} to={SHOP_ROUTE}>Технополис</NavLink>
            </Container>
        </Navbar>
    )
})
