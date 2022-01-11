import React from 'react'
import {Route, Routes as RoutesReact} from 'react-router-dom';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';
import Junior from './pages/Junior';
import JuniorPlus from './pages/JuniorPlus';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    NOT_FOUND_PAGE:'/*'
    // add paths
}

function Routes() {
    return (
       <>
            {/*<BrowserRouter>*/}
            {/*<HashRouter*/}
            {/*    basename={"localhost"}*/}
            {/*    // hashType={"slash"}*/}
            {/*>*/}
            {/*<Header/>*/}
            <RoutesReact>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </RoutesReact>
       </>
    )
}

export default Routes
