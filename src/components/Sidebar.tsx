import * as React from 'react';
import { Navbar } from './Navbar';

const items = [
    {
        title: "Home",
        link: "/home"
    },
    {
        title: "Store",
        link: "/store"
    },
    {
        title: "Gallery",
        link: "/gallery"
    }
]

export class SideBar extends React.Component <SideBarPropsType, {} > {
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