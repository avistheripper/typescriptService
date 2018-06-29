import * as React from 'react';
import { Button } from './components/Button';
import { SideBar } from './components/Sidebar';
import { Form } from './components/form/Form';


export class App extends React.Component<{} , StateTypes> {
    state = {
        currentTask: "",
        tasksList: new Array()
    }
    public render(): JSX.Element {
        return (
        <div>
            <SideBar position="TOP" />
            <Form />

        </div>
        );
    }
}

interface StateTypes {
    currentTask: string
    tasksList: Array<Itask>
};
interface Itask {
    id: number;
    value: string;
    completed: boolean;
}