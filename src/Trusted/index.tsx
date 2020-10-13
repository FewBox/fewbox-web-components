import * as React from 'react';
import Brand from '../Brand';
import * as FewBox from '@fewbox/react-components';

export interface Client {
    name: JSX.Element;
    logo: JSX.Element;
}

export interface ITrustedProps {
    caption: JSX.Element;
    clients: Client[];
}

export default class Trusted extends React.Component<ITrustedProps, any> {
    public render() {
        return (
            <div className="fb-trusted">
                <FewBox.Layout.Row>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12}>
                        <h5>{this.props.caption}</h5>
                    </FewBox.Layout.Col>
                </FewBox.Layout.Row>
                <FewBox.Layout.Row>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12}>
                        {!!this.props.clients && this.props.clients.map((client, clientIndex) => {
                            return <Brand name={client.name} logo={client.logo} key={`client${clientIndex}`} />;
                        })}
                    </FewBox.Layout.Col>
                </FewBox.Layout.Row>
            </div>
        );
    }
}