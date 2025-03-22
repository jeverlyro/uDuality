import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { MdHome, MdCollections, MdKeyboardArrowDown, MdShoppingCart, MdKeyboardArrowUp, MdGames, MdClose, MdArrowForward, MdArrowBack } from "react-icons/md"; 
import { BsDiscord, BsInstagram, BsGithub } from "react-icons/bs";

// Define types for our cards
interface ProjectCard {
  id: number;
  type: 'project';
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[]; // Add this for image slider
  technologies: string[];
  link?: string;
  githubLink?: string; // Add GitHub repository link
}

interface OutingCard {
  id: number;
  type: 'outing';
  caption: string;
  fullDescription: string;
  image: string;
  images: string[]; // Add this for image slider
  date: string;
  location: string;
}

type CardDetail = ProjectCard | OutingCard;

export default function Home() {
  const [currentYear, setCurrentYear] = useState("2025");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<CardDetail | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Sample project data
  const projectData: ProjectCard[] = [
    {
      id: 1,
      type: 'project',
      title: "uDuality Website",
      description: "Our community website built with Next.js",
      fullDescription: "A responsive and modern website showcasing our community, built with Next.js, React, and CSS Modules. Features both neumorphism and glassmorphism design elements for a unique aesthetic.",
      image: "/projects/website.jpg",
      images: ["/projects/website.jpg", "/projects/website-2.jpg", "/projects/website-3.jpg"],
      technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
      githubLink: "https://github.com/uduality/website"
    },
    {
      id: 2,
      type: 'project',
      title: "ML Study Assistant",
      description: "AI-powered study helper for Computer Science students",
      fullDescription: "An application that uses machine learning to help CS students optimize their study sessions. Features include smart flashcards, concept mapping, and personalized learning paths.",
      image: "/projects/ml-assistant.jpg",
      images: ["/projects/ml-assistant.jpg", "/projects/ml-assistant-2.jpg", "/projects/ml-assistant-3.jpg"],
      technologies: ["Python", "TensorFlow", "React", "Firebase"],
      githubLink: "https://github.com/uduality/ml-assistant"
    },
    {
      id: 3,
      type: 'project',
      title: "Minecraft Server Mods",
      description: "Custom plugins for our Minecraft server",
      fullDescription: "A collection of custom Java plugins developed by our members to enhance the gameplay experience on our community Minecraft server. Includes economy systems, custom events, and quality-of-life improvements.",
      image: "/projects/minecraft-mods.jpg",
      images: ["/projects/minecraft-mods.jpg", "/projects/minecraft-mods-2.jpg", "/projects/minecraft-mods-3.jpg"],
      technologies: ["Java", "Bukkit API", "Spigot"],
      githubLink: "https://github.com/uduality/minecraft-plugins"
    }
  ];

  // Sample outing data
  const outingData: OutingCard[] = [
    {
      id: 1,
      type: 'outing',
      caption: "Beach day coding session",
      fullDescription: "We took our laptops to Manado beach for a change of scenery. Surprisingly productive with the sound of waves in the background!",
      image: "/outings/beach.jpg",
      images: ["/outings/beach.jpg", "/outings/beach-2.jpg", "/outings/beach-3.jpg"],
      date: "June 15, 2024",
      location: "Manado Beach"
    },
    {
      id: 2,
      type: 'outing',
      caption: "Hackathon weekend",
      fullDescription: "48 hours of coding, energy drinks, and creativity at the annual Klabat University Hackathon. Our team placed second with our project 'EcoTrack'.",
      image: "/outings/hackathon.jpg",
      images: ["/outings/hackathon.jpg", "/outings/hackathon-2.jpg", "/outings/hackathon-3.jpg"],
      date: "March 22-24, 2024",
      location: "Klabat University Campus"
    },
    {
      id: 3,
      type: 'outing',
      caption: "Mountain hiking retreat",
      fullDescription: "Sometimes you need to disconnect to reconnect. We hiked up Mount Lokon for team bonding and to clear our minds.",
      image: "/outings/hiking.jpg",
      images: ["/outings/hiking.jpg", "/outings/hiking-2.jpg", "/outings/hiking-3.jpg"],
      date: "July 8, 2024",
      location: "Mount Lokon"
    },
    {
      id: 4,
      type: 'outing',
      caption: "Café code review session",
      fullDescription: "Monthly code review and planning session at our favorite café. We reviewed projects, shared knowledge, and planned upcoming activities.",
      image: "/outings/cafe.jpg",
      images: ["/outings/cafe.jpg", "/outings/cafe-2.jpg", "/outings/cafe-3.jpg"],
      date: "February 5, 2024",
      location: "Cozy Code Café, Manado"
    },
    {
      id: 5,
      type: 'outing',
      caption: "Community outreach program",
      fullDescription: "Teaching basic programming concepts to high school students as part of our commitment to spreading tech education.",
      image: "/outings/outreach.jpg",
      images: ["/outings/outreach.jpg", "/outings/outreach-2.jpg", "/outings/outreach-3.jpg"],
      date: "April 12, 2024",
      location: "Manado Public High School"
    },
    {
      id: 6, 
      type: 'outing',
      caption: "End of semester celebration",
      fullDescription: "Celebrating the end of a successful semester with games, food, and planning for future projects.",
      image: "/outings/celebration.jpg",
      images: ["/outings/celebration.jpg", "/outings/celebration-2.jpg", "/outings/celebration-3.jpg"],
      date: "December 20, 2024",
      location: "uDuality Clubhouse"
    }
  ];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    
    // Close modal when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveCard(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (activeCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeCard]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

  const openCardDetail = (card: CardDetail) => {
    setActiveCard(card);
    setCurrentImageIndex(0); // Reset image index when opening a new card
  };

  const closeCardDetail = () => {
    setActiveCard(null);
  };

  const nextImage = () => {
    if (activeCard) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === activeCard.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (activeCard) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? activeCard.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      <Head>
        <title>uDuality</title>
        <meta name="description" content="Unleash the Duality" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vector.ico" />
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
              <p className={styles.heroDescription}>
                We're a group of Computer Science students from Klabat University who love to code, games, and have fun together. Join us and unleash the duality of tech and creativity!
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
                <p>Born in October 2022, uDuality started as a small group of third-year Computer Science students at Klabat University who wanted to create something awesome together. Were basically tech enthusiasts who believe coding doesnt have to be boring!</p>
                <p>What makes us unique? Were not just about algorithms and data structures - we love to bring creativity into everything we do, from coding projects to fun outings. Our name reflects how we balance the technical and creative sides of computer science.</p>
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
              {[1, 2, 3].map((member) => (
                <div key={member} className={`${styles.memberCard} glass`}>
                  <div className={styles.memberImageContainer}>
                    <div className={styles.memberImage}></div>
                  </div>
                  <h3 className={styles.memberName}>CompSci Friend</h3>
                  <p className={styles.memberRole}>Klabat University 22</p>
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
              {projectData.map((project) => (
                <div 
                  key={project.id} 
                  className={`${styles.projectCard} glass`}
                  onClick={() => openCardDetail(project)}
                >
                  <div className={styles.projectImage}></div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectLinks}>
                    {project.link && (
                      <a 
                        onClick={(e) => e.stopPropagation()} 
                        href={project.link} 
                        className={styles.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check It Out
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery Items Subsection */}
            <h3 className={styles.gallerySubtitle}>When We Touch Grass</h3>
            <div className={styles.galleryGrid}>
              {/* Gallery items */}
              {outingData.map((outing) => (
                <div 
                  key={outing.id} 
                  className={`${styles.galleryItem} glass`}
                  onClick={() => openCardDetail(outing)}
                >
                  <div className={styles.galleryImage}></div>
                  <p className={styles.galleryCaption}>{outing.caption}</p>
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
                    <code className={styles.serverAddress}>play.uduality.site</code>
                    <button 
                      className={styles.copyButton}
                      onClick={() => {
                        navigator.clipboard.writeText("play.uduality.site");
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
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
                <a href="#members" onClick={(e) => scrollToSection(e, "members")}>Members</a>
                <a href="#galleries" onClick={(e) => scrollToSection(e, "galleries")}>Galleries</a>
                <Link href="/shop">Shop</Link>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; {currentYear} uDuality - Klabat University CS Students</p>
              <div className={styles.footerBottomLinks}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

     {/* Card Detail Modal */}
     {activeCard && (
        <div className={styles.modalOverlay}>
          <div 
            ref={modalRef}
            className={`${styles.cardDetailModal} glass-neumorphic`}
          >
            <button className={styles.modalCloseButton} onClick={closeCardDetail}>
              <MdClose size={24} />
            </button>
            
            <div className={styles.cardDetailContent}>
              <div className={styles.imageSliderContainer}>
                <div 
                  className={styles.cardDetailImage}
                  style={{ 
                    backgroundImage: `url(${activeCard.images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {activeCard.images.length > 1 && (
                  <>
                    <button 
                      className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <MdArrowBack size={19} />
                    </button>
                    <button 
                      className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <MdArrowForward size={19} />
                    </button>
                    <div className={styles.sliderDots}>
                      {activeCard.images.map((_, index) => (
                        <button 
                          key={index}
                          className={`${styles.sliderDot} ${currentImageIndex === index ? styles.activeDot : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`Go to image ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className={styles.cardDetailInfo}>
                {activeCard.type === 'project' ? (
                  <>
                    <h2 className={styles.cardDetailTitle}>{activeCard.title}</h2>
                    <p className={styles.cardDetailDescription}>{activeCard.fullDescription}</p>
                    <div className={styles.techTags}>
                      {activeCard.technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.cardDetailLinks}>
                      {activeCard.link && (
                        <a href={activeCard.link} className={styles.cardDetailLink} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      )}
                      {activeCard.githubLink && (
                        <a href={activeCard.githubLink} className={styles.cardDetailGithubLink} target="_blank" rel="noopener noreferrer">
                          <BsGithub size={20} />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className={styles.cardDetailTitle}>{activeCard.caption}</h2>
                    <p className={styles.cardDetailDate}>
                      <strong>Date:</strong> {activeCard.date}
                    </p>
                    <p className={styles.cardDetailLocation}>
                      <strong>Location:</strong> {activeCard.location}
                    </p>
                    <p className={styles.cardDetailDescription}>{activeCard.fullDescription}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}