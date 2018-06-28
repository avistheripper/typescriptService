import * as React from 'react';

export class SideBar extends React.Component <SideBarPropsType, {} > {
    public render(): JSX.Element {
        const { position, children } = this.props;
        return(
            <div className={`sidebar--${position}`}>
                <h1>I am a sidebar</h1>
                {children}
            </div>
        )
    }
}

interface SideBarPropsType {
    position: string;
    children: JSX.Element
}