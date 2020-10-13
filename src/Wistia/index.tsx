import * as React from 'react';
import PlaySvg from '../svgs/play.svg';

export interface IWistiaProps {
    background?: JSX.Element;
}

export default class Wistia extends React.Component<IWistiaProps, any> {
    public render() {
        return (
            <div className="fb-wistia">
                <div className="image wistia_embed wistia_async_0i7awk8ja9 popover=true popoverAnimateThumbnail=true popoverContent=link" id="wistia-0i7awk8ja9-1">
                    <div id="wistia_31.thumb_container" className="wistia_click_to_play">
                        <a href="" target="_blank">
                            <PlaySvg />
                        </a>
                    </div>
                    <script src="https://fast.wistia.com/embed/medias/0i7awk8ja9.jsonp" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                </div>
                <div className="background">{this.props.background}</div>
            </div>
        );
    }
}