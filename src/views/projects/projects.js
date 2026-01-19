import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//Css file
import "./project.css";

//Projects
import Shopnetic from "../../assets/img/projects/shopnetic.png"
import StockTradePro from "../../assets/img/projects/stocktradepro.png"
import LearnPro from "../../assets/img/projects/learnpro.png"
import AIOrchestratorImage from "../../assets/img/projects/ai-orchestrator.png"

//Skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_TAILWIND from "../../assets/img/skills/tailwindcss-icon.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_NODE from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_STRIPE from "../../assets/img/skills/stripe-logo.svg";
import L_SWAGGER from "../../assets/img/skills/swagger-logo.svg";
import L_RECHARTS from "../../assets/img/skills/recharts-logo.svg";
import L_JEST from "../../assets/img/skills/jest-vitest-logo.svg";
import L_GEMINI from "../../assets/img/skills/gemini-logo.svg";
import L_SENTRY from "../../assets/img/skills/sentry-logo.svg";
import L_ANALYTICS from "../../assets/img/skills/analytics-logo.svg";
import L_REACTVITE from "../../assets/img/skills/vite-react-logo.svg";
import L_N8N from "../../assets/img/skills/n8n-logo.svg";
import L_PDF from "../../assets/img/skills/pdf-logo.svg";
import L_MULTER from "../../assets/img/skills/multer-logo.svg";

// Custom timeline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef"
  },
  date: {
    backgroundColor: "#ec4b4f"
  },
  marker: {
    borderColor: "#070d59"
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f"
  }
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          
          {/* StockTradePro */}
          <ImageEvent
            date="19th Jan, 2026"
            className="text-center"
            text="StockTradePro - Fintech Trading Platform"
            src={StockTradePro}
            alt="StockTradePro Trading Platform"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
  as="button"
  eventKey="0"
  className="accordian-main"
>
  PROJECT DETAILS
</Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A modern, production-style full-stack stock trading platform inspired by Upstox. Users can securely register, explore stock market data, buy and sell stocks, manage portfolios and watchlists, and track complete transaction history with simulated live market prices.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Secure user registration with Email, Mobile, and PAN validation</li>
                          <li>JWT-based authentication with protected routes</li>
                          <li>Search stocks by name or symbol with sector filtering</li>
                          <li>Interactive price charts and company details</li>
                          <li>Buy/Sell stocks with balance and quantity validation</li>
                          <li>Portfolio management with profit/loss calculation</li>
                          <li>Complete transaction history with filters</li>
                          <li>Export transactions to PDF and CSV formats</li>
                          <li>Watchlist management (Add/Remove stocks)</li>
                          <li>Dashboard with market summary and holdings</li>
                          <li>Simulated live price metrics without paid APIs</li>
                          <li>Fully responsive mobile-first design</li>
                          <li>RESTful API with Swagger documentation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACTVITE}
                                alt="React + Vite"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React + Vite
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux Toolkit"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux Toolkit
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TAILWIND}
                                alt="Tailwind CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Tailwind CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RECHARTS}
                                alt="Recharts"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Recharts
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SWAGGER}
                                alt="Swagger"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Swagger
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JEST}
                                alt="Jest + Vitest"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Jest + Vitest
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://stocktradepro-frontend.vercel.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/stocktradepro-frontend"
                  target="_blank"
                >
                  FRONTEND CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/stocktradepro-backend"
                  target="_blank"
                >
                  BACKEND CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* AI Document Orchestrator */}
          <ImageEvent
            date="18th Jan, 2026"
            className="text-center"
            text="AI Document Orchestrator"
            src={AIOrchestratorImage}
            alt="AI Document Orchestrator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
  as="button"
  eventKey="0"
  className="accordian-main"
>
  PROJECT DETAILS
</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A full-stack AI automation system that transforms PDFs and text files into summaries, structured data, and professional emails using Gemini AI, Node.js, React, and n8n workflow automation. Designed for businesses to extract insights from documents and automatically draft emails.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Upload PDF or TXT files for AI processing</li>
                          <li>Gemini AI generates clean summaries and detailed answers</li>
                          <li>Automatic structured data extraction (Employee details, IDs, dates, etc.)</li>
                          <li>Smart email drafting with user-aware logic</li>
                          <li>Email delivery via SMTP with real-time preview</li>
                          <li>n8n workflow automation for email drafting and sending</li>
                          <li>Dark/Light theme toggle</li>
                          <li>PDF parsing using pdf-parse library</li>
                          <li>Secure file upload with Multer</li>
                          <li>Temporary file storage with auto-deletion</li>
                          <li>RESTful API design</li>
                          <li>Fully responsive UI design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React 18
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TAILWIND}
                                alt="Tailwind CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Tailwind CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js 18
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GEMINI}
                                alt="Google Gemini"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Google Gemini AI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_N8N}
                                alt="n8n"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              n8n Workflow
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PDF}
                                alt="PDF Parse"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              pdf-parse
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MULTER}
                                alt="Multer"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Multer
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://ai-orchestrator-frontend.vercel.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/ai-orchestrator-frontend"
                  target="_blank"
                >
                  FRONTEND CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/ai-orchestrator-backend"
                  target="_blank"
                >
                  BACKEND CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Shopnetic */}
          <ImageEvent
            date="15th Jan, 2026"
            className="text-center"
            text="Shopnetic - Full-Stack E-commerce"
            src={Shopnetic}
            alt="Shopnetic E-commerce"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
  as="button"
  eventKey="0"
  className="accordian-main"
>
  PROJECT DETAILS
</Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A modern, responsive full-stack E-commerce application featuring user & admin dashboards, authentication, cart & wishlist management, checkout flow with Stripe integration, order management, and invoice PDF generation.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User authentication with JWT (Login/Signup/Password Reset)</li>
                          <li>Product browsing with categories, search & sorting</li>
                          <li>Cart & Wishlist management with Redux state</li>
                          <li>Secure checkout with Stripe payment integration</li>
                          <li>Order history with PDF invoice download</li>
                          <li>Admin dashboard with analytics & charts</li>
                          <li>Product management (CRUD operations)</li>
                          <li>Order & user management for admins</li>
                          <li>Role-based access control (Admin vs User)</li>
                          <li>Responsive UI for mobile & desktop</li>
                          <li>RESTful API with Swagger documentation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux Toolkit"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux Toolkit
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TAILWIND}
                                alt="Tailwind CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Tailwind CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STRIPE}
                                alt="Stripe"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Stripe
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SWAGGER}
                                alt="Swagger"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Swagger
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://lively-truffle-50078c.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/ecommerce-react"
                  target="_blank"
                >
                  FRONTEND CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/ecommerce-backend"
                  target="_blank"
                >
                  BACKEND CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* LearnPro */}
          <ImageEvent
            date="15th Jan, 2026"
            className="text-center"
            text="LearnPro - EdTech Learning Platform"
            src={LearnPro}
            alt="LearnPro EdTech Platform"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
  as="button"
  eventKey="0"
  className="accordian-main"
>
  PROJECT DETAILS
</Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A comprehensive full-stack Learning Management System (LMS) that revolutionizes online education with AI-powered assistance, secure payments, real-time analytics, and an intuitive interface for both students and instructors.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>JWT-based authentication with role-based access control (RBAC)</li>
                          <li>Advanced course discovery with search, filters, and categories</li>
                          <li>AI Learning Assistant powered by Google Gemini API</li>
                          <li>Personalized student dashboard with progress tracking</li>
                          <li>Secure payment integration with Stripe</li>
                          <li>Interactive video learning with "Mark as Watched" feature</li>
                          <li>Instructor dashboard with real-time analytics and earnings</li>
                          <li>Course management (Create, Edit, Delete)</li>
                          <li>Progress analytics with visual representations</li>
                          <li>Dark mode with beautiful light/dark theme toggle</li>
                          <li>Google Analytics (GA4) for user behavior tracking</li>
                          <li>Sentry integration for production error monitoring</li>
                          <li>Fully responsive mobile-first design</li>
                          <li>RESTful API with Swagger documentation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React 18
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TAILWIND}
                                alt="Tailwind CSS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Tailwind CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js 18
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB Atlas
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STRIPE}
                                alt="Stripe"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Stripe Payments
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GEMINI}
                                alt="Google Gemini"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Google Gemini AI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SWAGGER}
                                alt="Swagger"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Swagger/OpenAPI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SENTRY}
                                alt="Sentry"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Sentry Monitoring
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANALYTICS}
                                alt="Google Analytics"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Google Analytics
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://edtech-dashboard-frontend.vercel.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/aditya32193213/edtech-dashboard-fullstack"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://edtech-dashboard-backend.onrender.com/api-docs/"
                  target="_blank"
                >
                  API DOCS
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
}

export default ProjectTimeline;