import * as React from 'react';
import { TextAlignType } from '../index';

export interface IProductScreenshotProps {
    textAlignType: TextAlignType;
    image: JSX.Element;
}

export default class ProductScreenshot extends React.Component<IProductScreenshotProps, any> {
    public render() {
        let className = 'screenshot';
        if (this.props.textAlignType == TextAlignType.Left) {
            className += ' screenshot-left';
        }
        else if (this.props.textAlignType == TextAlignType.Right) {
            className += ' screenshot-right';
        }
        else {
            className += ' screenshot-center';
        }
        return (
            <div className={className}>
                {this.props.image}
            </div>
        );
    }
}