import React from "react";
import Icon from "..";
import UserSvg from "../../svgs/user.svg";

export interface IUserProps {
}

export interface IUserStates {
}

export default class User extends React.Component<IUserProps, IUserStates> {
    public render() {
        return <Icon icon={<UserSvg />} />;
    }
}