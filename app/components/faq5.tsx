'use client';

import { Badge } from "@/components/ui/badge";
import { useTranslations } from 'next-intl';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const Faq5 = ({
  badge,
  heading,
  description,
  faqs,
}: Faq5Props) => {
  const t = useTranslations('faq5');
  const defaultBadge = badge || t('badge');
  const defaultHeading = heading || t('heading');
  const defaultDescription = description || t('description');
  const defaultFaqs = faqs || (t.raw('faqs') as FaqItem[]);
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">{defaultBadge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{defaultHeading}</h1>
          <p className="text-muted-foreground mt-6 font-medium">
            {defaultDescription}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {defaultFaqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="bg-secondary text-primary flex size-6 shrink-0 items-center justify-center rounded-sm font-mono text-xs">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq5 };
