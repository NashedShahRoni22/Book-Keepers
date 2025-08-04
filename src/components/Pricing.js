import Link from "next/link";
import Container from "./shared/Container";

const pricingPlans = [
  {
    title: "Bronze Package",
    overview: "Core payroll essentials for businesses operating in one state.",
    price: "$45.00",
    perEmployee: "$3 each employee",
    billingCycle: "monthly",
    scope: "Single state",
    includesContractors: true,
    features: ["Direct deposit", "Employee portal"],
    highlight: false,
  },
  {
    title: "Silver Package",
    overview:
      "Advanced payroll with time tracking, hiring/onboarding, and basic benefits.",
    price: "$60.00",
    perEmployee: "$6 each employee",
    billingCycle: "monthly",
    scope: "Multi state",
    includesContractors: true,
    features: [
      "Direct deposit",
      "Employee portal",
      "Time tracking",
      "Hiring & onboarding",
      "Employee benefits offered",
    ],
    highlight: true,
  },
  {
    title: "Gold Package",
    overview:
      "Comprehensive multi-state payroll plus onboarding, benefits, and HR-ready tools.",
    price: "$125.00",
    perEmployee: "$10 each employee",
    billingCycle: "monthly",
    scope: "Multi state",
    includesContractors: true,
    features: [
      "Direct deposit",
      "Employee portal",
      "Time tracking",
      "Hiring & onboarding",
      "Employee benefits offered",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-10 md:py-20">
      <Container>
        <div className="mb-16 text-center">
          <div className="text-primary ring-primary/20 inline-flex items-center gap-1 rounded-full bg-[#FFF8F5] px-3 py-0.5 text-xs font-semibold tracking-wide uppercase ring-1">
            Pricing
          </div>
          <h2 className="text-primary font-playfair mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            Simple & Transparent Payroll
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Clear monthly rates with everything you need to pay and support your
            team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`text-primary relative rounded-lg border p-6 shadow-sm ${
                plan.highlight
                  ? "border-custom-blue ring-custom-blue ring-2"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="bg-custom-blue absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-semibold">
                  BEST VALUE
                </div>
              )}
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{plan.overview}</p>

              <div className="mt-4 flex flex-col items-baseline gap-2 md:flex-row">
                <span className="text-3xl font-bold">{plan.price}/mo</span>
                <span className="text-sm text-gray-500">
                  {plan.perEmployee}
                </span>
              </div>

              <Link
                href="/"
                className={`border-custom-blue text-primary mt-6 block w-full rounded-full border px-4 py-2 text-center text-sm font-medium transition-all duration-200 ease-linear active:scale-95 ${plan.highlight ? "bg-primary hover:bg-primary-hover text-white" : "bg-white hover:bg-teal-50"}`}
              >
                Get started
              </Link>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {/* Core scope info */}
                <li className="flex items-start">
                  <span className="text-custom-blue mr-2">•</span>
                  {plan.scope}
                </li>
                {plan.includesContractors && (
                  <li className="flex items-start">
                    <span className="text-custom-blue mr-2">•</span>
                    Includes Contractors
                  </li>
                )}
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-custom-blue mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
