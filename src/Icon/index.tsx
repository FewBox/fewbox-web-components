import React from "react";

export interface IIconProps {
    icon: JSX.Element;
}

export interface IIconStates {
}

export default class Icon extends React.Component<IIconProps, IIconStates> {
    public render() {
        return <span className="fb-icon">{this.props.icon}</span>;
    }
}