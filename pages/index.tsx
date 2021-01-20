import * as React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import langs from '../langs';
import LogoSvg from '../assets/svgs/logo.svg';
import LogoGraySvg from '../assets/svgs/logo-gray.svg';
import LenovoSvg from '../assets/svgs/lenovo.svg';
import SonySvg from '../assets/svgs/sony.svg';
import TempurSealySvg from '../assets/svgs/tempursealy.svg';
import BoostSolutionsSvg from '../assets/svgs/boostsolutions.svg';
import BackgroundSvg from '../assets/svgs/background.svg';
import Feature1Svg from '../assets/svgs/feature1.svg';
import Feature2Svg from '../assets/svgs/feature2.svg';
import Feature3Svg from '../assets/svgs/feature3.svg';
import FewBox from './merge';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <FewBox.Analyze.GA path={(typeof (window) == 'object') ? window.location.pathname : 'unknow'} trackingId="UA-132759085-1" isDebug={true} app="components-demo" />
        <FewBox.Layout.Style />
        <FewBox.Layout.Container>
          <FewBox.Official.Header logo={<LogoSvg />} slogan="Plugin Cloud">
            <FewBox.Official.Nav donateLink={<FormattedMessage id="Link.Donate" />} extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }
            ]} />
          </FewBox.Official.Header>
          <FewBox.Official.Promo type={FewBox.Official.PromoType.Wistia} background={<BackgroundSvg />} />
        </FewBox.Layout.Container>
        <FewBox.Official.Trusted caption={<FormattedMessage id="Label.Trusted" />}
          clients={[
            { name: <FormattedMessage id="Label.Brand" />, logo: <LenovoSvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <SonySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <TempurSealySvg /> },
            { name: <FormattedMessage id="Label.Brand" />, logo: <BoostSolutionsSvg /> }
          ]} />
        <FewBox.Official.Product
          heroTitle={<FormattedMessage id="Label.ProductTitle" />}
          heroBody={<FormattedMessage id="Label.ProductBody" />}
          features={[
            {
              name: <FormattedMessage id="Label.Feature1Name" />,
              descriptions: [<FormattedMessage id="Label.Feature1Description" />],
              image: <Feature1Svg />
            },
            {
              name: <FormattedMessage id="Label.Feature2Name" />,
              descriptions: [<FormattedMessage id="Label.Feature2Description" />],
              image: <Feature2Svg />
            },
            {
              name: <FormattedMessage id="Label.Feature3Name" />,
              descriptions: [<FormattedMessage id="Label.Feature3Description" />],
              image: <Feature3Svg />
            }
          ]} />
        <FewBox.Layout.Container>
          <FewBox.Official.Pricing heroTitle={<FormattedMessage id="Label.PricingTitle" />} heroBody={<FormattedMessage id="Label.PricingBody" />} registryLink={{ path: 'registry', caption: <FormattedMessage id="Link.Registry" /> }} currenty="$" paypalEnvironment={FewBox.Official.PaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
            prices={[
              { isRecommended: false, licenseType: FewBox.Official.LicenseType.Free, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, discountedPrice: "0", description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p> },
              {
                isRecommended: false, licenseType: FewBox.Official.LicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>, purchase: <FormattedMessage id="Button.Purchase" />
              },
              {
                isRecommended: true, licenseType: FewBox.Official.LicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>, purchase: <FormattedMessage id="Button.Purchase" />
              }
            ]} />
        </FewBox.Layout.Container>
        <FewBox.Official.Footer logo={<LogoGraySvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
      </IntlProvider>
    );
  }
}

export default HomePage;
