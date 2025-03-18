import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/Shop.module.css";
import { FaImages, FaTshirt, FaPlus } from 'react-icons/fa';
import { MdHome, MdShoppingCart } from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Shop() {
  const [showNotification, setShowNotification] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [addedItem, setAddedItem] = useState("");
  const [currentYear, setCurrentYear] = useState("2025");
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [notificationKey, setNotificationKey] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setCurrentYear(new Date().getFullYear().toString());
    
    // Initialize cart count from localStorage when component mounts
    if (typeof window !== 'undefined') {
      try {
        const cartData = localStorage.getItem('udualityCart');
        if (cartData) {
          const cart = JSON.parse(cartData);
          if (Array.isArray(cart)) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            setCartCount(totalItems);
          }
        }
      } catch (error) {
        console.error("Error loading cart count:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleImageError = (itemId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [itemId]: true
    }));
  };

  const shopItems = [
    { id: 1, name: "uDuality T-Shirt", price: 25.99, image: "/shop/tshirt.jpg", icon: <FaTshirt /> },
    { id: 2, name: "Logo Sticker Pack", price: 12.50, image: "/shop/stickers.jpg", icon: <FaImages /> },
    { id: 3, name: "Developer Hoodie", price: 49.99, image: "/shop/hoodie.jpg", icon: <FaTshirt /> },
    { id: 4, name: "Coffee Mug", price: 18.99, image: "/shop/mug.jpg", icon: null },
    { id: 5, name: "Notebook", price: 15.00, image: "/shop/notebook.jpg", icon: null },
    { id: 6, name: "Cap", price: 22.99, image: "/shop/cap.jpg", icon: null }
  ];

  const addToCart = (item: typeof shopItems[0]) => {
    if (!isClient) return;
    
    try {
      let cart: CartItem[] = [];
      
      try {
        const cartData = localStorage.getItem('udualityCart');
        cart = cartData ? JSON.parse(cartData) : [];
        
        if (!Array.isArray(cart)) {
          cart = [];
          console.warn("Cart data was invalid, resetting");
        }
      } catch (parseError) {
        console.error("Error parsing cart data:", parseError);
        cart = [];
      }
      
      const existingItemIndex = cart.findIndex((cartItem: CartItem) => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1
        });
      }
      
      localStorage.setItem('udualityCart', JSON.stringify(cart));
      
      // Update cart count
      const newCartCount = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(newCartCount);
      
      setAddedItem(item.name);
      setNotificationKey(prevKey => prevKey + 1);
      setShowNotification(true);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };
  

  return (
    <>
      <Head>
        <title>Shop - uDuality</title>
        <meta name="description" content="uDuality shop - Browse our merchandise" />
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
              <Link href="/cart" className={styles.cartLink}>
                <div className={styles.cartIconWrapper}>
                  <MdShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className={styles.cartBadge}>{cartCount}</span>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Shop Content */}
        <section className={`${styles.shopContent} section`}>
          <div className="container">
            <h1 className="section-title">Our Shop</h1>
            <p className={styles.shopIntro}>Browse through our collection of merchandise and support our community.</p>

            {showNotification && (
              <div key={notificationKey} className={styles.notification}>
                <MdShoppingCart className={styles.notificationIcon} />
                <span className={styles.notificationText}>{addedItem} added to cart!</span>
              </div>
            )}
            
            <div className={styles.shopGrid}>
              {/* Shop items */}
              {shopItems.map((item, index) => (
                <div key={index} className={`${styles.shopItem} glass`}>
                  <div className={styles.shopItemImageContainer}>
                    {imageErrors[item.id] ? (
                      <div className={styles.imagePlaceholder}>
                        {item.icon || <FaTshirt size={40} />}
                        <p>Image unavailable</p>
                      </div>
                    ) : (
                      <div 
                        className={styles.shopItemImage} 
                        style={{ backgroundImage: `url(${item.image})` }}
                        onError={() => handleImageError(item.id)}
                      ></div>
                    )}
                  </div>
                  <h3 className={styles.shopItemName}>{item.name}</h3>
                  <p className={styles.shopItemPrice}>IDR {item.price.toLocaleString('id-ID')}</p>
                  <button 
                    className={`button button-primary ${styles.shopButton}`}
                    onClick={() => addToCart(item)}
                  >
                    <FaPlus className={styles.buttonIcon} /> Add to Cart
                  </button>
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
                <Link href="/Privacy">Privacy Policy</Link>
                <Link href="/Terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}