// ============================================================
// HOME PAGE CONTENT: headline stats, experience, education,
// skills, publications and awards.
// Add, remove or reorder items in any list below; the page updates automatically.
// Text in `big` fields may contain <em>…</em> to colour a number copper.
// ============================================================

const PROFILE = {
  // The four numbers under the hero
  proof: [
    { big: 'Top <em>6</em>/45+', small: 'SAUVC 2025 · Singapore AUV electrical lead' },
    { big: 'DRDO', small: 'Research intern · SDR links for UAVs' },
    { big: '<em>1</em> paper', small: 'RoboVis 2026 · AUV design & control' },
    { big: 'Top <em>25</em>/600+', small: 'Lam Research Challenge IISc Bengaluru' }
  ],

  // "Where I'm heading" panel
  interests: [
    { title: 'Embedded & computer systems', text: 'Firmware, real-time systems and hardware–software co-design on microcontrollers and FPGAs.' },
    { title: 'Robotics & autonomy', text: 'Sensing, state estimation and control that hold up on real robots, not only in simulation.' },
    { title: 'Electronics & integrated systems', text: 'Analog and mixed-signal design, PCBs, and how chips and sensors come together into a system.' },
    { title: 'Edge intelligence', text: 'Running machine learning on small devices, so machines can make good decisions locally.' }
  ],

  // Small fact boxes under the About text
  facts: [
    { label: 'Degree', value: "B.Tech ECE, Mahindra University '26" },
    { label: 'Exchange', value: 'Centrale Lille, France (S8)' },
    { label: 'English', value: 'IELTS 7.5 (C1)' },
    { label: 'Based in', value: 'Hyderabad, India' }
  ],

  // Newest first. Use `text` for one line or `points` for bullets. current: true fills the dot.
  experience: [
    { when: 'Aug 2026 – present', title: 'Embedded Intern · QED Blackbox Factories', text: 'Developing and working on embedded platforms.', current: true },
    { when: 'Jun – Aug 2025', title: 'Engineering Intern · QUBEATS', points: ['Set up a sensor testing lab from scratch', 'Designed and fabricated 2 custom PCB dev boards', 'Calibrated navigation sensors and applied Kalman filtering to cut noise'] },
    { when: 'Jul – Aug 2024', title: 'Research Intern · DRDL, DRDO', points: ['FM TX/RX on PlutoSDR with GNU Radio', 'Automated test pipelines with PyADI', 'FM device-to-device link for UAVs'] },
    { when: 'Apr 2024 – Apr 2025', title: 'Electrical Head · AUV Club', text: 'Led 15 juniors and ran workshops on circuits, PCBs and microcontrollers.' },
    { when: 'Mahindra University', title: 'Founder · Electronics Club', text: "Started the university's electronics club, a place for students to learn by building hardware." }
  ],

  education: [
    { when: 'Feb – Jun 2026', title: 'Ecole Centrale de Lille, France', text: 'Semester exchange: robotized production lines, electronics for biomedical engineering, rapid prototyping of sensors.' },
    { when: '2022 – 2026', title: 'Mahindra University, Hyderabad', text: 'B.Tech, Electronics and Computer Engineering. Merit scholarship (top 10%, 2022–23).' },
    { when: '2020 – 2022', title: 'FIITJEE Junior College, Hyderabad', text: 'Intermediate (Classes 11–12)' }
  ],

  skills: [
    { group: 'Embedded', items: ['ESP32', 'RP2040', 'Arduino', 'Raspberry Pi', 'Jetson Xavier', 'I2C', 'SPI', 'UART', 'CAN'] },
    { group: 'Electronics', items: ['Analog design', 'Digital design', 'PCB design', 'Sensor interfacing', 'Signal conditioning'] },
    { group: 'Programming', items: ['C', 'Python', 'MATLAB', 'Verilog', 'Bash', 'LaTeX'] },
    { group: 'Tools', items: ['KiCad', 'LTspice', 'Cadence Virtuoso', 'GNU Radio', 'Git', 'Linux'] },
    { group: 'Robotics & control', items: ['ABB', 'KUKA', 'PLC / SFC', 'Kalman filtering', 'State observers'] }
  ],

  publications: [
    {
      venue: 'Conference paper · RoboVis 2026 · March 2026',
      title: 'Comprehensive Design and High-Performance Control of an AUV',
      authors: 'S. S. D. Duduka, A. Saraf, <u>A. Vadlamani</u>, S. Kandikattu, G. R. Gopinath',
      note: 'Topics: autonomous systems, embedded control, sensor fusion, system validation.',
      link: '' // add a PDF or DOI link here when you have one
    }
  ],

  awards: [
    { big: 'Top 6', title: 'SAUVC 2025 Finalist', text: 'Out of 45+ international teams at Singapore Polytechnic. 1st among Indian teams in Round 1.' },
    { big: 'Top 25', title: 'Lam Research Challenge 2024', text: 'Out of 600+ teams nationwide, at IISc Bengaluru. Led systems integration and rapid prototyping.' },
    { big: 'Top 10%', title: 'Merit Scholarship', text: '₹1,00,000 academic scholarship from Mahindra University for 2023–24.' }
  ]
};
