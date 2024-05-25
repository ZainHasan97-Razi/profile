// components/Projects.js

import React from "react";

const projects = [
  {
    title: "Rider management and Delivery system",
    description: "The scope of this system is to provide a complete journey for riders to deliver orders across the counties.",
    features: ["Rider shifts management", "Order assignment", "Order tracking", "Rider journey", "Route optimization", "Order stacking"],
    tech: "Node js, Express js, Redis, Socket io, Cron jobs, Mongodb, React js, AWS, Azure and Jenkins",
  },
  {
    title: "Voucher and Discount management system",
    description: "The scope of this system is to provide a variety of vouchers and discounts for users using customer segment tracking.",
    features: [
      "Customer tracking",
      "Campaign creations using rules on customer attributes",
      "Minimum/Maximum percentage and value discount",
      "Category discount",
      "Discount calculation",
      "Vouchers redemption",
    ],
    tech: "Nest.js, Express.js, Redis, Socket.io, MongoDB, React.js, AWS, Azure, Jenkins",
  },
  {
    title: "User tracking and engagement system",
    description: "The scope of this system is to gain customer tracking like their screen, location, order, cart, actions, and much more.",
    features: ["Customer tracking", "Event triggering", "Campaign creations using customer attributes", "In-app, push, email, and SMS notifications"],
    tech: "Nest.js, Express.js, Redis, Node.js worker threads, MongoDB, React.js, AWS, Azure, Jenkins",
  },
  {
    title: "Health and Fitness application",
    description:
      "The scope of this application is to guide and routine lifestyle of a person by guiding them a variety of meal routine, exercise/workouts and their daily/monthly progress.",
    features: [
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
    tech: "React Native, Redux, React Native animations, Graphs",
  },
  {
    title: "Ecommerce application",
    description:
      "The scope of these multiple applications that I have worked on is to provide categorized products to select items to its cart and place order to their address.",
    features: [
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
    tech: "React Native, Redux, React Native animations",
  },
  {
    title: "Web3 application",
    description:
      "The scope of these applications includes staking of tokens, usage of wallets such as Metamask and Coinbase etc for integration with web3 applications.",
    features: [
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
    tech: "React, Redux, Web3, Smart contract integration, ERC20, ERC21, Wallets, Ethereum, Polygon, PheonixDao",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <ul className="list-disc pl-5 mb-4">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p>
              <strong>Tech:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
