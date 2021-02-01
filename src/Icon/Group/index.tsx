import React from "react";
import Icon from "..";
import GroupSvg from "../../svgs/group.svg";

export interface IGroupProps {
}

export interface IGroupStates {
}

export default class Group extends React.Component<IGroupProps, IGroupStates> {
    public render() {
        return <Icon icon={<GroupSvg />} />;
    }
}