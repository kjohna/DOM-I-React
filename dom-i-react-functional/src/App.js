import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/Header';
import imgTest from './components/img/logo.png';
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": {imgTest}
  },
  "cta": {
    "h1": "DOM\r\nIs\r\nAwesome",
    "button": "Get Started",
    "img-src": "../img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "../img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "new-h4":"New Content",
    "new-content": "New content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "rabbit-h4":"Rabbit Content",
    "rabbit-content": "Rabbit content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "alligator-h4":"Alligator Content",
    "alligator-content": "Alligator content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\r\nSomewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const App = props => {
  // get navItems from siteContent
  let navItems = [];
  for (const navItem in siteContent.nav) {
    if (/^nav-item/.test(navItem)) {
      navItems.push(siteContent.nav[navItem]);
    }
  }
  // get logoSrc for header from siteContent
  const logoSrc=siteContent.nav["img-src"];
  // get CTA content from siteContent
  const ctaContent=siteContent.cta;
  // get main-content from siteContent
  const mainContent=siteContent["main-content"];
  // get contact content from siteContent
  const contactContent=siteContent["contact"];
  // get footer content from siteContent
  const footerContent=siteContent["footer"];

  return (
    <div>
      <Header navItems={navItems} logoSrc={logoSrc}/>
      {/* <Cta ctaContent={ctaContent} />
      <MainContent mainContent={mainContent} />
      <Contact contactContent={contactContent} />
      <Footer footerContent={footerContent} /> */}
    </div>
  );
};

export default App;