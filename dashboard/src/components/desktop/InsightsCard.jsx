import { Card, CardContent } from "../ui/card"
import { ArrowRight } from "lucide-react"

const InsightsCard = () => {
  return (
    <Card>
      <CardContent className="bg-background border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6">Insights</h2>

        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-base">Founders</p>
            <p className="text-2xl font-extrabold">7.4K</p>
          </div>
          <div className="text-right text-sm leading-tight">
            <p className="text-[#01754F] text-xs  font-semibold">+000%</p>
            <p className="text-secondary  text-xs font-semibold"> (000)</p>
          </div>
        </div>

        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-base">Investors</p>
            <p className="text-2xl font-extrabold">6.09K</p>
          </div>
          <div className="text-right text-sm leading-tight">
            <p className="text-[#01754F] text-xs  font-semibold">+000%</p>
            <p className="text-secondary  text-xs font-semibold">(000)</p>
          </div>
        </div>

        <div className="text-primary text-sm text-right flex items-center justify-end gap-1 cursor-pointer border-t pt-8">
          View detailed insights <ArrowRight size={16} />
        </div>
      </CardContent>
    </Card>
  )
}

export default InsightsCard
