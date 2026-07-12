import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import { FacebookIcon, InstagramIcon } from "./components/SocialIcons";
import { featuredDishes, menu } from "./data/menu";

const PHONE_DISPLAY = "(604) 299-3777";
const PHONE_TEL = "tel:6042993777";
const INSTAGRAM_URL = "https://instagram.com/socratesintheheights";
const FACEBOOK_URL = "https://www.facebook.com/socratesintheheights";

export default function Home() {
  return (
    <div id="top">
      <Navbar />

      {/* Delivery info banner */}
      <div className="bg-navy px-4 py-2 text-center sm:px-6">
        <p className="text-xs font-semibold tracking-wide text-gold/90 sm:text-sm">
          Delivery available within area &middot; $25 minimum order &middot;
          Delivery fee applies &middot; Pickup also available
        </p>
      </div>

      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,42,74,0.65), rgba(27,42,74,0.75)), url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80')",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 py-32 text-cream sm:px-6">
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Authentic Greek Food in Burnaby
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/90 sm:text-xl">
            Family-run takeout serving fresh souvlaki, roasted lamb, and
            traditional Greek dishes
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#menu"
              className="w-full rounded-full bg-gold px-8 py-3 text-base font-bold uppercase tracking-wide text-navy transition-colors hover:bg-gold/90 sm:w-auto"
            >
              View Our Menu
            </a>
            <a
              href={PHONE_TEL}
              className="w-full rounded-full border-2 border-cream px-8 py-3 text-base font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-navy sm:w-auto"
            >
              Call to Order {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-navy/10 bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 md:grid-cols-4">
          {[
            "Family-Run",
            "Fresh Ingredients Daily",
            "Takeout & Delivery",
            "Catering Available",
          ].map((badge) => (
            <div key={badge} className="flex flex-col items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <p className="font-display text-sm font-bold text-navy sm:text-base">
                {badge}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Fan Favourites
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
              Featured Dishes
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="rounded-lg border border-navy/10 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-navy">
                    {dish.name}
                  </h3>
                  <span className="whitespace-nowrap font-display text-xl font-bold text-gold">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full menu */}
      <section id="menu" className="bg-navy px-4 py-20 text-cream sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Our Menu
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Full Menu
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
            {menu.map((category) => (
              <div key={category.title}>
                <h3 className="border-b-2 border-gold pb-2 font-display text-2xl font-bold text-gold">
                  {category.title}
                </h3>
                {category.note && (
                  <p className="mt-2 text-xs italic text-cream/60">
                    {category.note}
                  </p>
                )}
                <ul className="mt-4 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline gap-2 text-cream/90"
                    >
                      <span className="text-sm sm:text-base">
                        {item.name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-cream/25" />
                      <span className="font-semibold text-gold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl rounded-lg border border-gold/30 bg-cream/5 px-6 py-5 text-center">
            <p className="text-sm text-cream/90 sm:text-base">
              🎁 Gift Certificates available in $25 increments — ask us in
              store or call{" "}
              <a href={PHONE_TEL} className="font-semibold text-gold hover:underline">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Our Story
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            About Socrates in the Heights
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-navy/80">
            Having worked alongside my father for the past 23 years, I am
            excited to carry on with our trusted recipes. I am proud to
            continue to have him beside me in this new venture.
          </p>

          <div className="mx-auto mt-14 max-w-xl rounded-lg border border-gold/30 bg-white/60 p-8">
            <h3 className="font-display text-xl font-bold text-navy">
              Catering
            </h3>
            <p className="mt-3 leading-relaxed text-navy/80">
              Available for weddings, business lunches, dinners, and private
              events. Contact us to discuss your next event.
            </p>
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="bg-navy px-4 py-20 text-cream sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Ready To Order
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Order &amp; Visit Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <a
                href={PHONE_TEL}
                className="font-display text-4xl font-bold text-gold transition-opacity hover:opacity-90 sm:text-5xl"
              >
                {PHONE_DISPLAY}
              </a>

              <div className="mt-8 space-y-4 text-cream/90">
                <div>
                  <p className="font-display font-bold text-gold">Hours</p>
                  <p>Mon–Fri: 11am – 9pm</p>
                  <p>Sat–Sun: 4pm – 9pm</p>
                </div>
                <div>
                  <p className="font-display font-bold text-gold">Address</p>
                  <p>4651 Hastings St</p>
                  <p>Burnaby, BC V5C 2K6</p>
                </div>
                <div>
                  <p className="font-display font-bold text-gold">Follow Us</p>
                  <div className="mt-1 flex items-center justify-center gap-4 md:justify-start">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Socrates in the Heights on Instagram"
                      className="text-cream/90 transition-colors hover:text-gold"
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Socrates in the Heights on Facebook"
                      className="text-cream/90 transition-colors hover:text-gold"
                    >
                      <FacebookIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={PHONE_TEL}
                className="mt-10 w-full rounded-full bg-gold px-8 py-4 text-center text-base font-bold uppercase tracking-wide text-navy transition-colors hover:bg-gold/90 sm:w-auto"
              >
                Call to Order
              </a>
            </div>

            <div className="h-72 w-full overflow-hidden rounded-lg border border-cream/20 md:h-full">
              <iframe
                title="Socrates in the Heights Location"
                src="https://www.google.com/maps?q=4651+Hastings+St,+Burnaby,+BC+V5C+2K6&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Catering form */}
      <section id="contact" className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Catering &amp; Private Events
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-navy/70">
              Planning a wedding, business lunch, or celebration? Send us the
              details and we&apos;ll get back to you.
            </p>
          </div>

          <div className="rounded-lg border border-navy/10 bg-navy px-6 py-8 text-cream sm:px-10 sm:py-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy px-4 py-10 text-cream/80 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <p className="font-display text-xl font-bold text-cream">
            Socrates in the Heights
          </p>
          <p>4651 Hastings St, Burnaby, BC V5C 2K6</p>
          <a href={PHONE_TEL} className="hover:text-gold">
            {PHONE_DISPLAY}
          </a>
          <p>Mon–Fri: 11am – 9pm &nbsp;·&nbsp; Sat–Sun: 4pm – 9pm</p>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Socrates in the Heights on Instagram"
              className="flex items-center gap-2 hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>@socratesintheheights</span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Socrates in the Heights on Facebook"
              className="hover:text-gold"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-cream/50">
            &copy; 2025 Socrates in the Heights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
