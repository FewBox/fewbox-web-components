import * as React from 'react';
import { TextAlignType } from '../index';

export interface IProductScreenshotProps {
    textAlignType: TextAlignType;
    image: JSX.Element;
}

export default class ProductScreenshot extends React.Component<IProductScreenshotProps, any> {
    public render() {
        let className;
        if (this.props.textAlignType == TextAlignType.Left) {
            className = 'fb-product-screenshot-left';
        }
        else if (this.props.textAlignType == TextAlignType.Right) {
            className = 'fb-product-screenshot-right';
        }
        else {
            className = 'fb-product-screenshot-center';
        }
        return (
            <div className={className}>
                {this.props.image}
            </div>
        );
    }
}