import * as React from 'react';
import { Button } from './components/Button';
import { NavbarContainer } from './components/Sidebar';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';
import { Form } from './components/form/Form';
import { HeaderSection as Header } from './components/HeaderSection';

const testline = "From the ashes of their world...";
const testline2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed numquam fugit libero dolorum assumenda voluptatum quasi alias repellendus animi culpa soluta labore, magnam eum tempora qui dolores nisi eos error?"


export class App extends React.Component<{} , StateTypes> {
    state = {
        currentTask: "",
        tasksList: new Array(),
        userVoted: false
    }
    public render(): JSX.Element {
        return (
    <Router>
        <div>
            <NavbarContainer position="TOP" />
                <Link to="/">
                    <Header header={testline} subtitle={testline2} />
                </Link>
                <Link to="/status">
                    <Button text="Go to form" size="SMALL" color="grey" />
                </Link>
            <hr/>
            <Switch>
                <Route exact path="/" component={Form} />
                <Route path="/status" component={Button} />
            </Switch>
        </div>
    </Router>
        );
    }
}

interface StateTypes {
    currentTask: string
    tasksList: Array<any>
    userVoted: boolean
};