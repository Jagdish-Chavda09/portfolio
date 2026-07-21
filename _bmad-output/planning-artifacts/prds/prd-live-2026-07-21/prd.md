---
title: Personal Portfolio Website - Jagdish B Chavda
created: 2026-07-21
updated: 2026-07-21
status: final
---

# PRD: Personal Portfolio Website - Jagdish B Chavda

## 0. Document Purpose
This Product Requirement Document (PRD) outlines the requirements, specifications, and scope for building a premium, modern, animated personal portfolio website for Jagdish B Chavda, a Java / Spring Boot Fresher developer. This document is written for design alignment, architecture layout, development, and QA testing. It describes the features, user journeys, performance metrics, and technological constraints for the web application.

## 1. Vision
To establish a high-impact, recruiter-friendly online presence for Jagdish B Chavda. The portfolio will highlight his technical competencies in Core Java, Spring Boot, and databases alongside his academic background (MCA, BCA). By incorporating sleek dark mode design, rich interactive animations (Framer Motion), and responsive layout, the website will stand out to hiring managers and demonstrate professional software engineering standards.

## 2. Target User

### 2.1 Jobs To Be Done
- **Recruiters & Hiring Managers**: Quickly evaluate Jagdish's profile, download his resume, inspect his project portfolio, view source code on GitHub, and easily initiate contact.
- **Academic & Tech Reviewers**: Review his educational timeline, academic scorecards, and conceptual understanding (OOP, Collections, Multithreading).

### 2.2 Key User Journeys

- **UJ-1: Recruiter reviews project details and downloads resume.**
  - **Persona + context:** Recruiter seeking a Java/Spring Boot fresher with strong foundational skills.
  - **Entry state:** Lands on the Hero section from a LinkedIn link.
  - **Path:** Sees typewriter effect cycling through roles. Navigates to "About Me" and "Skills" via sticky navbar. Observes interactive skill cards with animated skill bars filling up. Scrolls to "Projects" section and hovers over "Travel Agency System". Clicks "Download Resume".
  - **Climax:** Recruiter downloads the PDF resume and clicks "View Code" to open the GitHub repository, verifying codebase organization.
  - **Resolution:** Recruiter is convinced of developer competency and proceeds to the contact section.

- **UJ-2: Hiring manager sends a direct inquiry through the Contact Form.**
  - **Persona + context:** Technical manager wanting to schedule an interview.
  - **Entry state:** Authenticated on their own browser, viewing Jagdish's portfolio page.
  - **Path:** Navigates directly to the "Contact" section via the navbar CTA. Fills out Name, Email, and Message.
  - **Climax:** Submits form. Form is validated on the client side (Zod + React Hook Form). API route (`/api/contact`) processes the submission and sends an email. A beautiful success toast appears notifying the sender of success.
  - **Resolution:** Hiring manager closes the tab, knowing their message has been sent successfully.

## 3. Glossary
- **Portfolio Website** — The single-page Next.js web application showcasing Jagdish's professional profile.
- **Skill Bar** — An interactive UI bar that animates from 0% to the designated proficiency percentage when scrolled into view.
- **Project Card** — A visual container showcasing project summary, technologies used, and links to source code and live demos.
- **Contact Form** — The interactive form component validated using Zod and React Hook Form.
- **Lightweight Particle Effect** — A canvas-based or CSS-only particle background in the Hero section that does not degrade browser performance.

## 4. Features

### 4.1 Navigation & Layout (Global)
**Description:** Sticky responsive header, smooth scroll to sections, scroll progress bar, and Back-to-Top CTA button.

**Functional Requirements:**
#### FR-1: Sticky Animated Navbar
The system must render a navigation bar that floats at the top of the viewport.
- **Consequences**: Shrinks and shifts background opacity when window scrolls past 50px. Contains desktop links and a mobile hamburger menu. Smooth scrolls to #hero, #about, #skills, #projects, #education, #contact.

#### FR-2: Scroll Progress Indicator
The system must display a progress bar at the top of the viewport representing current scroll percentage.
- **Consequences**: Animate width dynamically as the user scrolls.

#### FR-3: Back-to-Top Button
The system must display a button in the bottom-right corner when scrolled past 300px.
- **Consequences**: Clicking it scrolls the window smoothly to the top.

---

### 4.2 Hero Section
**Description:** Dynamic welcoming area with a typewriter typing animation, taglines, resume download, and lightweight particle background.

**Functional Requirements:**
#### FR-4: Typewriter Animation
The system must cycle through the titles: "Java Developer", "Spring Boot Developer", and "Backend Developer" with standard typing, pausing, and deleting animations.
- **Consequences**: Use Framer Motion or small inline Javascript utility.

#### FR-5: CTA Actions
The system must offer two CTA buttons: "Download Resume" (pointing to a PDF) and "Contact Me" (smooth scroll to contact form).
- **Consequences**: Downloads `resume.pdf` when the download CTA is clicked.

#### FR-6: Particle Background
The system must render a lightweight, interactive particle canvas background.
- **Consequences**: Renders floating dots with mouse-interactive hover vectors without causing frames-per-second drops below 60fps.

---

### 4.3 About Me
**Description:** Fade-in text summary of Jagdish's status as a 3rd-semester MCA student at Kadi Sarva Vishwavidyalaya (KSV), his grades, and backend capabilities.

**Functional Requirements:**
#### FR-7: Scroll-Triggered Fade-In
The system must animate the entry of the About Me text when the section enters the viewport.
- **Consequences**: Slide upward slightly and fade to full opacity on view.

---

### 4.4 Technical Skills
**Description:** Visual grid of technical competencies grouped by category, with skill bars that animate their fill width upon scrolling into view.

**Functional Requirements:**
#### FR-8: Skill Categories Grid
The system must group skills into cards: Languages, Frameworks, Databases, Concepts, and Tools.
- **Consequences**: Hovering cards displays a glowing background glow effect matching the accent color.

#### FR-9: Scroll-Triggered Skill Bars
The system must trigger the fill animation of the skill bars once they cross into the viewport.
- **Consequences**: Uses `react-intersection-observer` or Framer Motion `whileInView` to animate width from 0% to the specific database/code value.

---

### 4.5 Projects
**Description:** Visual portfolio of projects with zoom and hover-state triggers, providing links to repository code and live demos.

**Functional Requirements:**
#### FR-10: Project Cards
The system must render project cards for:
1. Travel Agency System (PHP, MySQL, Layered Architecture)
2. Flight Ticket App (Android, Kotlin)
3. Next.js Developer Portfolio (Next.js, Tailwind, Framer Motion)
- **Consequences**: Render cards containing project titles, description snippets, technology badges, a GitHub code link, and a Live Demo link (placeholder).

---

### 4.6 Education (Vertical Timeline)
**Description:** Vertical timeline tracing MCA and BCA degrees with grades.

**Functional Requirements:**
#### FR-11: Vertical Timeline Animation
The system must render a timeline track with nodes that scale and fade-in sequentially on scroll.
- **Consequences**: Highlighting grades: MCA (KSV, sem 2: 87%, ongoing) and BCA (2025, 83.9%).

---

### 4.7 What I'm Learning (Exploration Highlight)
**Description:** Sleek slider or grid of items highlighting current explorations (Spring Boot REST APIs, Spring AI, Linux, VMware).

**Functional Requirements:**
#### FR-12: Learning Grid
The system must display cards showing topics currently being studied, featuring animated pulse icons indicating "active study" status.

---

### 4.8 Contact Section & Next.js API
**Description:** Interactive contact form (Name, Email, Message) with validation on the client side, sending message details to `/api/contact` which triggers email transmission.

**Functional Requirements:**
#### FR-13: Contact Form Validation
The system must validate fields using Zod schemas on client input.
- **Consequences**: Red border and descriptive error text if Email is invalid or Name/Message is blank.

#### FR-14: API Email Transmission
The contact API route (`/api/contact`) must process form POST requests and trigger email delivery to `ahirj864@gmail.com` using Nodemailer or Resend.
- **Consequences**: Returns HTTP 200 on success, HTTP 400 on validation failure, HTTP 500 on mail transport error.

#### FR-15: Toast Feedback
The system must display custom animated toast alerts indicating submission status.
- **Consequences**: Display success toast on HTTP 200, error toast on failures.

---

## 5. Non-Goals
- No backend administrative panel or dashboard for updating database entries. Project, education, and skill values are loaded statically from the `data/` directory.
- No database storage of messages submitted through the contact form (direct email routing only).
- No complex multi-user registration or authentication workflows.

## 6. MVP Scope

### 6.1 In Scope
- Single-page application built on Next.js 14+ (App Router).
- Fully interactive styling using Tailwind CSS dark theme (Charcoal/Deep Navy background, Teal accent `#0D9488`).
- Framer Motion on-scroll and entry transitions.
- Client-side validation, contact API route using Nodemailer or Resend.
- Mobile and desktop responsive layouts.
- Statically loaded data files for projects, skills, education.

### 6.2 Out of Scope for MVP
- Dynamic blog module (deferred).
- Multi-language localization (deferred).

## 7. Success Metrics
- **Performance**: Lighthouse performance score >= 90.
- **Accessibility**: Lighthouse accessibility score >= 90.
- **SEO**: Lighthouse SEO score >= 90.
- **Functional**: Contact form correctly forwards messages to the destination email box.

## 8. Open Questions
- **Q-1**: Should we use Nodemailer or Resend? *Assumption: Resend is preferred for easy Vercel deployment, but Nodemailer is a robust alternative. We will write a helper that defaults to a SMTP transporter with fallbacks.*
- **Q-2**: Is there a specific resume file? *Assumption: We will create a dummy `resume.pdf` in the `public/` directory so that download logic works.*

## 9. Assumptions Index
- **[ASSUMPTION-1]**: Gandhinagar, Gujarat location is standard for mapping display.
- **[ASSUMPTION-2]**: SMTP settings (host, port, user, pass) or Resend API key will be configured via standard environment variables (`.env.local`).
