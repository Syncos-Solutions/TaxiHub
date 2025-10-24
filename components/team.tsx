"use client"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "/professional-man-portrait.png",
  },
  {
    name: "Priya Silva",
    role: "Operations Manager",
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Anil Perera",
    role: "Customer Support Lead",
    image: "/professional-man-portrait.png",
  },
  {
    name: "Nisha Jayawardena",
    role: "Technology Director",
    image: "/professional-woman-portrait.png",
  },
]

export default function Team() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals behind TaxiHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
