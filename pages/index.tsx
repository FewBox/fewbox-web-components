import * as React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import langs from '../langs';
import LogoSvg from '../assets/svgs/logo.svg';
import LenovoSvg from '../assets/svgs/lenovo.svg';
import SonySvg from '../assets/svgs/sony.svg';
import TempurSealySvg from '../assets/svgs/tempursealy.svg';
import BoostSolutionsSvg from '../assets/svgs/boostsolutions.svg';
import BackgroundSvg from '../assets/svgs/background.svg';
import FeatureIcon1Svg from '../assets/svgs/feature-icon1.svg';
import FeatureIcon2Svg from '../assets/svgs/feature-icon2.svg';
import FeatureIcon3Svg from '../assets/svgs/feature-icon3.svg';
import FeatureIcon4Svg from '../assets/svgs/feature-icon4.svg';
import FeatureIcon5Svg from '../assets/svgs/feature-icon5.svg';
import FeatureIcon6Svg from '../assets/svgs/feature-icon6.svg';
import TeamMemberIcon1Svg from '../assets/svgs/team-member-icon1.svg';
import TeamMemberIcon2Svg from '../assets/svgs/team-member-icon2.svg';
import TeamMemberIcon3Svg from '../assets/svgs/team-member-icon3.svg';
import FewBox from './mingle';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <FewBox.Analyze.GA path={(typeof (window) == 'object') ? window.location.pathname : 'unknow'} trackingId="UA-132759085-1" isDebug={true} app="components-demo" />
        <FewBox.Layout.Style />
        <FewBox.Layout.Container>
          <FewBox.Official.Header logo={<LogoSvg />} slogan={<FormattedMessage id="Link.Slogan" />}>
            <FewBox.Official.Nav donateLink={<FormattedMessage id="Link.Donate" />} extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }
            ]} />
          </FewBox.Official.Header>
        </FewBox.Layout.Container>
        <FewBox.Official.Promo type={FewBox.Official.PromoType.Hero} background={<BackgroundSvg />} />
        <FewBox.Official.Trusted caption={<FormattedMessage id="Label.Trusted" />}
          clients={[
            { name: <FormattedMessage id="Label.Brand" />, logo: <LenovoSvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <SonySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <TempurSealySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <BoostSolutionsSvg /> }
          ]} />
        <FewBox.Layout.Container type={FewBox.Layout.ContainerType.Full} style={{backgroundColor:"#3C23C4"}}>
          <FewBox.Official.Product
            type={FewBox.Official.ProductType.FullRow}
            title={<FormattedMessage id="Label.ProductTitle" />}
            description={<FormattedMessage id="Label.ProductDescription" />}
            features={[
              {
                name: <FormattedMessage id="Label.Feature1Name" />,
                descriptions: [<FormattedMessage id="Label.Feature1Description" />],
                image: <img src="/images/feature1.png" />,
                moreCaption: <FormattedMessage id="Label.More" />,
                morePath: 'feature'
              },
              {
                name: <FormattedMessage id="Label.Feature2Name" />,
                descriptions: [<FormattedMessage id="Label.Feature2Description" />],
                image: <img src="/images/feature2.png" />,
                moreCaption: <FormattedMessage id="Label.More" />,
                morePath: 'feature'
              }
            ]} />
        </FewBox.Layout.Container>
        <FewBox.Layout.Container>
          <FewBox.Official.Pricing title={<FormattedMessage id="Label.PricingTitle" />} description={<FormattedMessage id="Label.PricingDescription" />} registryLink={{ path: 'registry', caption: <FormattedMessage id="Link.Registry" /> }} currenty="$" paypalEnvironment={FewBox.Official.PaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
            prices={[
              { isRecommended: false, licenseType: FewBox.Official.LicenseType.Free, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, discountedPrice: "0", description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p> },
              {
                subscribeType: "Monthly", isRecommended: false, licenseType: FewBox.Official.LicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>, purchase: <FormattedMessage id="Button.Purchase" />
              },
              {
                subscribeType: "Yearly", isRecommended: true, licenseType: FewBox.Official.LicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>, purchase: <FormattedMessage id="Button.Purchase" />
              }
            ]} />
        </FewBox.Layout.Container>
        <FewBox.Layout.Container>
          <FewBox.Official.FeatureGallery title={<FormattedMessage id="Label.FeatureTitle" />} description={<FormattedMessage id="Label.FeatureDescription" />} features={[
            {
              icon: <FeatureIcon1Svg/>,
              title:"Feature 1",
              description:"Feature 1",
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon2Svg/>,
              title:"Feature 2",
              description:"Feature 2",
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon3Svg/>,
              title:"Feature 3",
              description:"Feature 3",
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon4Svg/>,
              title:"Feature 4",
              description:"Feature 4",
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon5Svg/>,
              title:"Feature 5",
              description:"Feature 5",
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon6Svg/>,
              title:"Feature 6",
              description:"Feature 6",
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            }
          ]} />
        </FewBox.Layout.Container>
        <FewBox.Layout.Container type={FewBox.Layout.ContainerType.Full} style={{backgroundColor:"#3C23C4"}}>
          <FewBox.Official.Team title={<FormattedMessage id="Label.TeamTitle" />} description={<FormattedMessage id="Label.TeamDescription" />} teamMembers={[
            {avatar: <TeamMemberIcon1Svg/>, title:"cofounder",description:"Be SMART!"},
            {avatar: <TeamMemberIcon2Svg/>, title:"cofounder",description:"Be SAMPLE!"},
            {avatar: <TeamMemberIcon3Svg/>, title:"cofounder",description:"Be SPECIAL!"}
          ]} />
        </FewBox.Layout.Container>
        <FewBox.Official.Footer logo={<LogoSvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
      </IntlProvider>
    );
  }
}

export default HomePage;
