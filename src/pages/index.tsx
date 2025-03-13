import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentYear, setCurrentYear] = useState("2025");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <Head>
        <title>uDuality</title>
        <meta name="description" content="Unleash the Duality" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top/Bottom Navigation */}
      <nav className={`${styles.sidebar} glass`}>
        <div className={styles.sidebarContent}>
          <div className={styles.logoContainer}>
            <span className={`${styles.logo}`}>uDuality</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#hero">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
              </svg>
              <span>Home</span>
            </a>
            <a href="#gallery">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
              </svg>
              <span>Gallery</span>
            </a>
            <a href="#faq">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
              <span>FAQ</span>
            </a>
            <Link href="/shop">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <span>Shop</span>
            </Link>
          </div>
          <div className={styles.themeToggle}>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
      
      <div className={`${styles.page}`}>
        {/* Hero Section */}
        <section id="hero" className={`${styles.hero}`}>
          <div className={styles.heroBackground}>
            <div className={styles.heroShape}></div>
            <div className={styles.heroShape2}></div>
          </div>
          <div className={`${styles.heroContent} glass`}>
            <div className={styles.heroTextContainer}>
              <h1 className={styles.heroTitle}>
                Unklab Duality
              </h1>
              <p className={styles.heroSubtitle}>Where Technology Meets Creativity</p>
              <p className={styles.heroDescription}>
                Unleash your potential in a community that celebrates the balance between 
                code and design, logic and intuition, individual craft and collective innovation.
              </p>
              <div className={styles.heroCtas}>
                <a href="#about" className={`button button-primary ${styles.heroButton}`}>
                  <span>Learn More</span>
                </a>
                <a href="#join" className={`button button-outline ${styles.heroButton}`}>
                  <span>Join Us</span>
                </a>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <div className={`${styles.heroImage} glass`}></div>
            </div>
          </div>
          <div className={styles.scrollIndicator}>
            <span>Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        {/* About Section */}
        <section id="about" className={`${styles.about} ${styles.section}`}>
          <div className="container">
            <h2 className="section-title">About uDuality</h2>
            <div className={`${styles.aboutContent} glass`}>
              <div className={styles.aboutText}>
                <p>uDuality is a community dedicated to exploring the intersection of technology, creativity, and human connection. We believe in the power of duality - the balance between digital and physical, logic and intuition, individual and collective.</p>
                <p>Founded in 2022, our community has grown to include developers, designers, artists, and thinkers from around the world.</p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        {/* FAQ Section */}
        <section id="faq" className={`${styles.faq} ${styles.section}`}>
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

        <div className={styles.sectionSeparator}></div>

        {/* Members Section */}
        <section id="members" className={`${styles.members} ${styles.section}`}>
          <div className="container">
            <h2 className="section-title">Our Members</h2>
            <div className={styles.membersGrid}>
              {/* Member cards with improved styling */}
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className={`${styles.memberCard} glass`}>
                  <div className={styles.memberImageContainer}>
                    <div className={styles.memberImage}></div>
                  </div>
                  <h3 className={styles.memberName}>Member Name</h3>
                  <p className={styles.memberRole}>Role / Expertise</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        {/* Gallery Section */}
        <section id="gallery" className={`${styles.gallery} ${styles.section}`}>
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

        <div className={styles.sectionSeparator}></div>

        {/* Projects Section */}
        <section id="projects" className={`${styles.projects} ${styles.section}`}>
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

        <div className={styles.sectionSeparator}></div>

        {/* Footer */}
        <footer className={`${styles.footer} glass`}>
          <div className="container">
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <h3 className="mono">uDuality</h3>
                <p>Bringing communities together through innovation.</p>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Discord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.footerLinks}>
                <h4>Navigation</h4>
                <a href="#about">About</a>
                <a href="#members">Members</a>
                <a href="#projects">Projects</a>
                <a href="#gallery">Gallery</a>
                <Link href="/shop">Shop</Link>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; {currentYear} uDuality. All rights reserved.</p>
              <div className={styles.footerBottomLinks}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}