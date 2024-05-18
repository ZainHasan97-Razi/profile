// components/Projects.js

import React from "react";

const projects = [
  {
    title: "Rider management and Delivery system",
    description: "The scope of this system is to provide a complete journey for riders to deliver orders across the counties.",
    keyFeatures: ["Rider shifts management", "Order assignment", "Order tracking", "Rider journey", "Route optimization", "Order stacking"],
    technologies: ["Node.js", "Express.js", "Redis", "Socket.io", "Cron jobs", "MongoDB", "React.js", "AWS", "Azure", "Jenkins"],
    frontend: false,
  },
  {
    title: "Voucher and Discount management system",
    description: "The scope of this system is to provide a variety of vouchers and discounts for users using customer segment tracking.",
    keyFeatures: [
      "Customer tracking",
      "Campaign creations using rules on customer attributes",
      "Minimum/Maximum percentage and value discount",
      "Category discount",
      "Discount calculation",
      "Vouchers redemption",
    ],
    technologies: ["Nest.js", "Express.js", "Redis", "Socket.io", "MongoDB", "React.js", "AWS", "Azure", "Jenkins"],
    frontend: true,
  },
  {
    title: "User tracking and engagement system",
    description: "The scope of this system is to gain customer tracking like their screen, location, order, cart, actions, and much more.",
    keyFeatures: ["Customer tracking", "Event triggering", "Campaign creations using customer attributes", "In-app, push, email, and SMS notifications"],
    technologies: ["Nest.js", "Express.js", "Redis", "Node.js worker threads", "MongoDB", "React.js", "AWS", "Azure", "Jenkins"],
    frontend: false,
  },
  {
    title: "Health and Fitness application",
    description:
      "The scope of this application is to guide and routine lifestyle of a person by guiding them a variety of meal routine, exercise/workouts and their daily/monthly progress.",
    keyFeatures: [
      "Daily routine guidance in terms of food and exercise",
      "Health target setting",
      "Routine tracking and goal achievements",
      "User health progress",
      "Food and exercise preference as per medical conditions",
      "Routine customization",
      "Health graphs",
      "User goal progress",
      "Apple login, Google login",
      "Authentication",
      "In-app purchase, Stripe integration",
      "Push notifications",
    ],
    technologies: ["React Native", "Redux", "React Native animations", "Graphs"],
    frontend: true,
  },
  {
    title: "Ecommerce application",
    description:
      "The scope of these multiple applications that I have worked on is to provide categorized products to select items to its cart and place order to their address.",
    keyFeatures: [
      "Checkout pay",
      "Stripe",
      "Authentication",
      "Products",
      "Categories",
      "Orders",
      "Order history",
      "Reordering",
      "Cart",
      "Suggestions",
      "Advertisement",
    ],
    technologies: ["React Native", "Redux"],
    frontend: true,
  },
  {
    title: "Web3 application",
    description:
      "The scope of these applications includes staking of tokens, usage of wallets such as Metamask and Coinbase etc for integration with web3 applications.",
    keyFeatures: [
      "Staking",
      "Exchange",
      "ERC20, ERC21 tokens",
      "NFTs",
      "Liquidity pools",
      "Metamask wallet integration",
      "Token minting",
      "Coinbase integration",
      "Project investments",
      "Project shareholders earning profits in form of tokens",
    ],
    technologies: ["React", "Redux", "Web3", "Smart contract integration", "ERC20", "ERC21", "Wallets", "Ethereum", "Polygon", "PheonixDao"],
    frontend: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <ul className="list-disc list-inside mb-4">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mb-2">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            {project.frontend && (
              <p className="text-gray-700 mb-2">
                <strong>Frontend:</strong> Yes
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
