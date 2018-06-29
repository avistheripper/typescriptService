import * as React from 'react';

export const NavItem = (props: {title: string}): JSX.Element => {
    const { title } = props;
    return(
        <div className='menu--item'>
            <span className="menu--title">{title}</span>
        </div>
    )
}