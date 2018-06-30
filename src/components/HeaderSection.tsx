import * as React from 'react';

interface HeaderSectionPropsType {
    header: string;
    subtitle?: string;
}

export const HeaderSection = (props: HeaderSectionPropsType): JSX.Element => {
    const { header, subtitle } = props;
    return(
        <div className="main--section--container">
            <h1 className="main--header">{header}</h1>
            <p className="main--subtitle">{subtitle}</p>
        </div>
    )
}