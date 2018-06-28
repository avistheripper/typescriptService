import * as React from 'react';
import { Button } from './components/Button';
import { SideBar } from './components/Sidebar';


export class App extends React.Component<{} , StateTypes> {
    state = {
        currentTask: "",
        tasksList: new Array()
    }
    public render(): JSX.Element {
        return (
        <div>
            <SideBar position="LEFT">
                <Button
                    text="Grey Button"
                    color="grey"
                    size="SMALL"
                />
            </SideBar>
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