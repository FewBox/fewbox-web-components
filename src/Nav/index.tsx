import * as React from 'react';
import Link from 'next/link';

export interface NavLink {
    path: string;
    caption: JSX.Element;
}

export interface INavProps {
    extensionNavLinks: NavLink[];
    donateLink: JSX.Element;
}

export default class Nav extends React.Component<INavProps, any> {
    public render() {
        return (
            <ul className="fb-nav">
                {!!this.props.extensionNavLinks && this.props.extensionNavLinks.map((extensionNavLink, extensionNavLinkIndex) => {
                    return <li key={`nav${extensionNavLinkIndex}`}>
                        <Link href={extensionNavLink.path}>
                            <a>{extensionNavLink.caption}</a>
                        </Link>
                    </li>
                })}
                <li>
                    <a href="https://www.paypal.com/paypalme/fewbox" target="_blank">{this.props.donateLink}</a>
                </li>
            </ul>
        );
    }
}