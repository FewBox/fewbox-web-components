import * as React from 'react';
import Brand from '../Brand';
import { Base } from '@fewbox/react-components';

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
                <Base.Layout.Row textAlignType={Base.Layout.TextAlignType.Center}>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={12}>
                        <h5>{this.props.caption}</h5>
                    </Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row textAlignType={Base.Layout.TextAlignType.Center}>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={12}>
                        {!!this.props.clients && this.props.clients.map((client, clientIndex) => {
                            return <Brand name={client.name} logo={client.logo} key={`client${clientIndex}`} />;
                        })}
                    </Base.Layout.Col>
                </Base.Layout.Row>
            </div>
        );
    }
}