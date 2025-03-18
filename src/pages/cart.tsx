import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Cart.module.css";
import { CartItem } from "./shop";
// Add icon imports
import { MdHome, MdShoppingBag} from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [currentYear, setCurrentYear] = useState("2025");

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
    // Load cart data from localStorage when component mounts (client-side only)
    const savedCart = localStorage.getItem('udualityCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        localStorage.removeItem('udualityCart'); // Clear invalid data
      }
    }
    // Update the year client-side
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (!isClient || newQuantity < 1) return;

    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('udualityCart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    if (!isClient) return;
    
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('udualityCart', JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    if (!isClient) return;
    
    setCartItems([]);
    localStorage.removeItem('udualityCart');
  };

  // Simple checkout function
  const checkout = () => {
    if (!isClient) return;
    // In a real app, you would handle the checkout process here
    alert('Checkout functionality will be implemented in the future!');
  };

  return (
    <>
      <Head>
        <title>Shopping Cart - uDuality</title>
        <meta name="description" content="uDuality shopping cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vector.ico" />
      </Head>
      <div className={styles.page}>
        {/* Updated Navigation */}
        <nav className={`${styles.navbar} glass`}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <Link href="/" className={`${styles.logo} mono`}>uDuality</Link>
            </div>
            <div className={styles.navLinks}>
              <Link href="/" className={styles.navLink}>
                <MdHome size={20} />
                <span>Home</span>
              </Link>
              <Link href="/shop" className={styles.navLink}>
                <MdShoppingBag size={20} />
                <span>Shop</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Cart Content */}
        <section className={`${styles.cartContent} section`}>
          <div className="container">
            <h1 className="section-title">Your Cart</h1>
            
            {cartItems.length === 0 ? (
              <div className={`${styles.emptyCart} glass`}>
                <p>Your cart is empty</p>
                <Link href="/shop" className="button button-primary">
                  Browse Shop
                </Link>
              </div>
            ) : (
              <>
                <div className={`${styles.cartItems} glass`}>
                  <div className={styles.cartHeader}>
                    <span className={styles.productCol}>Product</span>
                    <span className={styles.priceCol}>Price</span>
                    <span className={styles.quantityCol}>Quantity</span>
                    <span className={styles.totalCol}>Total</span>
                    <span className={styles.actionsCol}>Actions</span>
                  </div>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.productCol}>
                        <div className={styles.productImage} style={{ backgroundImage: `url(${item.image})` }}></div>
                        <span>{item.name}</span>
                      </div>
                      <div className={styles.priceCol}>Rp{item.price.toFixed(2)}</div>
                      <div className={styles.quantityCol}>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className={styles.quantityValue}>{item.quantity}</span>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className={styles.totalCol}>Rp{(item.price * item.quantity).toFixed(2)}</div>
                      <div className={styles.actionsCol}>
                        <button 
                          className={styles.removeButton}
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`${styles.cartSummary} glass`}>
                  <div className={styles.summaryRow}>
                    <span>Total:</span>
                    <span>Rp{calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className={styles.cartActions}>
                    <button 
                      className={`button button-outline ${styles.clearButton}`}
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                    <button 
                      className={`button button-primary ${styles.checkoutButton}`}
                      onClick={checkout}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Updated Footer */}
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