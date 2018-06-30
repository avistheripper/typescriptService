import * as React from 'react';

export class Form extends React.Component {
    render() {
        return(
            <div>
                <label htmlFor="credentials" />
                <input type="text"
                       name="credentials"
                       placeholder="Type credentials"
                    />
            </div>
        )
    }
}