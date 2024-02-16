import { Link } from "@remix-run/react";
import { FaArrowRight, FaDollarSign, FaChartBar } from "react-icons/fa";
import type { LinksFunction } from "@remix-run/node";
import marketingCSS from "~/styles/marketing.css";
import expenseChartImage from "../../public/images/expenses-chart.jpg";
import expenseManagementImage from "../../public/images/expenses-management.jpg";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: marketingCSS }];
};

export default function Index() {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaDollarSign />
          <h2>A Central Space</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img src={expenseChartImage} alt="A list of expenses." />
          </div>
          <div className="marketing-explanation">
            <p>Manage your expenses in one central place.</p>
            <p>
              <Link className="cta" to="/expenses">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          <h2>Detailed Analytics</h2>
        </header>
        <div className="marketing-content">
          <p className="marketing-explanation">
            Benefit from best-in-class analytics to understand your spending
            patterns.
          </p>
          <div className="marketing-image">
            <img src={expenseManagementImage} alt="A demo bar chart." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function meta() {}
