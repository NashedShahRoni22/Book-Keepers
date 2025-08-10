import {
  BookOpenCheck,
  RefreshCw,
  History,
  Banknote,
  Users,
  FileText,
} from "lucide-react";
import Container from "./shared/Container";

const services = [
  {
    icon: <BookOpenCheck className="h-8 w-8" />,
    title: "QuickBooks Online Setup & Support",
    description:
      "Expert setup and ongoing support to ensure your QuickBooks Online is optimized for your business needs.",
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Monthly & Quarterly Bookkeeping",
    description:
      "Accurate and timely bookkeeping services to keep your financial records organized year-round.",
  },
  {
    icon: <History className="h-8 w-8" />,
    title: "Catch-Up Bookkeeping",
    description:
      "Bring your books up to date quickly and efficiently, no matter how far behind they are.",
  },
  {
    icon: <Banknote className="h-8 w-8" />,
    title: "Bank Reconciliations",
    description:
      "Ensure your bank statements and accounting records match, identifying and resolving discrepancies.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Payroll Processing",
    description:
      "Accurate, timely payroll management that keeps your team paid and your records compliant.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Tax Preparation",
    description:
      "Professional tax filing and strategic planning to minimize liabilities and maximize savings.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-20">
      <Container>
        <div className="mb-16 text-center">
          <div className="text-primary ring-primary/20 inline-flex items-center gap-1 rounded-full bg-[#FFF8F5] px-3 py-0.5 text-xs font-semibold tracking-wide uppercase ring-1">
            Our Services
          </div>
          <h2 className="text-primary font-playfair mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            What We Do
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-200 ease-linear hover:shadow-md"
            >
              <div className="bg-custom-blue/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                <div className="transition-transform duration-200 ease-in-out group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-primary mb-4 text-xl font-semibold text-balance">
                {service.title}
              </h3>
              {/*  <p className="leading-relaxed text-gray-600">
                {service.description}
              </p> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
