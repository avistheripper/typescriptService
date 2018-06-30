import * as React from 'react';
import { Navbar } from './Navbar';

const items = [
    {
        title: "Vote",
        link: "/home"
    },
    {
        title: "Statistic",
        link: "/store"
    },
    {
        title: "Results",
        link: "/gallery"
    }
]

export class NavbarContainer extends React.Component <SideBarPropsType, {} > {
    public render(): JSX.Element {
        const { position, children } = this.props;
        return(
            <div className={`sidebar--${position}`}>
                <Navbar items={items}  />
            </div>
        )
    }
}

interface SideBarPropsType {
    position: string;
}