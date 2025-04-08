import { Card, CardContent } from "../ui/card"

const ExperienceCard = () => {
  const companies = [{ name: "Company 1" }, { name: "Company 2" }, { name: "Company 3" }]

  return (
    <Card className="flex-1 h-full rounded-lg border w-full bg-background flex flex-col justify-between">
      <CardContent className="p-4 desktop:p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-extrabold text-primary mb-4">Experience</h2>
          <div className="text-[64px] font-bold leading-none text-primary">03</div>
        </div>

        <div className="flex flex-col gap-5">
          {companies.map((company, idx) => (
            <div key={idx} className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px] rounded bg-primary" />
                <span className="text-sm font-bold text-primary">{company.name}</span>
              </div>

              <div className="text-[8px]">View Profile</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ExperienceCard
