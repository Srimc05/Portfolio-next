import sidefolioAceternity from "public/images/sidefolio-aceternity.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn-2.png";

export const products = [
  {
    href: "https://nilachorucatering.com/",
    title: "NilaChoru Catering Website",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: sidefolioAceternity,
    images: [],
    stack: ["Vite + react", "Tailwindcss"],
    slug: "Nilachoru",
    content: (
      <div>
  <p><strong>Description:</strong></p>
  <p>
    Designed and developed a fully responsive catering website for a local business — 
    <strong> NilaChoru Catering</strong>. The platform highlights the brand’s culinary 
    services, ensuring a user-friendly interface with quick loading times and mobile optimization.
  </p>

  <p><strong>Key Highlights:</strong></p>
  <ul className="list-disc pl-5">
    <li>Built with Vite for lightning-fast development and production build.</li>
    <li>Styled using Tailwind CSS to achieve a clean, modern UI.</li>
    <li>Optimized for SEO, performance, and accessibility.</li>
    <li>Included a custom contact form and menu layout for ease of customer interaction.</li>
  </ul>

  <p><strong>Experience Gained:</strong></p>
  <p>
    This project strengthened my front-end skills, taught me how to deliver pixel-perfect 
    design under real-world constraints, and helped me understand client requirements, 
    content structuring, and deploying production-ready sites.
  </p>
</div>

    ),
  },
  {
    href: "https://github.com/Srimc05/LiveInLAB-HEaltheasY",
    title: "HealthEasy",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: sidefolioAceternity2,
    images: [],
    stack: ["Vite+react", "Express"],
    slug: "Healtheasy",
    content: (
     <div>
  <p><strong>Description:</strong></p>
  <p>
    Developed <strong>HealthEasy</strong>, an AI-powered online Hospital Management System designed to streamline the operations of clinics and hospitals. The system handles appointment scheduling, patient records, staff coordination, and intelligent insights to enhance overall efficiency and patient experience.
  </p>

  <p><strong>Key Highlights:</strong></p>
  <ul className="list-disc pl-5">
    <li>Designed with a clean and intuitive UI to ensure usability for both admin and staff.</li>
    <li>Integrated <strong>AI features</strong> such as appointment suggestions based on doctor availability, patient history analysis, and automated alerts for follow-ups.</li>
    <li>Implemented <strong>role-based access</strong> for doctors, receptionists, and admin staff to maintain security and streamline workflows.</li>
    <li>Built using <strong>Flutter</strong> for a cross-platform interface and <strong>Firebase</strong> for real-time database operations and authentication.</li>
    <li>Included modules for managing inventory, billing, prescriptions, and digital medical records.</li>
  </ul>

  <p><strong>Experience Gained:</strong></p>
  <p>
    This project deepened my understanding of building scalable, real-world SaaS applications in the healthcare domain. I learned to integrate AI with usability-first design, securely manage multi-role data, and ensure smooth cross-device performance.
  </p>
</div>


    ),
  },
  {
    href: "https://github.com/Srimc05/Infosys-INTERACTIVE-AI-STORYTELLER",
    title: "Interactive AI storyteller",
    description:
      "Bored of telling story to Kids, Let AI handle it, You focus on things that matter ",
    thumbnail: sidefolioAlgochurn2,
    images: [],
    stack: ["Streamlit", "Python"],
    slug: "Storyteller",
    content: (
    <div>
  <p><strong>Description:</strong></p>
  <p>
    Built an <strong>Interactive AI Storyteller</strong> web application that allows users to generate and explore personalized stories in real-time. The application uses AI to craft narratives based on characters, themes, and prompts provided by the user.
  </p>

  <p><strong>Key Highlights:</strong></p>
  <ul className="list-disc pl-5">
    <li>Developed using <strong>Python</strong> and <strong>Streamlit</strong> for rapid web-based prototyping and deployment.</li>
    <li>Integrated <strong>OpenAIs language model</strong> to dynamically generate creative and context-rich storylines.</li>
    <li>Implemented user input features for customizing characters, plot twists, and genre preferences.</li>
    <li>Added story continuation and reroll features for enhancing user engagement.</li>
    <li>Used <strong>Firebase</strong> for storing generated stories and enabling session history.</li>
  </ul>

  <p><strong>Experience Gained:</strong></p>
  <p>
    This project strengthened my skills in building AI-powered applications using Streamlit and OpenAI APIs. It also taught me how to manage user input flow, state handling in Streamlit, and deploy creative tools with a smooth user interface. The experience helped me understand how to build engaging, interactive AI apps with a focus on UX and performance.
  </p>
</div>

    ),
  },
  {
    href: "https://github.com/Srimc05/NOtesApp-via-Flutter",
    title: "Notely App",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioAlgochurn,
    images: [],
    stack: ["Flutter", "Firebase"],
    slug: "Notesapp",
    content: (
     <div>
  <p><strong>Description:</strong></p>
  <p>
    Developed a cross-platform <strong>Notes App</strong> using Flutter and Firebase, allowing users to create, update, and delete notes in real-time. The app offers a clean and intuitive user interface with cloud-based storage for seamless data synchronization.
  </p>

  <p><strong>Key Highlights:</strong></p>
  <ul className="list-disc pl-5">
    <li>Built with <strong>Flutter</strong> to ensure native performance on both Android and iOS.</li>
    <li>Integrated with <strong>Firebase Firestore</strong> for real-time cloud database functionality.</li>
    <li>Implemented <strong>Firebase Authentication</strong> for secure user login and session management.</li>
    <li>Designed UI using Flutter widgets with support for dark/light themes.</li>
    <li>Offline support added with local caching and sync when online.</li>
  </ul>

  <p><strong>Experience Gained:</strong></p>
  <p>
    This project enhanced my mobile app development skills and gave me real-world experience with cloud integration, state management, authentication flows, and responsive UI design. It also improved my understanding of real-time databases and cross-platform app deployment.
  </p>
</div>

    ),
  },
];
