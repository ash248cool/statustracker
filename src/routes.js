import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './login/Login';
import Attendance from './attendance/Attendance';
import TaskManager from './taskmanager/TaskManager';


const Routes = () => (
    <routes>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/attendance" component={Attendance} />
            <Route exact path="/taskmanager" component={TaskManager} />
        </Switch>
    </routes> )

export default Routes;