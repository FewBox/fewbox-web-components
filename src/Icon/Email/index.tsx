import React from "react";
import Icon from "..";
import EmailSvg from "../../svgs/email.svg";

export interface IEmailProps {
}

export interface IEmailStates {
}

export default class Email extends React.Component<IEmailProps, IEmailStates> {
    public render() {
        return <Icon icon={<EmailSvg />} />;
    }
}