import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Shop.module.css"; // Reusing Shop styles
import { useState, useEffect } from "react";
import { MdHome, MdShoppingCart } from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";

export default function Privacy() {
  const [currentYear, setCurrentYear] = useState("2025");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy - uDuality</title>
        <meta name="description" content="uDuality privacy policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vector.ico" />
      </Head>
      <div className={styles.page}>
        {/* Navigation */}
        <nav className={`${styles.navbar} glass`}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <Link href="/" className={`${styles.logo} mono`}>uDuality</Link>
            </div>
            <div className={styles.navLinks}>
              <Link href="/" className={styles.iconLink}>
                <MdHome size={20} />
                <span>Home</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Privacy Content */}
        <section className={`${styles.shopContent} section`}>
          <div className="container">
            <h1 className="section-title">Privacy Policy</h1>
            <div className={`glass ${styles.shopIntro}`} style={{ padding: "2rem", textAlign: "left" }}>
              <h2>Introduction</h2>
              <p>Last updated: {currentYear}</p>
              <p>This Privacy Policy describes how uDuality ("we", "us", or "our") collects, uses, and shares your personal information when you visit or make a purchase from our website.</p>
              
              <h2>Information We Collect</h2>
              <p>When you visit our website, we collect certain information about your device, your interaction with the site, and information necessary to process your purchases. We may also collect additional information if you contact us.</p>
              
              <h3>Device Information</h3>
              <p>We collect information about the device and browser you use to visit our site, including IP address, browser type, and operating system.</p>
              
              <h3>Order Information</h3>
              <p>When you make a purchase, we collect information necessary to process your payment and fulfill your order, such as your name, billing address, shipping address, and payment information.</p>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                <li>Fulfill orders and process payments</li>
                <li>Communicate with you about your order</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>Data Storage</h2>
              <p>Your personal information is stored locally on your device using browser local storage for cart functionality. We do not maintain a database of customer information at this time.</p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>
              
              <h2>Contact Us</h2>
              <p>If you have questions or concerns about our Privacy Policy, please contact us through our social media channels or reach out to any uDuality member.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${styles.footer} glass`}>
          <div className="container">
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <h3 className="mono">uDuality</h3>
                <p>Klabat University Computer Science students, est. October 2022</p>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Discord">
                    <BsDiscord size={20} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <BsInstagram size={20} />
                  </a>
                </div>
              </div>
              <div className={styles.footerLinks}>
                <h4>Navigation</h4>
                <Link href="/#about">About</Link>
                <Link href="/#members">Members</Link>
                <Link href="/#galleries">Galleries</Link>
                <Link href="/shop">Shop</Link>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; {currentYear} uDuality. All rights reserved.</p>
              <div className={styles.footerBottomLinks}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}