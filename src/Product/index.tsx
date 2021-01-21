import * as React from 'react';
import Hero from '../Hero';
import ProductScreenshot from './Screenshot';
import ProductSpec from './Spec';
import * as FewBox from '@fewbox/react-components';

export enum ProductType {
    Normal,
    FullRow
}

export enum TextAlignType {
    Left,
    Right,
    Center
}

export interface Feature {
    name: JSX.Element;
    descriptions: JSX.Element[];
    image: JSX.Element;
}

export interface IProductProps {
    type: ProductType;
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
                    let features;
                    switch (this.props.type) {
                        case ProductType.Normal:
                            features = <FewBox.Layout.Row key={`feature${featureIndex}`}>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={1} />
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 4 : 6}>
                                    {!!(featureIndex % 2 == 0) ? <ProductScreenshot textAlignType={TextAlignType.Right} image={feature.image} /> : <ProductSpec textAlignType={TextAlignType.Right} name={feature.name} descriptions={feature.descriptions} />}
                                </FewBox.Layout.Col>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 6 : 4}>
                                    {!!(featureIndex % 2 == 0) ? <ProductSpec textAlignType={TextAlignType.Left} name={feature.name} descriptions={feature.descriptions} /> : <ProductScreenshot textAlignType={TextAlignType.Left} image={feature.image} />}
                                </FewBox.Layout.Col>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={1} />
                            </FewBox.Layout.Row>
                            break;
                        case ProductType.FullRow:
                            features = <FewBox.Layout.Row key={`feature${featureIndex}`}>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12}>
                                    {!!(featureIndex % 2 == 0) ? <ProductScreenshot textAlignType={TextAlignType.Center} image={feature.image} /> : <ProductSpec textAlignType={TextAlignType.Center} name={feature.name} descriptions={feature.descriptions} />}
                                </FewBox.Layout.Col>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12}>
                                    {!!(featureIndex % 2 == 0) ? <ProductSpec textAlignType={TextAlignType.Center} name={feature.name} descriptions={feature.descriptions} /> : <ProductScreenshot textAlignType={TextAlignType.Center} image={feature.image} />}
                                </FewBox.Layout.Col>
                            </FewBox.Layout.Row>
                            break;
                        default:
                            features = <FewBox.Layout.Row key={`feature${featureIndex}`}></FewBox.Layout.Row>;
                            break;
                    }
                    return features;
                })}
            </div>
        );
    }
}