import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Economy",
    price: "$5",
    description: "Perfect for short trips",
    features: ["Base fare included", "Standard vehicle", "Real-time tracking", "Customer support"],
  },
  {
    name: "Premium",
    price: "$12",
    description: "Comfort and style",
    features: ["Luxury vehicle", "Priority booking", "Complimentary water", "Premium support"],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$20",
    description: "For corporate needs",
    features: ["Executive vehicle", "Dedicated driver", "Monthly billing", "Business support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition ${
                plan.highlighted ? "bg-primary text-white shadow-xl scale-105" : "bg-white border border-border"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mb-4 ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-white/80" : "text-muted-foreground"}> per ride</span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Choose Plan
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className={plan.highlighted ? "text-white" : "text-primary"} />
                    <span className={plan.highlighted ? "text-white" : "text-foreground"}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
