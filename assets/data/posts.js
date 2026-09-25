// ============================================================
// BLOG POSTS: newest first.
//
// To ADD a post: copy a { ... } block to the TOP of the list, give it a
// new id, and write the body in `content` using normal HTML
// (<p>, <h2>, <ul><li>). Add images with ${pic("image-url", "caption")}.
// To hide an unfinished post, set draft: true. To remove one, delete its block.
// A post's shareable link is blogs.html#post-ID
// ============================================================

const POSTS = [
  {
    id: 1,
    title: 'EdgeAI-Enabled Smart Parking System for Efficient, Low-Cost Occupancy Detection',
    date: 'December 17, 2025',
    category: 'Embedded Systems · IoT',
    readTime: '4 min read',
    image: 'https://i.postimg.cc/3JKjKxTj/image.png',
    imageAlt: 'Architecture of the EdgeAI smart parking system',
    excerpt: 'Cluster-head ESP32 nodes run a lightweight ML model and transmit only meaningful occupancy changes, which cuts bandwidth, cost and power.',
    content: `
<p>Urban transportation systems are undergoing a profound transformation as cities grow denser and vehicle ownership continues to rise. One of the most persistent contributors to traffic congestion is the challenge of finding available parking spaces. Drivers often spend several minutes searching for parking, leading to wasted time, fuel consumption, and unnecessary emissions.</p>
${pic('https://i.postimg.cc/3JKjKxTj/image.png', 'Overview of the proposed EdgeAI-enabled Smart Parking System')}
<p>Smart parking systems have emerged as an important component of modern smart city infrastructure. Their objective is to provide real-time parking availability, reducing congestion and improving traffic flow. Conventional systems typically install an IoT node at every parking slot which continuously transmits occupancy information to a cloud server.</p>
<p>Although effective, this architecture introduces several limitations including excessive bandwidth usage, higher deployment costs, poor scalability, and increased power consumption.</p>
<h2>Challenges with Existing Systems</h2>
<p>One of the biggest issues is redundant communication. Parking slots often remain occupied or vacant for long periods, yet the sensors repeatedly transmit identical information. Across hundreds of parking spaces this creates a large amount of unnecessary network traffic.</p>
<p>Scalability is another major concern. Every parking slot requires a microcontroller with wireless communication capability. As the parking lot grows, installation and maintenance costs increase dramatically.</p>
<p>Battery-powered sensor nodes also suffer from reduced operating lifetime because of continuous wireless transmissions.</p>
<h2>Proposed EdgeAI Architecture</h2>
<p>To overcome these limitations, this project introduces an EdgeAI-enabled smart parking architecture based on cluster heads.</p>
<p>Instead of equipping every parking slot with an expensive communication-enabled controller, each slot contains only a low-cost sensor such as an ultrasonic, infrared, or magnetometer sensor. These sensors forward raw measurements to a nearby ESP32-based cluster head.</p>
<p>The cluster head performs feature extraction and executes a lightweight machine learning model locally. By predicting whether the parking slot is likely to change state, it determines whether transmitting data to the cloud is actually necessary.</p>
<p>Only meaningful occupancy changes are transmitted, significantly reducing network traffic while maintaining real-time accuracy.</p>
<h2>Benefits</h2>
<p>The proposed architecture offers several important advantages:</p>
<ul>
<li>Reduced bandwidth consumption</li>
<li>Lower cloud communication costs</li>
<li>Improved battery lifetime</li>
<li>Better scalability for large parking facilities</li>
<li>Lower installation cost</li>
</ul>
<h2>Applications</h2>
<p>This system can be deployed in shopping malls, universities, airports, office campuses, smart cities, and residential communities. The reduced infrastructure requirements make it economically feasible for large-scale deployments.</p>
<h2>Conclusion</h2>
<p>The proposed EdgeAI-enabled Smart Parking System addresses the major shortcomings of conventional IoT parking infrastructures through local intelligence and predictive communication. By combining inexpensive sensors with lightweight machine learning at the edge, the system improves energy efficiency, reduces operational costs, and enables highly scalable deployments suitable for future smart city environments.</p>
`
  },
  {
    id: 2,
    draft: true, // unfinished: complete it, then delete this line to publish
    title: 'Getting Started with Raspberry Pi Pico',
    date: 'July 30, 2025',
    category: 'Hardware',
    readTime: '3 min read',
    image: 'https://placehold.co/800x400/0F1714/E3A062?text=Raspberry+Pi+Pico',
    imageAlt: 'Raspberry Pi Pico',
    excerpt: 'The Raspberry Pi Pico is a low-cost, high-performance microcontroller board with flexible digital interfaces.',
    content: `<p>The Raspberry Pi Pico is a low-cost, high-performance microcontroller board with flexible digital interfaces. Unlike its bigger siblings, it's not a computer, but a microcontroller. This makes it perfect for embedded projects where you need real-time control.</p>`
  }
];
