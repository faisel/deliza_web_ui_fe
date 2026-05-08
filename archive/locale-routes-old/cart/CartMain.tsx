'use client'
import React, { useState, useMemo } from 'react'

import Image from "next/image";
interface CartItem {
  id: number
  name: string
  price: number
  image: string
  qty: number
}

function CartMain() {

  const [items, setItems] = useState<CartItem[]>([
    { id: 470, name: 'Run Max 88', price: 120, image: 'assets/images/shop/shop-01.jpg', qty: 3 },
    { id: 476, name: 'Workout Revolution 2', price: 180, image: 'assets/images/shop/shop-02.jpg', qty: 3 },
    { id: 478, name: 'KL 17 BS', price: 80, image: 'assets/images/shop/shop-02.jpg', qty: 3 },
  ])

  // =========================
  // Quantity handlers
  // =========================
  const increaseQty = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  const decreaseQty = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  // =========================
  // Cart total calculation
  // =========================
  const cartTotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.qty, 0)
  }, [items])

  return (
    <main className="ms-main">
      <div className="ms-page-content pt--65 pb--65">
        <article className="post-283 page type-page status-publish hentry">
          <div className="ms-default-page container">
            <div className="woocommerce">
              <div className="ms-woocommerce-cart-form-wrapper">
                <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>

                  <tbody>
                    {items.map(item => (
                      <tr key={item.id} className="woocommerce-cart-form__cart-item cart_item">
                        <td className="product-remove">
                          <a
                            href="#0"
                            className="remove"
                            onClick={() => removeItem(item.id)}
                          >
                            ✕
                          </a>
                        </td>

                        <td className="product-thumbnail">
                          <Image
                              src={item.image}
                              alt=""
                              width={800}
                              height={600}
                              aria-hidden="true"
                          />
                        </td>

                        <td className="product-name">
                          {item.name}
                        </td>

                        <td className="product-price">
                          ${item.price.toFixed(2)}
                        </td>

                        <td>
                          <div className="cart-edit">
                            <div className="quantity-edit">
                              <button className="button" onClick={() => decreaseQty(item.id)}>
                                <i className="fa fa-minus minus" />
                              </button>

                              <input
                                type="text"
                                className="input"
                                value={item.qty}
                                readOnly
                              />

                              <button className="button plus" onClick={() => increaseQty(item.id)}>
                                <i className="fa fa-plus plus" />
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          ${(item.price * item.qty).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="row">
                  <div className="col-md-5 offset-md-7">
                    <div className="ms-cart-collaterals cart-collaterals">
                      <div className="ms-cart-totals cart_totals">
                        <h3>Cart totals</h3>

                        <table className="shop_table shop_table_responsive">
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td>${cartTotal.toFixed(2)}</td>
                            </tr>
                            <tr className="order-total">
                              <th>Total</th>
                              <td><strong>${cartTotal.toFixed(2)}</strong></td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                          <a href="#0" className="rts-btn btn-primary">
                            Proceed to checkout
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default CartMain
