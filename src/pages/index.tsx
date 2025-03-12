import Head from "next/head";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ThemeSwitch from "@/components/ThemeSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>uDuality</title>
        <meta name="description" content="uDuality community website - Join us in our journey" />
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
              <span className={`${styles.logo} mono`}>uDuality</span>
            </div>
            <div className={styles.navLinks}>
              <a href="#hero">Home</a>
              <a href="#gallery">Gallery</a>
              <a href="#faq">FAQ</a>
              <Link href="/shop" className={styles.navCta}>Shop</Link>
              <ThemeSwitch />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className={`${styles.hero}`}>
          <div className={`${styles.heroContent} glass`}>
            <h1 className={`${styles.heroTitle} mono`}>Unklab Duality</h1>
            <p className={styles.heroSubtitle}>Unleash the Duality</p>
            <div className={styles.heroCtas}>
              <a href="#about" className={`button button-primary`}>Learn More</a>
              <a href="#join" className={`button button-outline`}>Join Us</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.about} section`}>
          <div className="container">
            <h2 className="section-title">About uDuality</h2>
            <div className={`${styles.aboutContent} glass`}>
              <div className={styles.aboutText}>
                <p>uDuality is a community dedicated to exploring the intersection of technology, creativity, and human connection. We believe in the power of duality - the balance between digital and physical, logic and intuition, individual and collective.</p>
                <p>Founded in 2023, our community has grown to include developers, designers, artists, and thinkers from around the world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section id="members" className={`${styles.members} section`}>
          <div className="container">
            <h2 className="section-title">Our Members</h2>
            <div className={styles.membersGrid}>
              {/* Member cards would go here - this is just a placeholder */}
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className={`${styles.memberCard} glass`}>
                  <div className={styles.memberImage}></div>
                  <h3 className={styles.memberName}>Member Name</h3>
                  <p className={styles.memberRole}>Role / Expertise</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={`${styles.gallery} section`}>
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <div className={styles.galleryGrid}>
              {/* Gallery items would go here */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className={`${styles.galleryItem} glass`}>
                  <div className={styles.galleryImage}></div>
                  <p className={styles.galleryCaption}>Caption for gallery item</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`${styles.projects} section`}>
          <div className="container">
            <h2 className="section-title">Our Projects</h2>
            <div className={styles.projectsGrid}>
              {/* Project cards would go here */}
              {[1, 2, 3].map((project) => (
                <div key={project} className={`${styles.projectCard} glass`}>
                  <div className={styles.projectImage}></div>
                  <h3 className={styles.projectTitle}>Project Name</h3>
                  <p className={styles.projectDescription}>Short description of the project and its goals.</p>
                  <a href="#" className={styles.projectLink}>View Project →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`${styles.faq} section`}>
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className={`${styles.faqContainer} glass`}>
              {/* FAQ items */}
              {[
                { question: "What is uDuality?", answer: "uDuality is a community focused on the intersection of technology, art, and human connection." },
                { question: "How can I join?", answer: "You can join our community by filling out the application form on our Join page." },
                { question: "Do you have events?", answer: "Yes, we host regular virtual meetups and occasional in-person events in select cities." },
                { question: "Is membership free?", answer: "Basic membership is free, with premium tiers available for additional benefits." }
              ].map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className={`${styles.shop} section`}>
          <div className="container">
            <h2 className="section-title">Shop</h2>
            <div className={styles.shopGrid}>
              {/* Shop items would go here */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={`${styles.shopItem} glass`}>
                  <div className={styles.shopItemImage}></div>
                  <h3 className={styles.shopItemName}>Product Name</h3>
                  <p className={styles.shopItemPrice}>$XX.XX</p>
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
                <a href="#about">About</a>
                <a href="#members">Members</a>
                <a href="#projects">Projects</a>
                <a href="#gallery">Gallery</a>
                <Link href="/shop">Shop</Link>
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