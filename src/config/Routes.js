import React from 'react';
import {Router,Scene,Stack} from 'react-native-router-flux';
import Main from '../screens/Main';
import Start from '../screens/Start';


const Routes = () => (
    <Router>
        <Stack key ='root'>
            <Scene key ='main' component={Main} hideNavBar={true}/>
            <Scene key='start' component={Start} hideNavBar={true}/>
        </Stack>
    </Router>
)

export default Routes;