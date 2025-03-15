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
              <p className={styles.heroSubtitle}>CompSci Students with a Creative Twist</p>
              <p className={styles.heroDescription}>
                We're a bunch of third-year Computer Science students from Klabat University 
                who love to blend coding skills with creative vibes. Join our journey of 
                learning, creating, and having fun with tech!
              </p>
              <div className={styles.heroCtas}>
                <a href="#about" className={`button button-primary ${styles.heroButton}`} onClick={(e) => scrollToSection(e, "about")}>
                  <span>Get to Know Us</span>
                </a>
                <a href="#join" className={`button button-outline ${styles.heroButton}`} onClick={(e) => scrollToSection(e, "faq")}>
                  <span>Hang Out With Us</span>
                </a>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <div className={`${styles.heroImage} glass`}></div>
            </div>
          </div>
          <div className={styles.scrollIndicator} onClick={(e) => scrollToSection(e as any, "about")} style={{cursor: 'pointer'}}>
            <span>Scroll down to see more</span>
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
                <p>Born in October 2022, uDuality started as a small group of third-year Computer Science students at Klabat University who wanted to create something awesome together. We're basically tech enthusiasts who believe coding doesn't have to be boring!</p>
                <p>What makes us unique? We're not just about algorithms and data structures - we love to bring creativity into everything we do, from coding projects to fun outings. Our name reflects how we balance the technical and creative sides of computer science.</p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        {/* FAQ Section */}
        <section id="faq" className={`${styles.faq} ${styles.section}`}>
          <div className="container">
            <h2 className="section-title">Questions You Might Have</h2>
            <div className={`${styles.faqContainer} glass`}>
              {/* FAQ items with toggle functionality */}
              {[
                { question: "What exactly is uDuality?", answer: "We're a group of Computer Science students from Klabat University who came together in October 2022. Think of us as a tech club with a creative flair - we code, design, hang out, and build cool stuff together!" },
                { question: "Can I join your group?", answer: "Absolutely! If you're a Klabat University student interested in coding, design, or just want to be part of a fun tech community, reach out to any of our members. We're always looking for new friends who share our passion for technology and creativity." },
                { question: "What kind of activities do you do?", answer: "We organize study sessions, work on coding projects together, participate in hackathons, and sometimes just hang out and play games (especially Minecraft!). We also occasionally go on outings to bond and recharge our creative batteries." },
                { question: "Do I need to be a coding expert to join?", answer: "Not at all! We're all still learning. Whether you're just starting out or already building complex applications, there's a place for you here. What matters most is your enthusiasm and willingness to learn and collaborate." }
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
            <h2 className="section-title">The Squad</h2>
            <div className={styles.membersGrid}>
              {/* Member cards with improved styling */}
              {[1, 2, 3].map((member) => (
                <div key={member} className={`${styles.memberCard} glass`}>
                  <div className={styles.memberImageContainer}>
                    <div className={styles.memberImage}></div>
                  </div>
                  <h3 className={styles.memberName}>CompSci Friend</h3>
                  <p className={styles.memberRole}>Klabat University '25</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        {/* Merged Galleries Section */}
        <section id="galleries" className={`${styles.galleries} ${styles.section}`}>
          <div className="container">
            <h2 className="section-title">Our Digital & Real Life Adventures</h2>
            
            {/* Projects Subsection */}
            <h3 className={styles.gallerySubtitle}>Cool Stuff We've Built</h3>
            <div className={styles.projectsGrid}>
              {/* Project cards */}
              {[1, 2, 3].map((project) => (
                <div key={project} className={`${styles.projectCard} glass`}>
                  <div className={styles.projectImage}></div>
                  <h3 className={styles.projectTitle}>Awesome Project</h3>
                  <p className={styles.projectDescription}>Something cool we made during late-night coding sessions with lots of coffee.</p>
                  <a href="#" className={styles.projectLink}>Check It Out</a>
                </div>
              ))}
            </div>
            
            {/* Gallery Items Subsection */}
            <h3 className={styles.gallerySubtitle}>When We Touch Grass</h3>
            <div className={styles.galleryGrid}>
              {/* Gallery items */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className={`${styles.galleryItem} glass`}>
                  <div className={styles.galleryImage}></div>
                  <p className={styles.galleryCaption}>That time when we weren't in front of computers</p>
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
                <h4>Quick Links</h4>
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About Us</a>
                <a href="#members" onClick={(e) => scrollToSection(e, "members")}>The Squad</a>
                <a href="#galleries" onClick={(e) => scrollToSection(e, "galleries")}>Our Adventures</a>
                <Link href="/shop">Merch Shop</Link>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; {currentYear} uDuality - Klabat University CS Students</p>
              <div className={styles.footerBottomLinks}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}