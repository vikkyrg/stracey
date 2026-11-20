# Stracey Memorial Education Society — Official Website Frontend

A modern, responsive educational institution web platform for **Stracey Memorial Education Society, Bengaluru** (Established 1964).

Built with **React + Vite + JavaScript (JSX) + Tailwind CSS v4**.

---

## 🏛️ Project Information Architecture

### Public Website Pages
- **Home (`/`)**: Hero storytelling, dynamic announcement bar, 6-decade heritage overview, 4-tier educational journey, institutional values, infrastructure showcase, campus life, gallery preview, news & events, admissions CTA.
- **About Section**:
  - **About Us (`/about`)**: Filial tribute history, heritage statistics, institutional highlights.
  - **History (`/history`)**: Chronological milestone timeline from July 1964 to the Diamond Jubilee era.
  - **Vision & Mission (`/vision-mission`)**: Ethical pillars, guiding principles, and educational philosophy.
  - **Governing Management (`/management`)**: Governing council members and administrative office bearers.
  - **Principal's Welcome (`/principal`)**: Full welcome message and administrative vision from Principal Prof. Ravindra Kumar V.R.
- **Academics Section**:
  - **Academic Overview (`/academics`)**: Curriculum continuum and PUC subject combination matrix.
  - **Nursery School (`/nursery`)**: Play-centric early learning for ages 3–5.
  - **Primary School (`/primary`)**: Classes 1–7 foundational literacy, math, and sciences.
  - **High School (`/high-school`)**: Classes 8–10 Karnataka SSLC state board center.
  - **Pre-University College (`/pre-university`)**: I & II PUC Science (PCMB, PCMC) and Commerce (CEBA, HEBA, SEBA).
- **Admissions Section**:
  - **Admission Overview (`/admissions`)**: Open admission ethos, steps, and enrollment details.
  - **Procedure & Eligibility (`/admission-procedure`)**: Board criteria, required document checklist, and 75% attendance rule.
  - **Fee Structure (`/fees-structure`)**: Moderate, accessible fees with installment options.
  - **Online Admission Enquiry (`/admission-enquiry`)**: Interactive validated enquiry form with mock API submission.
- **Campus Life & Facilities**:
  - **Activities & Co-Curriculars (`/activities`)**: Science Club, Scouts & Guides, athletics, cultural arts.
  - **Infrastructure (`/infrastructure`)**: Physics, Chemistry, Biology, and Computer labs, library, and sports courts.
  - **Photo Gallery (`/gallery`)**: Masonry grid with category filtering and interactive full-screen lightbox.
  - **Achievements (`/achievements`)**: 100% board pass rates, sports trophies, and science congress awards.
  - **Alumni Network (`/alumni`)**: Global network highlights and registration.
- **News, Events & Resources**:
  - **News & Announcements (`/news`)**: Searchable bulletins and board notifications.
  - **Events Calendar (`/events`)**: Scheduled symposia, exams, and competitions.
  - **Download Center (`/downloads`)**: Prospectus PDFs, application forms, syllabus matrices, and circulars.
  - **Staff Directory (`/staff`)**: Searchable faculty profiles with qualifications and experience.
  - **Careers (`/careers`)**: Open teaching vacancies and online job application form.
  - **FAQs (`/faqs`)**: Interactive accordion grouped by admissions, PU courses, fees, and campus facilities.
  - **Contact Us (`/contact`)**: St. Mark's Road office hours, phone, email, Google Maps embed, and contact form.
  - **Not Found (`*`)**: 404 page with return to home navigation.

---

## 🎨 Visual Design System

- **Primary Background**: `#FAFAF7` (Warm White)
- **Secondary Background**: `#F1F3F0` (Soft Tone)
- **Primary Blue**: `#234E78`
- **Deep Blue**: `#17344E`
- **Heritage Gold**: `#C9A66B`
- **Forest Green**: `#547D68`
- **Warm Orange**: `#E99B55`
- **Typography**: `DM Serif Display` (Editorial headings) + `Inter` (Body readability)

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```
Generates a minified production build in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🔌 Future Backend Integration

The frontend architecture includes a dedicated Axios service at `src/services/api.js`:
- Configured with `VITE_API_URL` environment variable.
- Request/response interceptors ready for JWT tokens and centralized error handling.
- Form components (`AdmissionEnquiryForm`, `ContactForm`, `CareerForm`) use `mockSubmit`, allowing seamless replacement with live Express/Node endpoints without modifying UI logic.
