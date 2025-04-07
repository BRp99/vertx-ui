import { Card, CardContent } from "../ui/card"
import { ArrowRight } from "lucide-react"

const InsightsCard = () => {
  return (
    <Card className="bg-[#111111] text-white">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Insights</h2>

        <div className="mb-2">
          <p className="text-sm text-gray-400">Founders</p>
          <p className="text-2xl font-semibold">7.4K</p>
          <p className="text-green-500 text-sm">+000% (000)</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-400">Investors</p>
          <p className="text-2xl font-semibold">6.09K</p>
          <p className="text-green-500 text-sm">+000% (000)</p>
        </div>

        <div className="text-sm text-right text-gray-400 hover:text-white flex items-center justify-end gap-1 cursor-pointer">
          View detailed insights <ArrowRight size={16} />
        </div>
      </CardContent>
    </Card>
  )
}

export default InsightsCard
