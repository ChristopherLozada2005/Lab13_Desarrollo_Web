import React from 'react';

export const HeaderComponent = () =>{
    return(
        <div>
            <header>
                <nav class="navbar bg-primary navbar-expand-lg fixed-top">

                    <div>
                    <ul className='navbar-nav mx-auto my-2 my-lg-0 navbar-var-scroll'>
                        <li className='nav-item'>
                            <a className='nav-link formato01' href='/'>Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link formato01' href='/productos'>Almacen</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link formato01' href='#'>Ventas</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link formato01' href='#'>Compras</a>
                        </li>
                    </ul>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;