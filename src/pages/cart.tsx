import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Cart.module.css";
import ThemeSwitch from "@/components/ThemeSwitch";
import { CartItem } from "./shop";

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
        <meta name="description" content="Your uDuality shopping cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        {/* Navigation */}
        <nav className={`${styles.navbar} glass`}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <Link href="/" className={`${styles.logo} mono`}>uDuality</Link>
            </div>
            <div className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <ThemeSwitch />
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
                      <div className={styles.priceCol}>${item.price.toFixed(2)}</div>
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
                      <div className={styles.totalCol}>${(item.price * item.quantity).toFixed(2)}</div>
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
                    <span>Subtotal:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Tax:</span>
                    <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Shipping:</span>
                    <span>$5.00</span>
                  </div>
                  <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>Total:</span>
                    <span>${(calculateTotal() * 1.1 + 5).toFixed(2)}</span>
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
              <p>&copy; {currentYear} uDuality. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}