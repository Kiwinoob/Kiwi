export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kee Hui",
    url: "keehui.vercel.app",
    jobTitle: "Web Developer",
    description:
      "An aspiring Web Developer focused on creating secure and scalable web applications with cutting-edge technologies.",
    sameAs: [
      "https://github.com/kiwinoob",
      "https://www.linkedin.com/in/kee-hui-lam/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
