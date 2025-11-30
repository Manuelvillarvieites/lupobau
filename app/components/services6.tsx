'use client';

import { Code, Cog, PenTool, Shrub } from "lucide-react";
import { useTranslations } from 'next-intl';

const Services6 = () => {
  const t = useTranslations('services6');

  const serviceIcons = [
    <Cog className="h-8 w-8" key="1" />,
    <PenTool className="h-8 w-8" key="2" />,
    <Code className="h-8 w-8" key="3" />,
    <Shrub className="h-8 w-8" key="4" />,
  ];

  const services = t.raw('services') as Array<{title: string; description: string; items: string[]}>;

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {t('heading')}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              {t('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="group space-y-6 text-center">
                <div className="bg-muted group-hover:bg-foreground group-hover:text-background mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  {serviceIcons[index]}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-muted-foreground text-xs font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services6 };
