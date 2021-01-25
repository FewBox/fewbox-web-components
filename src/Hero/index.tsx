import * as React from 'react';

export interface IWistiaProps {
    background?: JSX.Element;
}

export default class Wistia extends React.Component<IWistiaProps, any> {
    public render() {
        return (
            <div className="fb-hero">
                {this.props.background}
            </div>
        );
    }
}