import Link from 'next/link';
import * as React from 'react';
import * as FewBox from '@fewbox/react-components';

export interface IHeaderProps {
    logo: JSX.Element;
    slogan?: JSX.Element | string;
}

export default class Header extends React.Component<IHeaderProps, any> {
    public render() {
        return (
            <header className="fb-header">
                <FewBox.Layout.Row>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={3} >
                        <Link href="/">
                            <ul className="brand">
                                <li>
                                    <span className="logo">{this.props.logo}</span>
                                    <span className="slogan">{this.props.slogan}</span>
                                </li>
                            </ul>
                        </Link>
                    </FewBox.Layout.Col>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={9} >
                        {this.props.children}
                    </FewBox.Layout.Col>
                </FewBox.Layout.Row>
            </header>
        );
    }
}