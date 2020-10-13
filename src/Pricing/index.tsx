import * as React from 'react';
import Hero from '../Hero';
import Card from './Card';
import * as FewBox from '@fewbox/react-components';

export enum LicenseType {
    Free,
    Monthly,
    Yearly,
}

export enum PaypalEnvironmentType {
    Sandbox,
    Production,
}

export interface Price {
    isRecommended: boolean;
    licenseType: LicenseType;
    licenseCaption: JSX.Element;
    originalPrice?: string;
    discountedPrice: string;
    description: JSX.Element;
    purchase?: JSX.Element;
}

export interface RegistryLink {
    path: string;
    caption: JSX.Element;
}

export interface IPricingProps {
    heroTitle: JSX.Element;
    heroBody: JSX.Element;
    currenty: string;
    paypalEnvironment: PaypalEnvironmentType;
    paypalBusinessCode: string;
    prices: Price[];
    registryLink: RegistryLink;
}

export default class Pricing extends React.Component<IPricingProps, any> {
    public render() {
        return (
            <div className="fb-pricing">
                <Hero title={this.props.heroTitle} body={this.props.heroBody} />
                <FewBox.Layout.Row>
                    {this.props.prices.map((price, priceIndex) => {
                        return <FewBox.Layout.Col key={`price${priceIndex}`} type={FewBox.Layout.ColType.Medium} columnCount={12 / this.props.prices.length}>
                            <Card purchase={price.purchase} currenty={this.props.currenty} paypalBusinessCode={this.props.paypalBusinessCode} paypalEnvironment={this.props.paypalEnvironment} isRecommended={price.isRecommended} licenseType={price.licenseType} licenseCaption={price.licenseCaption} originalPrice={price.originalPrice} discountedPrice={price.discountedPrice} description={price.description} registryLink={this.props.registryLink} />
                        </FewBox.Layout.Col>
                    })}
                </FewBox.Layout.Row>
            </div>
        );
    }
}