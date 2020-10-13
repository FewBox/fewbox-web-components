import * as React from 'react';
import Hero from '../Hero';
import ProductScreenshot from './Screenshot';
import ProductSpec from './Spec';
import * as FewBox from '@fewbox/react-components';

export enum TextAlignType {
    Left,
    Right,
}

export interface Feature {
    name: JSX.Element;
    descriptions: JSX.Element[];
    image: JSX.Element;
}

export interface IProductProps {
    heroTitle: JSX.Element;
    heroBody: JSX.Element;
    features: Feature[];
}

export default class Product extends React.Component<IProductProps, any> {
    public render() {
        return (
            <div className="fb-product">
                <Hero title={this.props.heroTitle} body={this.props.heroBody} />
                {!!this.props.features && this.props.features.map((feature, featureIndex) => {
                    return <FewBox.Layout.Row key={`feature${featureIndex}`}>
                        <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={1} />
                        <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 4 : 6}>
                            {!!(featureIndex % 2 == 0) ? <ProductScreenshot textAlignType={TextAlignType.Right} image={feature.image} /> : <ProductSpec textAlignType={TextAlignType.Right} name={feature.name} descriptions={feature.descriptions} />}
                        </FewBox.Layout.Col>
                        <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 6 : 4}>
                            {!!(featureIndex % 2 == 0) ? <ProductSpec textAlignType={TextAlignType.Left} name={feature.name} descriptions={feature.descriptions} /> : <ProductScreenshot textAlignType={TextAlignType.Left} image={feature.image} />}
                        </FewBox.Layout.Col>
                        <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={1} />
                    </FewBox.Layout.Row>
                })}
            </div>
        );
    }
}