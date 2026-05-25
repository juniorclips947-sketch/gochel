export default function StreetwearStore() {
  const mobileFeatures = [
    "Fast mobile shopping experience",
    "Orange Money & MyZaka checkout",
    "Push notifications for new drops",
    "WhatsApp order support",
    "Real-time order tracking",
    "Customer profiles and saved addresses",
  ];

  const products = [
    {
      id: 1,
      name: "The Gochel Street Tee",
      price: "P180",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Urban Cat Hoodie",
      price: "P280",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Oversized Cargo Fit",
      price: "P210",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1600&auto=format&fit=crop"
          alt="Streetwear"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase">
            The Gochel
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Bold streetwear designed for modern culture.
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a
              href="#shop"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Shop Now
            </a>

            <a
              href="#checkout"
              className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
            >
              Order Here
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="shop" className="px-6 md:px-16 py-20">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-bold">Featured Products</h2>
            <p className="text-gray-400 mt-2">
              Your latest streetwear collection.
            </p>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
            New Drop
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-lg font-semibold text-gray-300">
                    {product.price}
                  </span>
                </div>

                <button className="w-full mt-6 bg-white text-black py-3 rounded-2xl font-bold hover:bg-gray-200 transition">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENT SECTION */}
      <section
        id="checkout"
        className="px-6 md:px-16 py-20 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Easy Ordering & Secure Payments
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Connect your store with Orange Money, MyZaka, or direct bank
              payments so customers can buy directly from your website.
            </p>

            <div className="mt-8 space-y-4">
              <div className="bg-zinc-900 p-5 rounded-2xl">
                ✔ Orange Money payments
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl">
                ✔ MyZaka mobile payments
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl">
                ✔ Bank transfer checkout
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl">
                ✔ WhatsApp order confirmation
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl">
                ✔ Mobile-friendly checkout
              </div>
            </div>

            <div className="mt-10 bg-black border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                Botswana Payment Methods
              </h3>

              <div className="space-y-4 text-gray-300">
                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <p className="font-semibold text-white">Orange Money</p>
                  <p className="text-sm mt-1">
                    Customers can directly send payment to your Orange Money number and upload proof of payment during checkout.
                  </p>
                </div>

                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <p className="font-semibold text-white">MyZaka</p>
                  <p className="text-sm mt-1">
                    Customers can pay by sending money directly to your MyZaka wallet number.
                  </p>
                </div>

                <div className="bg-zinc-900 p-4 rounded-2xl">
                  <p className="font-semibold text-white">Bank Transfer</p>
                  <p className="text-sm mt-1">
                    Add your FNB, Absa, Stanbic, or BancABC account details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Place Your Order</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Product Name"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              />

              <textarea
                placeholder="Delivery Address"
                rows={4}
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              ></textarea>

              <input
                type="text"
                placeholder="Postal Address"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Town / City"
                  className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Location / Area"
                  className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
                />
              </div>

              <div className="bg-black border border-zinc-700 rounded-2xl p-5">
                <h4 className="font-bold text-white mb-3">
                  Send Payment To
                </h4>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="bg-zinc-900 rounded-xl p-4">
                    <p className="font-semibold text-white">Orange Money</p>
                    <p>+267 75 766 762</p>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-4">
                    <p className="font-semibold text-white">MyZaka</p>
                    <p>+267 71 402 145</p>
                  </div>
                </div>
              </div>

              <select className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none">
                <option>Select Payment Method</option>
                <option>Orange Money</option>
                <option>MyZaka</option>
                <option>Bank Transfer</option>
              </select>

              <div className="bg-black border border-zinc-700 rounded-2xl p-4 flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 accent-white"
                />

                <div>
                  <p className="font-semibold text-white">
                    Age Verification
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    I confirm that I am 18 years old or above and agree to the store terms and conditions.
                  </p>
                </div>
              </div>

              <input
                type="tel"
                placeholder="Phone Number For SMS Receipt"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              />

              <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 h-5 w-5 accent-white"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      SMS Receipt Notifications
                    </p>

                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                      Customers automatically receive an SMS receipt and order confirmation after payment verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-zinc-700 rounded-2xl p-5 text-sm text-gray-300">
                <p className="font-semibold text-white mb-2">
                  Example SMS Receipt
                </p>

                <p>
                  THE GOCHEL: Payment received successfully. Your order has been confirmed and is being processed for delivery.
                </p>
              </div>

              <input
                type="text"
                placeholder="Transaction ID / Reference Number"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-4 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-2xl font-black text-lg hover:bg-gray-200 transition"
              >
                Proceed To Payment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MOBILE APP SECTION */}
      <section className="px-6 md:px-16 py-24 bg-black border-t border-zinc-800 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Mobile App
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
              Your Streetwear Store In A Mobile App
            </h2>

            <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-xl">
              Turn your clothing brand into a powerful mobile shopping app for Android and iPhone customers in Botswana.
            </p>

            <div className="mt-10 space-y-4">
              {mobileFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-gray-200"
                >
                  ✔ {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-black px-6 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
                Android App
              </button>

              <button className="border border-white px-6 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition">
                iPhone App
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-zinc-900 border-4 border-zinc-700 rounded-[3rem] p-4 w-[320px] shadow-2xl">
              <div className="bg-black rounded-[2.5rem] overflow-hidden border border-zinc-800">
                <div className="bg-zinc-950 px-5 py-4 flex items-center justify-between border-b border-zinc-800">
                  <h3 className="font-black text-lg">THE GOCHEL</h3>
                  <span className="text-xs text-gray-400">9:41</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop"
                  alt="Mobile App"
                  className="h-60 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-2xl font-black">New Drop Live</h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    Shop exclusive streetwear collections directly from your phone.
                  </p>

                  <button className="w-full mt-6 bg-white text-black py-4 rounded-2xl font-black hover:bg-gray-200 transition">
                    Shop Collection
                  </button>

                  <div className="grid grid-cols-3 gap-3 mt-6 text-center text-xs text-gray-400">
                    <div className="bg-zinc-900 p-3 rounded-xl">
                      Home
                    </div>

                    <div className="bg-zinc-900 p-3 rounded-xl">
                      Shop
                    </div>

                    <div className="bg-zinc-900 p-3 rounded-xl">
                      Profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black uppercase">The Gochel</h3>
          <div className="text-gray-500 mt-2 space-y-1">
            <p>Streetwear brand • Botswana • parallelbw.com</p>
            <p>Email: juniorclips947@gmail.com</p>
            <p>WhatsApp: +267 71 604 500</p>
          </div>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="https://wa.me/26771604500">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
