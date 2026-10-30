/* ============================================================
   GlowBook — data + localStorage helpers (no backend yet)
   ============================================================ */

const GLOW = {
  SERVICES: [
    {
      id: "knotless",
      name: "Knotless Braids",
      price: 25000,
      duration: "4 hrs",
      desc: "Pain-free, lightweight knots with neat parts and tapered ends. Hair included on request.",
      art: "🧶",
    },
    {
      id: "boxbraids",
      name: "Box Braids",
      price: 18000,
      duration: "3 hrs",
      desc: "Classic medium box braids, done in clean, even sections with a shine spray finish.",
      art: "👱🏾‍♀️",
    },
    {
      id: "gel",
      name: "Gel Nails",
      price: 8000,
      duration: "1 hr 30 min",
      desc: "Long-lasting gel polish on natural nails — pick any colour from our polish wall.",
      art: "💅🏾",
    },
    {
      id: "pedicure",
      name: "Pedicure",
      price: 6000,
      duration: "1 hr",
      desc: "Deep soak, scrub and buff with a moisturising shea butter massage.",
      art: "🦶🏾",
    },
  ],

  STYLISTS: [
    {
      id: "osas",
      name: "Osas",
      full: "Osaretin Iyobosa",
      role: "Senior Braiding Stylist",
      rating: 4.9,
      reviews: 132,
      years: 9,
      bio: "Osas has been plaiting hair in Ugbowo since her secondary school days. She is known for sharp, painless partings and knotless installs that last a full 8 weeks.",
      specialties: ["Knotless Braids", "Box Braids", "Ghana Weaving"],
      colors: "osas",
    },
    {
      id: "efe",
      name: "Efe",
      full: "Efeoghene Oghenekaro",
      role: "Nail Technician",
      rating: 4.8,
      reviews: 99,
      years: 6,
      bio: "Efe turns a gel set into an accessory. From soft nudes for wedding weekends to bold Benin-royalty gold chrome, her sets stay chip-free for three weeks.",
      specialties: ["Gel Nails", "Acrylics", "Nail Art"],
      colors: "efe",
    },
    {
      id: "ivie",
      name: "Ivie",
      full: "Ivie Ehimwenma",
      role: "Beauty & Nail Stylist",
      rating: 4.9,
      reviews: 121,
      years: 7,
      bio: "Ivie handles the full glow-up: pedicures with hot-stone soak, gel toes, and gentle natural-nail care. Regulars say her chairs are the most relaxing spot in the salon.",
      specialties: ["Pedicure", "Gel Feet", "Spa Care"],
      colors: "ivie",
    },
  ],

  TIME_SLOTS: [
    { label: "9:00 AM", value: "09:00" },
    { label: "10:30 AM", value: "10:30" },
    { label: "12:00 PM", value: "12:00" },
    { label: "1:30 PM", value: "13:30" },
    { label: "3:00 PM", value: "15:00" },
    { label: "4:30 PM", value: "16:30" },
    { label: "6:00 PM", value: "18:00" },
  ],

  OWNER_EMAIL: "owner@bonyta.ng",
  OWNER_PASSWORD: "glow1234",
};

/* ---------- storage (localStorage; ready to swap for an API later) ---------- */
const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem("glowbook." + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem("glowbook." + key, JSON.stringify(value));
  },
};

/* ---------- demo accounts + seed bookings (first visit only) ---------- */
function seedDemoData() {
  if (Store.get("users", null) === null) {
    Store.set("users", [
      {
        id: "u-adaeze",
        name: "Adaeze Okonkwo",
        email: "adaeze@example.com",
        phone: "0803 111 2233",
        password: "adaeze123",
        role: "customer",
      },
      {
        id: "u-funke",
        name: "Funke Adeyemi",
        email: "funke@example.com",
        phone: "0812 445 7789",
        password: "funke123",
        role: "customer",
      },
      {
        id: "u-osas",
        name: "Osaretin Iyobosa (Osas)",
        email: "osas@bonyta.ng",
        password: "osas123",
        role: "stylist",
        stylistId: "osas",
      },
      {
        id: "u-efe",
        name: "Efeoghene Oghenekaro (Efe)",
        email: "efe@bonyta.ng",
        password: "efe123",
        role: "stylist",
        stylistId: "efe",
      },
      {
        id: "u-ivie",
        name: "Ivie Ehimwenma (Ivie)",
        email: "ivie@bonyta.ng",
        password: "ivie123",
        role: "stylist",
        stylistId: "ivie",
      },
      {
        id: "u-owner",
        name: "Mrs. Bonyta Obaseki",
        email: GLOW.OWNER_EMAIL,
        password: GLOW.OWNER_PASSWORD,
        role: "owner",
      },
    ]);
  }

  if (Store.get("bookings", null) === null) {
    Store.set("bookings", [
      {
        id: "bk-1001",
        userId: "u-adaeze",
        customer: "Adaeze Okonkwo",
        phone: "0803 111 2233",
        serviceId: "knotless",
        service: "Knotless Braids",
        price: 25000,
        stylistId: "osas",
        date: "2026-10-31",
        time: "10:30",
        status: "confirmed",
        note: "Waist length please, 4 packs of royal silk.",
        createdAt: "2026-10-28T09:12:00",
      },
      {
        id: "bk-1002",
        userId: "u-funke",
        customer: "Funke Adeyemi",
        phone: "0812 445 7789",
        serviceId: "gel",
        service: "Gel Nails",
        price: 8000,
        stylistId: "efe",
        date: "2026-10-31",
        time: "12:00",
        status: "pending",
        note: "Baby pink with tiny gold stones.",
        createdAt: "2026-10-29T14:40:00",
      },
      {
        id: "bk-1003",
        userId: "u-adaeze",
        customer: "Adaeze Okonkwo",
        phone: "0803 111 2233",
        serviceId: "pedicure",
        service: "Pedicure",
        price: 6000,
        stylistId: "ivie",
        date: "2026-10-27",
        time: "15:00",
        status: "completed",
        note: "",
        createdAt: "2026-10-24T11:05:00",
      },
      {
        id: "bk-1004",
        userId: "u-funke",
        customer: "Funke Adeyemi",
        phone: "0812 445 7789",
        serviceId: "boxbraids",
        service: "Box Braids",
        price: 18000,
        stylistId: "osas",
        date: "2026-11-02",
        time: "09:00",
        status: "pending",
        note: "Medium size, shoulder length.",
        createdAt: "2026-10-29T18:21:00",
      },
    ]);
  }
}

/* ---------- current session ---------- */
const Auth = {
  user() {
    return Store.get("session", null);
  },
  login(user) {
    const { password, ...safe } = user;
    Store.set("session", safe);
  },
  logout() {
    localStorage.removeItem("glowbook.session");
  },
  role() {
    const u = Auth.user();
    return u ? u.role : null;
  },
};

/* ---------- helpers ---------- */
function naira(n) {
  return "₦" + n.toLocaleString("en-NG");
}

function serviceById(id) {
  return GLOW.SERVICES.find((s) => s.id === id);
}

function stylistById(id) {
  return GLOW.STYLISTS.find((s) => s.id === id);
}

function timeLabel(value) {
  const t = GLOW.TIME_SLOTS.find((x) => x.value === value);
  return t ? t.label : value;
}

function dateLabel(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-NG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function bookings() {
  return Store.get("bookings", []);
}

function saveBookings(list) {
  Store.set("bookings", list);
}

function nextBookingId() {
  const list = bookings();
  let n = 1000 + list.length + 1;
  while (list.some((b) => b.id === "bk-" + n)) n++;
  return "bk-" + n;
}

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- shared page chrome ---------- */
seedDemoData();

function renderTopbar(activePage) {
  const user = Auth.user();
  const el = document.getElementById("topbar");
  el.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="index.html">
          <div class="brand-mark">G</div>
          <div>
            <div class="brand-name">GlowBook</div>
            <div class="brand-sub">Bonyta Beauty Palace</div>
          </div>
        </a>
        <div class="topbar-user">
          ${
            user
              ? `<span class="chip role-${user.role}">${user.role === "owner" ? "👑 Owner" : user.role === "stylist" ? "✂️ Stylist" : "Hi, " + user.name.split(" ")[0]}</span>`
              : `<a class="chip" href="login.html">Login →</a>`
          }
        </div>
      </div>
    </div>`;
  void activePage;
}

function renderBottomNav(activePage) {
  const user = Auth.user();
  const items = [
    { page: "home", href: "index.html", ico: "🏠", label: "Home" },
    { page: "stylists", href: "stylists.html", ico: "💁🏾‍♀️", label: "Stylists" },
    { page: "booking", href: "booking.html", ico: "📅", label: "Book" },
    { page: "bookings", href: "bookings.html", ico: "📋", label: user && user.role === "stylist" ? "My Clients" : "Bookings" },
    {
      page: user ? "account" : "login",
      href: user ? (user.role === "owner" ? "dashboard.html" : "bookings.html") : "login.html",
      ico: user ? "👤" : "🔑",
      label: user ? (user.role === "owner" ? "Dashboard" : "Account") : "Login",
    },
  ];
  document.getElementById("bottomnav").innerHTML = `
    <nav class="bottom-nav">
      ${items
        .map(
          (i) =>
            `<a href="${i.href}" class="${i.page === activePage ? "active" : ""}">
               <span class="ico">${i.ico}</span>${i.label}
             </a>`
        )
        .join("")}
    </nav>`;
}

function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <footer class="site-footer">
      <div class="fbrand">Bonyta Beauty Palace</div>
      <p>24 Ihama Road, off Adolo College, Ugbowo, Benin City, Edo State</p>
      <p class="gold">Open Mon–Sat · 8:30 AM – 7:00 PM · Call 0803 GLOW (4569)</p>
      <p style="margin-top:10px; opacity:.75">© 2026 Bonyta Beauty Palace · Powered by GlowBook</p>
    </footer>`;
}

function renderChrome(activePage) {
  renderTopbar(activePage);
  renderBottomNav(activePage);
  renderFooter();
}
