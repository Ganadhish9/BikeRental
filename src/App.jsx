import { useRef, useState } from 'react'
import './App.css'

import activa1 from './assets/solo bikes/activa1.jpeg'
import activa2 from './assets/solo bikes/activa2.jpeg'
import activa3 from './assets/solo bikes/activa3.jpeg'
import activa4 from './assets/solo bikes/activa4.jpeg'
import activa5 from './assets/solo bikes/activa5.jpeg'
import activa6 from './assets/solo bikes/activa6.jpeg'
import avenisSolo from './assets/solo bikes/avenis.jpeg'
import bulletSolo from './assets/solo bikes/bullet.jpeg'
import dio1 from './assets/solo bikes/dio.jpeg'
import dio2 from './assets/solo bikes/dio2.jpeg'
import hunterSolo from './assets/solo bikes/hunter.jpeg'
import hunterSolo3 from './assets/solo bikes/hunter3.jpeg'
import hunterSolo4 from './assets/solo bikes/hunter4.jpeg'
import hunterSolo5 from './assets/solo bikes/hunter5.jpeg'
import hunterSolo6 from './assets/solo bikes/hunter6.jpeg'
import hunterSolo7 from './assets/solo bikes/hunter7.jpeg'
import siteLogo from './assets/logo/logo.PNG'

import groupActiva1 from './assets/group/group-activa1.jpeg'
import groupActiva2 from './assets/group/group-activa2.jpeg'
import groupActiva3 from './assets/group/group -activa3.jpeg'

const scootyGroupPhotos = [
  { src: groupActiva1, label: 'Group photo' },
  { src: groupActiva2, label: 'Group photo' },
  { src: groupActiva3, label: 'Group photo' },
]

const groupPhotosWithoutHero = scootyGroupPhotos.filter((photo) => photo.src !== groupActiva3)

const modelCatalog = [
  {
    id: 'activa-6g',
    name: 'Activa 6G',
    category: 'Scooty',
    fuel: 'Petrol',
    count: 22,
    images: [
      { src: activa1, label: 'Single photo' },
      { src: activa2, label: 'Single photo' },
      { src: activa3, label: 'Single photo' },
      { src: activa4, label: 'Single photo' },
      { src: activa5, label: 'Single photo' },
      { src: activa6, label: 'Single photo' },
      ...groupPhotosWithoutHero,
    ],
  },
  {
    id: 'dio',
    name: 'Dio',
    category: 'Scooty',
    fuel: 'Petrol',
    count: 14,
    images: [
      { src: dio1, label: 'Single photo' },
      { src: dio2, label: 'Single photo' },
      ...groupPhotosWithoutHero,
    ],
  },
  {
    id: 'access',
    name: 'Access',
    category: 'Scooty',
    fuel: 'Petrol',
    count: 1,
    images: [],
  },
  {
    id: 'avenis',
    name: 'Avenis',
    category: 'Scooty',
    fuel: 'Petrol',
    count: 1,
    images: [
      { src: avenisSolo, label: 'Single photo' },
      ...groupPhotosWithoutHero,
    ],
  },
  {
    id: 'hunter',
    name: 'Hunter',
    category: 'Bike',
    fuel: 'Petrol',
    count: 2,
    images: [
      { src: hunterSolo, label: 'Single photo' },

      { src: hunterSolo3, label: 'Single photo' },
      { src: hunterSolo4, label: 'Single photo' },
      { src: hunterSolo5, label: 'Single photo' },
      { src: hunterSolo6, label: 'Single photo' },
      { src: hunterSolo7, label: 'Single photo' },
    ],
  },
  {
    id: 'bullet-scram',
    name: 'Bullet (Scram)',
    category: 'Bike',
    fuel: 'Petrol',
    count: 1,
    images: [
      { src: bulletSolo, label: 'Single photo' },
    ],
  },
]

const SHOP_PHONE_E164 = '+919845587311'
const SHOP_PHONE_DISPLAY = '098455 87311'
const SHOP_PHONE_LINK = `tel:${SHOP_PHONE_E164}`
const SHOP_MAPS_LINK = 'https://maps.app.goo.gl/9QN74XxALcW9W5nP7'
const SHOP_WHATSAPP_LINK = 'https://wa.me/919845587311'
const SHOP_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30894.762441880517!2d74.3035105347656!3d14.550837400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe833fdb23d097%3A0xdb11352479fb8c0e!2sRental%20Bikes%20Gokarna-%20Ibbani!5e0!3m2!1sen!2sin!4v1775985044865!5m2!1sen!2sin'

function FleetCard({ model, onBookClick }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(0)
  const totalImages = model.images.length
  const activeImage = model.images[activeIndex] ?? model.images[0]
  const hasGallery = totalImages > 1

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1,
    )
  }

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1,
    )
  }

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const onTouchEnd = (event) => {
    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current

    if (Math.abs(swipeDistance) < 45 || !hasGallery) {
      return
    }

    if (swipeDistance > 0) {
      goPrev()
      return
    }

    goNext()
  }

  return (
    <article className="vehicle-card">
      <div
        className="model-gallery"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img src={activeImage.src} alt={`${model.name} view ${activeIndex + 1}`} loading="lazy" />

        {activeImage.label === 'Group photo' && (
          <span className="image-flag">Representative photo</span>
        )}

        {hasGallery && (
          <>
            <button className="gallery-arrow gallery-arrow-left" type="button" onClick={goPrev}>
              {'<'}
            </button>
            <button className="gallery-arrow gallery-arrow-right" type="button" onClick={goNext}>
              {'>'}
            </button>
          </>
        )}

        {hasGallery && (
          <div className="thumb-row" aria-label={`${model.name} image selector`}>
            {model.images.map((image, index) => (
              <button
                type="button"
                className={`thumb-btn ${index === activeIndex ? 'is-active' : ''}`}
                aria-label={`Show image ${index + 1}`}
                key={`${model.id}-${image.src}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={image.src} alt={`${model.name} thumbnail ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="vehicle-content">
        <div className="card-top">
          <h3>{model.name}</h3>
          <span className="stock-pill">x{model.count} available</span>
        </div>
        <p className="vehicle-meta">
          {model.category} · {model.fuel}
        </p>
        <button className="btn btn-soft full" type="button" onClick={onBookClick}>
          Book {model.name}
        </button>
      </div>
    </article>
  )
}

function App() {
  const visibleModelCatalog = modelCatalog.filter((model) => model.images.length > 0)
  const fleetSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const isMobileDevice = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent,
    )

  const scrollToFleet = () => {
    fleetSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const scrollToContact = (event) => {
    event?.preventDefault?.()
    contactSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleContactOrBook = (event) => {
    event?.preventDefault?.()

    if (isMobileDevice()) {
      window.location.href = SHOP_PHONE_LINK
      return
    }

    scrollToContact()
  }

  return (
    <main className="dashboard">
      <header className="topbar">
        <p className="brand">
          <img className="brand-logo" src={siteLogo} alt="Rental Bikes Gokarna logo" />
          <span className="brand-text">Rental Bikes Gokarna- Ibbani</span>
        </p>
        <div className="topbar-actions">
          <a
            className="topbar-link"
            href={SHOP_PHONE_LINK}
            onClick={handleContactOrBook}
            aria-label="Contact Us"
            title="Contact Us"
          >
            <span className="contact-text">Contact Us</span>
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation" focusable="false">
                <path d="M7.43 2.5h3.34c.53 0 .97.39 1.04.91l.47 3.66c.06.45-.18.89-.59 1.07l-1.5.68a.8.8 0 0 0-.42.97c.75 2.21 2.49 3.95 4.7 4.7.35.12.73-.04.91-.37l.83-1.53c.22-.4.67-.62 1.12-.56l3.53.47c.52.07.91.51.91 1.04v3.34c0 .59-.47 1.06-1.06 1.08l-1.17.03A16.5 16.5 0 0 1 3 6.73l.03-1.17c.02-.59.49-1.06 1.08-1.06Z" />
              </svg>
            </span>
          </a>
        </div>
      </header>

      <div className="section-strip footer-strip" aria-hidden="true"></div>

      <section
        className="hero"
        style={{ '--hero-bg-image': `url(${groupActiva3})` }}
      >
        <div className="hero-copy">
          <p className="eyebrow">Drive your next story</p>
          <h1>Rent Scooty and Bikes in Minutes</h1>
          <p>
            Explore model-based rentals with zero paperwork delays, instant
            confirmation, and local support for your whole trip.
          </p>
          <div className="hero-actions">
            <button className="btn btn-solid" type="button" onClick={handleContactOrBook}>
              Book a Vehicle
            </button>
            <button className="btn btn-fleet" type="button" onClick={scrollToFleet}>
              View Fleet
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <article>
            <p className="stat-number">55</p>
            <p>Total vehicles in fleet</p>
          </article>
          <article>
            <p className="stat-number">{visibleModelCatalog.length}</p>
            <p>Model options available</p>
          </article>
          <article>
            <p className="stat-number">24/7</p>
            <p>Roadside assistance support</p>
          </article>
        </div>
      </section>

      <section className="fleet" ref={fleetSectionRef}>
        <div className="section-head">
          <h2>Fleet By Model</h2>
        </div>

        <div className="fleet-grid">
          {visibleModelCatalog.map((model) => (
            <FleetCard model={model} onBookClick={handleContactOrBook} key={model.id} />
          ))}
        </div>
      </section>

      <div className="section-strip footer-divider" aria-hidden="true"></div>

      <footer className="site-footer" id="contact-footer" ref={contactSectionRef}>
        <div className="footer-contact">
          <p className="footer-title">Rental Bikes Gokarna- Ibbani</p>
          <p className="footer-address">Near Maruti katte, Melinkeri, Gokarna, Karnataka 581326</p>
          <a className="footer-phone" href={SHOP_PHONE_LINK}>{SHOP_PHONE_DISPLAY}</a>
        </div>

        <div className="footer-map-card">
          <div className="map-embed-wrap">
            <iframe
              src={SHOP_MAP_EMBED}
              title="Rental Bikes Gokarna location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="map-contact-grid">
            <article>
              <p className="map-contact-label">Office</p>
              <a
                className="map-contact-value"
                href={SHOP_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gokarna, Karnataka
              </a>
            </article>
            <article>
              <p className="map-contact-label">Phone</p>
              <a className="map-contact-value" href={SHOP_PHONE_LINK}>
                {SHOP_PHONE_DISPLAY}
              </a>
            </article>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={SHOP_WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.7 14.94L2 22l5.23-1.28A10 10 0 1 0 12 2Zm0 18.17a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.1.75.82-3.03-.2-.31a8.17 8.17 0 1 1 6.93 3.9Zm4.47-5.97c-.24-.12-1.4-.69-1.62-.77-.21-.08-.36-.12-.52.12-.15.23-.58.77-.71.92-.13.15-.27.17-.5.06-.24-.12-.99-.36-1.88-1.14-.7-.62-1.17-1.38-1.3-1.61-.13-.23-.01-.36.1-.48.1-.1.24-.27.36-.4.12-.14.16-.23.24-.38.08-.15.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.72-.19-.45-.39-.39-.52-.39h-.45c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.9s.82 2.2.93 2.35c.12.15 1.62 2.48 3.93 3.47 2.32 1 2.32.66 2.74.62.42-.04 1.4-.57 1.6-1.12.2-.56.2-1.04.14-1.13-.05-.1-.2-.16-.44-.28Z" />
        </svg>
      </a>
    </main>
  )
}

export default App
