import Link from 'next/link';
import * as React from 'react';
import { Feature } from '..';

export interface IFeatureGalleryCardProps {
    feature: Feature;
}

export default class FeatureGalleryCard extends React.Component<IFeatureGalleryCardProps, any> {
    public render() {
        return (
            <div className="fb-feature-gallery-card">
                <div className="icon">{this.props.feature.icon}</div>
                <h3>{this.props.feature.title}</h3>
                <p>{this.props.feature.description}</p>
                <div>
                    {!!this.props.feature.morePath && <Link href={this.props.feature.morePath}>
                        <a>{this.props.feature.moreCaption}</a>
                    </Link>}
                </div>
            </div>
        );
    }
}