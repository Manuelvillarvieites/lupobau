'use client';

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from 'next-intl';

const Footer24 = () => {
  const t = useTranslations('common.footer');

  const footerData = {
    heading: t('heading'),
    email: {
      label: "info@lupobau.li",
      href: "mailto:info@lupobau.li",
    },
    phone: {
      label: "+423 XXX XXXX",
      href: "tel:+423XXXXXXX",
    },
    socialLinks: [
      { label: t('twitter'), href: "https://twitter.com/lupobau" },
      { label: t('instagram'), href: "https://instagram.com/lupobau" },
      { label: t('tiktok'), href: "https://tiktok.com/@lupobau" },
      { label: t('facebook'), href: "https://facebook.com/lupobau" },
    ],
    navLinks: [
      { label: t('home'), href: "/" },
      { label: t('about'), href: "/uber-uns" },
      { label: t('pricing'), href: "/leistungen" },
      { label: t('contact'), href: "/kontakt" },
      { label: t('privacy'), href: "/datenschutz" },
      { label: t('imprint'), href: "/impressum" },
    ],
  };

  return (
    <section className="py-16 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="bg-muted rounded-lg p-8 md:p-16">
          <div className="border-border mb-6 border-b pb-6 text-left md:mb-8 md:pb-8 md:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
              {footerData.heading}
            </h1>
          </div>

          <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:justify-between lg:gap-4 xl:gap-8">
            {/* Email Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-sm font-medium uppercase tracking-wide">
                Email
              </h3>
              <a
                href={footerData.email.href}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-base transition-colors md:text-lg"
              >
                {footerData.email.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-sm font-medium uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {footerData.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-base transition-colors md:text-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-primary text-sm font-medium uppercase tracking-wide">
                Phone
              </h3>
              <a
                href={footerData.phone.href}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-base transition-colors md:text-lg"
              >
                {footerData.phone.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:py-4">
          <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {footerData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-muted-foreground text-sm md:text-right md:text-xs">
            {t('designed')} <strong>{t('designedLocation')}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer24 };
