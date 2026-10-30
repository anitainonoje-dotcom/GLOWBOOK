# GlowBook 💅🏾 — Bonyta Beauty Palace

A mobile-first booking web app for **Bonyta Beauty Palace**, a hair & nails salon in
Ugbowo, Benin City, Edo State. Pure HTML/CSS/JavaScript — **no database, no build step,
no dependencies**. All bookings live in the browser's `localStorage`, ready to be swapped
for a real backend later.

## How to run

### Option 1 — just open it (simplest)
Double-click `index.html`. It opens in your browser and works fully
(home, stylists, booking, login, my bookings, dashboard).

### Option 2 — a proper local server (recommended)
Run one of these from this folder, then open the URL it prints:

- **Python** (if installed):
  ```
  py -m http.server 8000
  ```
  → visit http://localhost:8000

- **Node.js** (if installed):
  ```
  npx serve .
  ```
  → visit the URL it prints (usually http://localhost:3000)

- **VS Code**: install the *Live Server* extension → right-click `index.html` → *Open with Live Server*.

For the mobile experience, open DevTools (F12) → click the phone icon 📱 to view it
in a phone-sized frame, or browse from your phone on the same Wi-Fi using your
computer's IP (e.g. `http://192.168.x.x:8000`).

## Pages

| Page | File | Who it's for |
|---|---|---|
| Home — services & prices in naira | `index.html` | everyone |
| Stylist profiles + before/after galleries | `stylists.html` | everyone |
| Booking (3-step flow) | `booking.html` | customers |
| Login | `login.html` | everyone |
| My bookings (view/cancel) | `bookings.html` | customers & stylists |
| Owner dashboard (stats + confirm/cancel) | `dashboard.html` | owner |

## Services & prices

| Service | Price | Duration |
|---|---|---|
| Knotless Braids | ₦25,000 | 4 hrs |
| Box Braids | ₦18,000 | 3 hrs |
| Gel Nails | ₦8,000 | 1 hr 30 min |
| Pedicure | ₦6,000 | 1 hr |

## Demo accounts

App data is seeded automatically on first visit. Tap a demo tile on the login page,
or enter these manually:

| Who | Email | Password |
|---|---|---|
| Customer — Adaeze Okonkwo | `adaeze@example.com` | `adaeze123` |
| Customer — Funke Adeyemi | `funke@example.com` | `funke123` |
| Stylist — Osas (braiding) | `osas@bonyta.ng` | `osas123` |
| Stylist — Efe (nails) | `efe@bonyta.ng` | `efe123` |
| Stylist — Ivie (pedicure/nails) | `ivie@bonyta.ng` | `ivie123` |
| Owner — Mrs. Bonyta Obaseki | `owner@bonyta.ng` | `glow1234` |

## What each user can do

- **Customer** — browse services/stylists, book (service → stylist → date/time → details),
  view bookings, cancel pending/confirmed ones, mark favourites via notes.
- **Stylist** — sees every appointment booked with them, can mark work completed.
- **Owner** — dashboard with today's appointments, pending confirmations, earned vs
  expected revenue, per-stylist workload bars, and confirm/complete/cancel for any booking.

## Managing the data (no database yet)

Everything is stored per-browser under `localStorage` keys prefixed `glowbook.`:

- `glowbook.users`, `glowbook.bookings`, `glowbook.session`

To reset the demo data, open DevTools console and run:

```js
Object.keys(localStorage).filter(k => k.startsWith("glowbook.")).forEach(k => localStorage.removeItem(k));
// then refresh
```

 Stylist galleries currently use styled colour tiles with real client scenarios —
 swap in real salon photos in `stylists.html` (the `GALLERY` object) when ready.

## Brand

- Colours: blush `#FDF2F5` · rose `#E8A0B4` · gold `#C9A24B` · plum `#4A2C3A`
- Fonts: Playfair Display (headings) + Poppins (body), loaded from Google Fonts
  (falls back to Georgia/system fonts offline)

## Tech notes

- Files: `index.html`, `stylists.html`, `booking.html`, `login.html`, `bookings.html`,
  `dashboard.html`, `css/styles.css`, `js/data.js`
- `js/data.js` holds the service/stylist catalogue, storage helpers and seeding —
  replace it with a real API layer when the database arrives.
