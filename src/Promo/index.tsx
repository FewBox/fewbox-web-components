import * as React from 'react';
import Hero from '../Hero';
import Wistia from '../Wistia';
import { Base } from '@fewbox/react-components';


export enum PromoType {
    Wistia,
    Youtube,
    Hero
}

export interface IPromoProps {
    type: PromoType;
    background?: JSX.Element;
}

export default class Promo extends React.Component<IPromoProps, any> {
    public render() {
        return (
            <div className="fb-promo">
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={12}>
                        {!!(this.props.type == PromoType.Wistia) && <Wistia background={this.props.background} />}
                        {!!(this.props.type == PromoType.Hero) && <Hero background={this.props.background} />}
                    </Base.Layout.Col>
                </Base.Layout.Row>
            </div>
        );
    }
}