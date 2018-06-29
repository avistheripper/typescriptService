import * as React from 'react';
import { NavItem as Item } from './NavItem';

interface NavItemsType {
    title: string,
    link: string
}

interface NavbarPropsType {
    items: Array<NavItemsType>,
}

export class Navbar extends React.Component <NavbarPropsType, {}> {
    public render(): JSX.Element {
        const { items } = this.props;
        return(
            <div className="navbar">
                { this.props.items &&
                    items.map((item, index) => <Item title={item.title} key={index} />)}
            </div>
        )
    }
}