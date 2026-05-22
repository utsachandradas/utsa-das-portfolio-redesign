export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Utsa Das",
  "alternateName": "Utsa Chandra Das",
  "url": "https://utsadas.com",
  "jobTitle": "SEO Strategist & GEO Expert",
  "sameAs": [
    "https://linkedin.com/in/utsadas",
    "https://twitter.com/utsadas",
    "https://github.com/utsachandradas"
  ],
  "knowsAbout": [
    "Search Engine Optimization",
    "Generative Engine Optimization",
    "Technical SEO",
    "AI Search Optimization",
    "Ecommerce SEO",
    "Local SEO"
  ],
  "description": "Utsa Das is a professional SEO and GEO strategist helping businesses optimize for both traditional search engines and modern AI systems."
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Utsa Das Portfolio",
  "url": "https://utsadas.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://utsadas.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Utsa Das SEO Consulting",
  "url": "https://utsadas.com",
  "logo": "https://utsadas.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Utsa Das"
  }
});

export const getBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://utsadas.com${item.item}`
  }))
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO & GEO Optimization",
  "provider": {
    "@type": "Person",
    "name": "Utsa Das"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical SEO Audit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "GEO (AI Search) Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ecommerce SEO Strategy"
        }
      }
    ]
  }
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
