function countDomains(sites) {
    const domains = sites.map(site => {
      const domain = site.split('://')[1].split('/')[0];
      return domain.includes('.') ? domain.split('.')[0] : domain;
    });
    const domainCounts = domains.reduce((acc, domain) => {
      acc[domain] = (acc[domain] || 0) + 1;
      return acc;
    }, {});
    return domainCounts;
  }
  