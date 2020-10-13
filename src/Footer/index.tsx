import * as React from 'react';
import TwitterSvg from '../svgs/twitter.svg';
import EmailSvg from '../svgs/email.svg';
import SkypeSvg from '../svgs/skype.svg';

export interface IFooterProps {
    logo: JSX.Element;
    copyrightCaption: JSX.Element;
}

export default class Footer extends React.Component<IFooterProps, any> {
    public render() {
        return (
            <footer className="fb-footer">
                <div className="trademark">
                    <div className="logo">
                        {this.props.logo}
                    </div>
                </div>
                <div className="getInTouch">
                    <ul>
                        <li>
                            <a href="https://twitter.com/fewbox" target="_blank"><TwitterSvg /></a>
                        </li>
                        <li>
                            <a href="mailto://support@fewbox.com"><EmailSvg /></a>
                        </li>
                        <li>
                            <a href="skype:live:support_42788?chat"><SkypeSvg /></a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">{this.props.copyrightCaption}</div>
            </footer>
        );
    }
}