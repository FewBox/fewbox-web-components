import React from "react";
import Icon from "..";
import LockSvg from "../../svgs/lock.svg";

export interface ILockProps {
}

export interface ILockStates {
}

export default class Lock extends React.Component<ILockProps, ILockStates> {
    public render() {
        return <Icon icon={<LockSvg />} />;
    }
}