import * as React from 'react';
import Twitter from '../Icon/Twitter';
import Email from '../Icon/Email';
import Skype from '../Icon/Skype';

export interface SocialAccount {
    link: string;
    icon: JSX.Element;
}

export interface IFooterProps {
    logo: JSX.Element;
    copyrightCaption: JSX.Element;
    socialAccounts?: SocialAccount[];
}

export default class Footer extends React.Component<IFooterProps, any> {
    public render() {
        let socialAccounts: SocialAccount[];
        if (!this.props.socialAccounts) {
            socialAccounts = [
                {
                    link: "https://twitter.com/fewbox",
                    icon: <Twitter />
                },
                {
                    link: "mailto://support@fewbox.com",
                    icon: <Email />
                },
                {
                    link: "skype:live:support_42788?chat",
                    icon: <Skype />
                }
            ];
        }
        else {
            socialAccounts = this.props.socialAccounts;
        }
        return (
            <footer className="fb-footer">
                <div className="trademark">
                    <div className="logo">
                        {this.props.logo}
                    </div>
                </div>
                <div className="getInTouch">
                    <ul>
                        {socialAccounts.map((socialAccount, socialAccountIndex) => {
                            return <li key={`SocialAccount${socialAccountIndex}`}>
                                <a href={socialAccount.link} target="_blank">{socialAccount.icon}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="copyright">{this.props.copyrightCaption}</div>
            </footer>
        );
    }
}