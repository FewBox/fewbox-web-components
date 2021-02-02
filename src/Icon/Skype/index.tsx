import React from "react";
import Icon from "..";
import SkypeSvg from "../../svgs/skype.svg";

export interface ISkypeProps {
}

export interface ISkypeStates {
}

export default class Skype extends React.Component<ISkypeProps, ISkypeStates> {
    public render() {
        return <Icon icon={<SkypeSvg />} />;
    }
}