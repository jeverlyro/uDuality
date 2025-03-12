import Head from "next/head";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Shop.module.css";
import ThemeSwitch from "@/components/ThemeSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop - uDuality</title>
        <meta name="description" content="uDuality shop - Browse our merchandise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Navigation */}
        <nav className={`${styles.navbar} glass`}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <Link href="/" className={`${styles.logo} mono`}>uDuality</Link>
            </div>
            <div className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="/#gallery">Gallery</Link>
              <Link href="/#faq">FAQ</Link>
              <ThemeSwitch />
            </div>
          </div>
        </nav>

        {/* Shop Content */}
        <section className={`${styles.shopContent} section`}>
          <div className="container">
            <h1 className="section-title">Our Shop</h1>
            <p className={styles.shopIntro}>Browse through our collection of merchandise and support our community.</p>
            
            <div className={styles.shopGrid}>
              {/* Shop items */}
              {[
                { name: "uDuality T-Shirt", price: 25.99, image: "/shop/tshirt.jpg" },
                { name: "Logo Sticker Pack", price: 12.50, image: "/shop/stickers.jpg" },
                { name: "Developer Hoodie", price: 49.99, image: "/shop/hoodie.jpg" },
                { name: "Coffee Mug", price: 18.99, image: "/shop/mug.jpg" },
                { name: "Notebook", price: 15.00, image: "/shop/notebook.jpg" },
                { name: "Cap", price: 22.99, image: "/shop/cap.jpg" }
              ].map((item, index) => (
                <div key={index} className={`${styles.shopItem} glass`}>
                  <div className={styles.shopItemImage} style={{ backgroundImage: `url(${item.image})` }}></div>
                  <h3 className={styles.shopItemName}>{item.name}</h3>
                  <p className={styles.shopItemPrice}>${item.price.toFixed(2)}</p>
                  <button className={`button button-primary ${styles.shopButton}`}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${styles.footer} glass`}>
          <div className="container">
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <h3 className="mono">uDuality</h3>
                <p>Bringing communities together through innovation.</p>
              </div>
              <div className={styles.footerLinks}>
                <h4>Links</h4>
                <Link href="/#about">About</Link>
                <Link href="/#members">Members</Link>
                <Link href="/#projects">Projects</Link>
                <Link href="/#gallery">Gallery</Link>
              </div>
              <div className={styles.footerContact}>
                <h4>Connect</h4>
                <a href="#">Discord</a>
                <a href="#">GitHub</a>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; {new Date().getFullYear()} uDuality. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}