import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { MdHome, MdCollections, MdKeyboardArrowDown, MdShoppingCart, MdKeyboardArrowUp, MdGames } from "react-icons/md"; 
import { BsDiscord, BsInstagram} from "react-icons/bs";

export default function Home() {
  const [currentYear, setCurrentYear] = useState("2025");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Add smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
            <a href="#hero" className={styles.navLink} onClick={(e) => scrollToSection(e, "hero")}>
              <MdHome size={20} />
              <span>Home</span>
            </a>
            <a href="#galleries" className={styles.navLink} onClick={(e) => scrollToSection(e, "galleries")}>
              <MdCollections size={20} />
              <span>Galleries</span>
            </a>
            <a href="#minecraft" className={styles.navLink} onClick={(e) => scrollToSection(e, "minecraft")}>
              <MdGames size={20} />
              <span>Minecraft</span>
            </a>
            <Link href="/shop" className={styles.navLink}>
              <MdShoppingCart size={20} />
              <span>Shop</span>
            </Link>
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
                <a href="#about" className={`button button-primary ${styles.heroButton}`} onClick={(e) => scrollToSection(e, "about")}>
                  <span>Learn More</span>
                </a>
                <a href="#join" className={`button button-outline ${styles.heroButton}`} onClick={(e) => scrollToSection(e, "faq")}>
                  <span>Join Us</span>
                </a>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <div className={`${styles.heroImage} glass`}></div>
            </div>
          </div>
          <div className={styles.scrollIndicator} onClick={(e) => scrollToSection(e as any, "about")} style={{cursor: 'pointer'}}>
            <span>Scroll to explore</span>
            <MdKeyboardArrowDown size={24} />
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
              {/* FAQ items with toggle functionality */}
              {[
                { question: "What is uDuality?", answer: "uDuality is a community focused on the intersection of technology, art, and human connection. We bring together developers, designers, creators, and thinkers to explore the balance between technical and creative aspects of modern digital life." },
                { question: "How can I join?", answer: "You can join our community by filling out the application form on our Join page. We welcome individuals from all backgrounds who are interested in technology, design, or the intersection of both. After submitting your application, you'll receive an email with further instructions." },
                { question: "Do you have events?", answer: "Yes, we host regular virtual meetups and occasional in-person events in select cities. Our events include workshops, hackathons, design sprints, and casual networking opportunities. Check our calendar for upcoming events and join our Discord for real-time announcements." },
                { question: "Is membership free?", answer: "Basic membership is free, with premium tiers available for additional benefits. Free membership gives you access to our community forums, public events, and resources. Premium members receive access to exclusive workshops, mentorship opportunities, and early access to new projects and initiatives." }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className={styles.faqQuestion}>
                    {item.question}
                    {activeFaq === index ? 
                      <MdKeyboardArrowUp size={24} /> : 
                      <MdKeyboardArrowDown size={24} />
                    }
                  </h3>
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
              {[1, 2, 3].map((member) => (
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

        {/* Merged Galleries Section */}
        <section id="galleries" className={`${styles.galleries} ${styles.section}`}>
          <div className="container">
            <h2 className="section-title">Galleries</h2>
            
            {/* Projects Subsection */}
            <h3 className={styles.gallerySubtitle}>Featured Projects</h3>
            <div className={styles.projectsGrid}>
              {/* Project cards */}
              {[1, 2, 3].map((project) => (
                <div key={project} className={`${styles.projectCard} glass`}>
                  <div className={styles.projectImage}></div>
                  <h3 className={styles.projectTitle}>Project Name</h3>
                  <p className={styles.projectDescription}>Short description of the project and its goals.</p>
                  <a href="#" className={styles.projectLink}>View Project</a>
                </div>
              ))}
            </div>
            
            {/* Gallery Items Subsection */}
            <h3 className={styles.gallerySubtitle}>Outings</h3>
            <div className={styles.galleryGrid}>
              {/* Gallery items */}
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

        {/* Minecraft Server Section */}
        <section id="minecraft" className={`${styles.minecraft} ${styles.section}`}>
          <div className="container">
            <h2 className="section-title">Minecraft Server</h2>
            <div className={`${styles.minecraftContent} glass`}>
              <div className={styles.minecraftInfo}>
                <h3>Join Our Community Server</h3>
                <p>Connect with other uDuality members in our Minecraft world. Lets build and explore together!.</p>
                
                <h4>How to Join:</h4>
                <ol>
                  <li>Open Minecraft Java Edition</li>
                  <li>Go to Multiplayer</li>
                  <li>Click Add Server</li>
                  <li>Enter uDuality as the server name</li>
                  <li>Copy and paste the server address below</li>
                  <li>Click Done and connect!</li>
                </ol>
                
                <div className={styles.serverAddressContainer}>
                  <span className={styles.serverAddressLabel}>Server Address:</span>
                  <div className={styles.serverAddressCopy}>
                    <code className={styles.serverAddress}>mc.uduality.com</code>
                    <button 
                      className={styles.copyButton}
                      onClick={() => {
                        navigator.clipboard.writeText("mc.uduality.com");
                        alert("Server address copied to clipboard!");
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
                
                <p className={styles.serverVersion}>Current Version: 1.21.4</p>
              </div>
              <div className={styles.minecraftImage}>
                <div className={`${styles.minecraftPreview} glass`}></div>
              </div>
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
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
                <a href="#members" onClick={(e) => scrollToSection(e, "members")}>Members</a>
                <a href="#galleries" onClick={(e) => scrollToSection(e, "galleries")}>Galleries</a>
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