import * as React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import langs from '../langs';
import EmailSvg from '../assets/svgs/email.svg';
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
import { Base } from '@fewbox/react-components';
import { Web } from '../src';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <Base.Analyze.GA path={(typeof (window) == 'object') ? window.location.pathname : 'unknow'} trackingId="UA-132759085-1" isDebug={true} app="components-demo" />
        <Base.Layout.Container>
          <Web.UI.Header logo={<LogoSvg />} slogan={<FormattedMessage id="Link.Slogan" />}>
            <Web.UI.Nav donateLink={<FormattedMessage id="Link.Donate" />} extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }
            ]} />
          </Web.UI.Header>
        </Base.Layout.Container>
        <Web.UI.Promo type={Web.UI.PromoType.Hero} background={<BackgroundSvg />} />
        <Web.UI.Trusted caption={<FormattedMessage id="Label.Trusted" />}
          clients={[
            { name: <FormattedMessage id="Label.Brand" />, logo: <LenovoSvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <SonySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <TempurSealySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <BoostSolutionsSvg /> }
          ]} />
        <Base.Layout.Container type={Base.Layout.ContainerType.Full} style={{ backgroundColor: "#3C23C4" }}>
          <Web.UI.Product
            type={Web.UI.ProductType.FullRow}
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
        </Base.Layout.Container>
        <Base.Layout.Container>
          <Web.UI.Pricing title={<FormattedMessage id="Label.PricingTitle" />} description={<FormattedMessage id="Label.PricingDescription" />} registryLink={{ path: 'registry', caption: <FormattedMessage id="Link.Registry" /> }} currenty="$" paypalEnvironment={Web.UI.PricingPaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
            prices={[
              {
                unit: <FormattedMessage id="Label.FreeLicenseUnit" />,
                subscribeType: 'Free',
                isRecommended: false,
                licenseType: Web.UI.PricingLicenseType.Free,
                licenseCaption: <FormattedMessage id="Label.FreeLicense" />,
                discountedPrice: "0",
                description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p>
              },
              {
                unit: <FormattedMessage id="Label.MonthlyLicenseUnit" />, subscribeType: "Monthly", isRecommended: false, licenseType: Web.UI.PricingLicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>, purchase: <FormattedMessage id="Label.Purchase" />
              },
              {
                unit: <FormattedMessage id="Label.YearlyLicenseUnit" />, subscribeType: "Yearly", isRecommended: true, licenseType: Web.UI.PricingLicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>, purchase: <FormattedMessage id="Label.Purchase" />
              }
            ]} />
        </Base.Layout.Container>
        <Base.Layout.Container type={Base.Layout.ContainerType.Full} style={{ backgroundColor: "#3C23C4" }}>
          <Web.UI.FeatureGallery title={<FormattedMessage id="Label.FeatureTitle" />} description={<FormattedMessage id="Label.FeatureDescription" />} features={[
            {
              icon: <FeatureIcon1Svg />,
              title: <FormattedMessage id="Label.Todo" />,
              description: <FormattedMessage id="Label.Todo" />,
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon2Svg />,
              title: <FormattedMessage id="Label.Todo" />,
              description: <FormattedMessage id="Label.Todo" />,
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon3Svg />,
              title: <FormattedMessage id="Label.Todo" />,
              description: <FormattedMessage id="Label.Todo" />,
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon4Svg />,
              title: <FormattedMessage id="Label.Todo" />,
              description: <FormattedMessage id="Label.Todo" />,
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon5Svg />,
              title: <FormattedMessage id="Label.Todo" />,
              description: <FormattedMessage id="Label.Todo" />,
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            },
            {
              icon: <FeatureIcon6Svg />,
              title: <FormattedMessage id="Label.Todo" />,
              description: <FormattedMessage id="Label.Todo" />,
              moreCaption: <FormattedMessage id="Label.More" />,
              morePath: 'feature'
            }
          ]} />
        </Base.Layout.Container>
        <Base.Layout.Container>
          <Web.UI.Team title={<FormattedMessage id="Label.TeamTitle" />} description={<FormattedMessage id="Label.TeamDescription" />} teamMembers={[
            {
              avatar: <TeamMemberIcon1Svg />, title: "Cofounder", description: "Be SMART!",
              socialAccounts: [
                { icon: <EmailSvg />, link: 'mailto://xl@fewbox.com' }
              ]
            },
            { avatar: <TeamMemberIcon2Svg />, title: "Cofounder", description: "Be SAMPLE!" },
            { avatar: <TeamMemberIcon3Svg />, title: "Cofounder", description: "Be SPECIAL!" }
          ]} />
        </Base.Layout.Container>
        <Web.UI.Footer logo={<LogoSvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
      </IntlProvider>
    );
  }
}

export default HomePage;
