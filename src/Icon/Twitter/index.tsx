import React from "react";
import Icon from "..";
import TwitterSvg from "../../svgs/twitter.svg";

export interface ITwitterProps {
}

export interface ITwitterStates {
}

export default class Twitter extends React.Component<ITwitterProps, ITwitterStates> {
    public render() {
        return <Icon icon={<TwitterSvg />} />;
    }
}