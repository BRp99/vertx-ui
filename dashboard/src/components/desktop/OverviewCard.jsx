import { Card, CardContent } from "../ui/card"

const OverviewCard = () => {
  return (
    <Card className="bg-[#111111] text-white col-span-2">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="space-x-2">
            <button className="bg-[#1A1A1A] px-4 py-1 rounded-full text-sm">Visitors</button>
            <button className="bg-[#1A1A1A] px-4 py-1 rounded-full text-sm">Last 30 days</button>
            <button className="bg-[#1A1A1A] px-4 py-1 rounded-full text-sm">+ Compare</button>
          </div>
        </div>

        <div className="text-4xl font-semibold">13.49K</div>
        <div className="text-green-500 text-sm">+469% (897)</div>

        <div className="mt-4 h-40 bg-[#1F1F1F] rounded-lg flex items-center justify-center text-gray-500">Gráfico aqui</div>
      </CardContent>
    </Card>
  )
}

export default OverviewCard
