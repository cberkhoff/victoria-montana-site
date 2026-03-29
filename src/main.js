import './styles.scss'

// ── Burger menu toggle ────────────────────────────────────────
const burger = document.querySelector('.vm-nav__burger')
const menu   = document.querySelector('.vm-nav__menu')

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open')
    burger.setAttribute('aria-expanded', String(open))
  })

  // Close menu when a nav link is clicked (mobile)
  menu.querySelectorAll('.vm-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open')
      burger.setAttribute('aria-expanded', 'false')
    })
  })
}

// ── Navbar scroll shadow ──────────────────────────────────────
const nav = document.querySelector('.vm-nav')
if (nav) {
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10)
  window.addEventListener('scroll', onScroll, { passive: true })
}

// ── Cal.com popup embed ───────────────────────────────────────
// Popup is triggered by any element with data-cal-link="vmontana"
;(function (C, A, L) {
  const p = (a, ar) => a.q.push(ar)
  const d = C.document
  C.Cal = C.Cal || function () {
    const cal = C.Cal
    const ar = arguments
    if (!cal.loaded) {
      cal.ns = {}
      cal.q = cal.q || []
      d.head.appendChild(d.createElement('script')).src = A
      cal.loaded = true
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments) }
      const namespace = ar[1]
      api.q = api.q || []
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] || api
        p(cal.ns[namespace], ar)
        p(cal, ['initNamespace', namespace])
      } else p(cal, ar)
      return
    }
    p(cal, ar)
  }
})(window, 'https://app.cal.com/embed/embed.js', 'init')

Cal('init', 'vmontana', { origin: 'https://app.cal.com' })

// ── GA4: track Cal.com booking button clicks ──────────────────
document.querySelectorAll('[data-cal-link]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'cal_booking_click', {
        button_text: btn.textContent.trim(),
      })
    }
  })
})

// Theme: match Victoria Montaña brand palette
Cal.ns.vmontana('ui', {
  theme: 'light',
  styles: {
    branding: { brandColor: '#B5918B' },
  },
  hideEventTypeDetails: false,
  layout: 'month_view',
})
