const CART_KEY = "novanest_demo_cart_v1";

export function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) ?? []; }
  catch { return []; }
}

export function setCart(items){
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
}

export function addToCart(product, qty = 1){
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty += qty;
  else cart.push({ id: product.id, name: product.name, price: product.price, qty });
  setCart(cart);
}

export function updateQty(id, qty){
  const cart = getCart().map(i => i.id === id ? { ...i, qty } : i).filter(i => i.qty > 0);
  setCart(cart);
}

export function removeFromCart(id){
  setCart(getCart().filter(i => i.id !== id));
}

export function cartCount(){
  return getCart().reduce((sum, i) => sum + (Number(i.qty) || 0), 0);
}

export function cartTotal(){
  return getCart().reduce((sum, i) => sum + (Number(i.price) * (Number(i.qty) || 0)), 0);
}

export function updateCartBadge(){
  const el = document.getElementById("cartCount");
  if (el) el.textContent = String(cartCount());
}

updateCartBadge();
