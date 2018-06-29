import * as React from 'react';

export class Form extends React.Component {
    render() {
        return(
            <div>
                <input type="text"/>
                <input type="date"/>
                <input type="range"/>
            </div>
        )
    }
}