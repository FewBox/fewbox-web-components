import * as React from 'react';

export interface IBrandProps {
    logo: JSX.Element,
    name: JSX.Element;
}

export default class Brand extends React.Component<IBrandProps, any> {
    public render() {
        return (
            <div className="fb-brand">
                <div className="logo">{this.props.logo}</div>
            </div>
        );
    }
}