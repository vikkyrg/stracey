export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Academics",
    path: "/academics",
    dropdown: [
      { label: "Academic Overview", path: "/academics" },
      { label: "Nursery", path: "/nursery" },
      { label: "Primary School", path: "/primary" },
      { label: "High School", path: "/high-school" },
      { label: "Pre-University College", path: "/pre-university" }
    ]
  },
  {
    label: "Admissions",
    path: "/admissions",
    dropdown: [
      { label: "Admission Information", path: "/admissions" },
      { label: "Admission Procedure", path: "/admission-procedure" },
      { label: "Eligibility", path: "/admission-procedure" },
      { label: "Fees Structure", path: "/fees-structure" },
      { label: "Admission Enquiry", path: "/admission-enquiry" }
    ]
  },
  {
    label: "Campus Life",
    path: "/activities",
    dropdown: [
      { label: "Activities", path: "/activities" },
      { label: "Sports", path: "/activities" },
      { label: "Cultural Activities", path: "/activities" },
      { label: "Infrastructure", path: "/infrastructure" }
    ]
  },
  { label: "Gallery", path: "/gallery" },
  {
    label: "News & Events",
    path: "/news",
    dropdown: [
      { label: "News", path: "/news" },
      { label: "Events", path: "/events" },
      { label: "Announcements", path: "/news" },
      { label: "Calendar", path: "/events" }
    ]
  },
  { label: "Contact", path: "/contact" }
];
