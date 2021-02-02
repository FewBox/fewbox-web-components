import Link from 'next/link';
import * as React from 'react';
import { Base } from '@fewbox/react-components';

export interface IHeaderProps {
    logo: JSX.Element;
    slogan?: JSX.Element | string;
}

export default class Header extends React.Component<IHeaderProps, any> {
    public render() {
        return (
            <header className="fb-header">
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={3} >
                        <Link href="/">
                            <ul className="brand">
                                <li>
                                    <span className="logo">{this.props.logo}</span>
                                    <span className="slogan">{this.props.slogan}</span>
                                </li>
                            </ul>
                        </Link>
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={9} >
                        {this.props.children}
                    </Base.Layout.Col>
                </Base.Layout.Row>
            </header>
        );
    }
}