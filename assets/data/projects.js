// ============================================================
// PROJECTS: used by the home page (featured) and the Projects page.
//
// To ADD a project: copy one { ... } block, paste it where you want it
// to appear, and change the text. To REMOVE one: delete its block.
//
// Fields
//   id          short unique name, no spaces (used in links: portfolio.html#id)
//   title, summary
//   categories  any of: "Robotics", "Embedded", "Electronics", "RF & SDR"
//   label       small tag shown on the card image
//   image       photo URL  (or leave out and use `placeholder` or `diagram`)
//   placeholder ["big text", "small text"] shown when there is no photo
//   diagram     an inline <svg> shown instead of a photo
//   video       YouTube *embed* URL (optional)
//   problem, role, result   the three lines shown in the details
//   tags        list of skills
//   featured    true  -> shown as a big case study on the home page
//   eyebrow     small heading above the title on the home page (featured only)
//   badge       label on the home-page image (featured only)
//   caseStudy   link to a full case-study page (optional)
//   link        { text: "...", href: "..." } extra button (optional)
// ============================================================

const PROJECTS = [
  {
    id: 'auv',
    title: 'Autonomous Underwater Vehicle',
    summary: 'The electrical system of a competition AUV that reached the SAUVC 2025 finals in Singapore.',
    categories: ['Robotics', 'Electronics'],
    label: 'Robotics',
    image: 'https://i.postimg.cc/Y2ZXZ8r4/auv-cover.jpg',
    video: 'https://www.youtube.com/embed/_i2n2dTLuUw',
    problem: 'Power a Jetson Xavier, sensors and thrusters safely inside a small sealed hull, for long missions.',
    role: 'Electrical head, leading 15 people. Built the power distribution with safety relays and a kill switch, a Pico shield, and sensor-to-Jetson PCBs.',
    result: 'Top 6 of 45+ international teams at SAUVC 2025, and a paper at RoboVis 2026.',
    tags: ['KiCad', 'Jetson Xavier', 'RP2040', 'Power distribution'],
    featured: true,
    eyebrow: 'Robotics · Power · PCB',
    badge: 'SAUVC 2025 finalist',
    caseStudy: 'auv.html'
  },
  {
    id: 'line',
    title: 'Robotized Production Line',
    summary: 'A hybrid assembly line at Centrale Lille in which PLCs coordinate ABB and KUKA industrial robots.',
    categories: ['Robotics'],
    label: 'Robotics',
    image: 'https://i.postimg.cc/SxP4qsCm/Whats-App-Image-2026-07-17-at-16-52-53.jpg',
    video: 'https://www.youtube.com/embed/kaGMUaQguao',
    problem: 'Assemble several components onto pallets efficiently, with robots and conveyors sharing the same workspace.',
    role: 'Developed the control program as Sequential Function Charts, with safety interlocks so machines never act in conflict.',
    result: 'A working assembly sequence on the line, shown in the video.',
    tags: ['PLC', 'SFC', 'ABB', 'KUKA'],
    featured: true,
    eyebrow: 'Robotics · Automation · PLC',
    badge: 'Centrale Lille'
  },
  {
    id: 'plc',
    title: 'ESP32-based PLC',
    summary: 'A low-cost controller that behaves like an industrial PLC, supervised by Dr. Bhargava Rajaram.',
    categories: ['Embedded', 'Electronics'],
    label: 'Embedded',
    image: 'https://i.postimg.cc/FRFPrDpN/plc.png',
    problem: 'Industrial PLCs are expensive and closed. Could a microcontroller match their I/O safety for a fraction of the cost?',
    role: 'Designed the architecture: optically isolated digital I/O, CAN communication, and Wi-Fi/BLE remote monitoring and configuration.',
    result: 'A validated prototype with reliable isolated I/O and CAN communication.',
    tags: ['ESP32', 'CAN', 'Optocouplers', 'Wi-Fi / BLE'],
    featured: true,
    eyebrow: 'Firmware · Isolation · CAN',
    badge: 'Industrial embedded'
  },
  {
    id: 'eis',
    title: 'Electrochemical Impedance Spectroscopy',
    summary: 'An analog impedance analyser built from discrete ICs, covering 10 Hz to 1 MHz.',
    categories: ['Electronics'],
    label: 'Electronics',
    diagram: `<svg viewBox="0 0 520 340" role="img" aria-label="Signal chain: signal source, device under test, INA128, AD633 multipliers, low-pass filters, Arduino">
      <defs><pattern id="eisgrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0v20" fill="none" stroke="#1F2D27"/></pattern>
      <marker id="eisarrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0l10 5-10 5z" fill="#C97B3D"/></marker></defs>
      <rect width="520" height="340" fill="#0F1714"/><rect width="520" height="340" fill="url(#eisgrid)"/>
      <g font-family="JetBrains Mono,monospace" font-size="13" text-anchor="middle">
        <g fill="#16211C" stroke="#C97B3D" stroke-width="1.5">
          <rect x="24" y="60" width="104" height="54" rx="8"/><rect x="164" y="60" width="104" height="54" rx="8"/><rect x="304" y="60" width="104" height="54" rx="8"/>
          <rect x="304" y="190" width="104" height="54" rx="8"/><rect x="164" y="190" width="104" height="54" rx="8"/><rect x="24" y="190" width="104" height="54" rx="8"/>
        </g>
        <g fill="#F4F1EA"><text x="76" y="84">Signal</text><text x="76" y="102">10Hz–1MHz</text><text x="216" y="84">DUT</text><text x="216" y="102">Z(ω)</text>
        <text x="356" y="84">INA128</text><text x="356" y="102">in-amp</text><text x="356" y="214">AD633 ×2</text><text x="356" y="232">I / Q mix</text>
        <text x="216" y="214">RC LPF</text><text x="216" y="232">DC out</text><text x="76" y="214">Arduino</text><text x="76" y="232">|Z|, ∠Z</text></g>
        <g stroke="#C97B3D" stroke-width="2" fill="none" marker-end="url(#eisarrow)"><path d="M128 87h32"/><path d="M268 87h32"/><path d="M356 114v72"/><path d="M304 217h-32"/><path d="M164 217h-32"/></g>
        <text x="260" y="300" fill="#A9B5AD" font-size="12">lock-in style impedance measurement · validated vs LTspice</text>
      </g></svg>`,
    problem: 'Measure impedance magnitude and phase from 10 Hz to 1 MHz without a commercial analyser.',
    role: 'Designed the full signal-conditioning chain (OP07, INA128, AD633 lock-in, RC filters, Arduino) and verified it in LTspice.',
    result: 'Magnitude and phase estimates matched theory and LTspice across the whole range.',
    tags: ['OP07', 'INA128', 'AD633', 'LTspice'],
    featured: true,
    eyebrow: 'Analog · Instrumentation',
    badge: 'Analog design'
  },
  {
    id: 'sdr',
    title: 'PlutoSDR FM Link for UAVs',
    summary: 'Software-defined radio work at DRDL (DRDO), Hyderabad.',
    categories: ['RF & SDR', 'Embedded'],
    label: 'RF & SDR',
    placeholder: ['FM ⇄', 'PlutoSDR · GNU Radio'],
    problem: 'Validate PlutoSDR hardware and build a short-range FM communication link between drones.',
    role: 'Built FM transmitter and receiver flowgraphs in GNU Radio, moved testing to PyADI-based Python workflows, and developed a custom PlutoSDR transceiver with an FM device-to-device protocol.',
    result: 'An experimentally validated transceiver, an automated test pipeline, and documentation handed over to the team.',
    tags: ['PlutoSDR', 'GNU Radio', 'PyADI', 'Python']
  },
  {
    id: 'estimation',
    title: 'Distributed State Estimation for Vehicle Fleets',
    summary: 'Distributed observers that estimate lateral vehicle dynamics across a fleet.',
    categories: ['Robotics'],
    label: 'Estimation',
    placeholder: ['x̂ = Ax̂ + L(y − Cx̂)', 'LMI · observers'],
    problem: 'Estimate vehicle slip angle and yaw rate reliably when vehicles share information over different communication topologies.',
    role: 'Synthesised distributed observers with LMIs and implemented Luenberger observers in MATLAB.',
    result: 'Robust state estimation, validated on experimental Renault Zoe datasets.',
    tags: ['MATLAB', 'LMI', 'Luenberger observers']
  },
  {
    id: 'parking',
    title: 'EdgeAI Smart Parking',
    summary: 'ESP32 cluster heads that run a small model and only report meaningful changes.',
    categories: ['Embedded'],
    label: 'Edge AI',
    image: 'https://i.postimg.cc/3JKjKxTj/image.png',
    problem: 'Per-slot IoT parking nodes waste bandwidth, battery and money by repeatedly sending unchanged data.',
    role: 'Designed an architecture in which cheap sensors feed ESP32 cluster heads that extract features and run a lightweight ML model to decide when to transmit.',
    result: 'A scalable, lower-cost design. The full write-up is on the blog.',
    tags: ['ESP32', 'TinyML', 'IoT'],
    link: { text: 'Read the blog post', href: 'blogs.html#post-1' }
  },
  {
    id: 'dispenser',
    title: 'Precision Dispensing System',
    summary: 'Dispensing micro-litres of fluid with a custom circuit and firmware.',
    categories: ['Embedded'],
    label: 'Mechatronics',
    image: 'https://i.postimg.cc/68FGPqGY/Dispenser-Detail.jpg',
    video: 'https://www.youtube.com/embed/lHVSn8xIPrY',
    problem: 'Dispense micro-litre volumes accurately (target ±1 µL) with a simple interface for calibration and operation.',
    role: 'Built the control circuit and MicroPython firmware on a Pico W, and calibrated the stepper drive for precise movement within the form factor.',
    result: 'A working prototype, shown in the video.',
    tags: ['Pico W', 'MicroPython', 'Stepper motors', 'EasyEDA']
  }
];

// Filter buttons on the Projects page, in this order.
const PROJECT_FILTERS = ['All', 'Robotics', 'Embedded', 'Electronics', 'RF & SDR'];

// Shared card image: photo, diagram or text placeholder.
function projectMedia(p) {
  if (p.image) return `<img src="${p.image}" alt="${esc(p.title)}" loading="lazy">`;
  if (p.diagram) return p.diagram;
  const [big, small] = p.placeholder || [p.label, ''];
  return `<div class="ph"><b class="${big.length > 10 ? 'long' : ''}">${esc(big)}</b><small>${esc(small)}</small></div>`;
}
