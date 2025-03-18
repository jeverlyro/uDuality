import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Shop.module.css"; // Reusing Shop styles
import { useState, useEffect } from "react";
import { MdHome, MdShoppingCart } from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";

export default function Terms() {
  const [currentYear, setCurrentYear] = useState("2025");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <Head>
        <title>Terms of Service - uDuality</title>
        <meta name="description" content="uDuality terms and conditions" />
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

        {/* Terms Content */}
        <section className={`${styles.shopContent} section`}>
          <div className="container">
            <h1 className="section-title">Terms of Service</h1>
            <div className={`glass ${styles.shopIntro}`} style={{ padding: "2rem", textAlign: "left" }}>
              <h2>Introduction</h2>
              <p>Last updated: {currentYear}</p>
              <p>These Terms of Service ("Terms") govern your use of the uDuality website and any related services provided by uDuality.</p>
              <p>By accessing our website, you agree to these Terms. If you do not agree with these Terms, please do not use our website.</p>
              
              <h2>Use of Our Website</h2>
              <p>You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with the proper functioning of the website</li>
                <li>Use automated means to access or collect data from the website</li>
                <li>Use the website to transmit malicious software or harmful data</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>The content on our website, including text, graphics, logos, images, and software, is owned by uDuality and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from this content without our explicit permission.</p>
              
              <h2>Products and Purchases</h2>
              <p>All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.</p>
              <p>Prices for our products are subject to change without notice. We are not responsible for pricing errors that may appear on our website.</p>
              
              <h2>User Accounts</h2>
              <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.</p>
              
              <h2>Limitation of Liability</h2>
              <p>uDuality and its members shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use our website or products.</p>
              
              <h2>Changes to These Terms</h2>
              <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our website after any changes indicates your acceptance of the revised Terms.</p>
              
              <h2>Contact Us</h2>
              <p>If you have questions about these Terms, please contact us through our social media channels or reach out to any uDuality member.</p>
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