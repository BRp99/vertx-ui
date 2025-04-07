import { Card, CardContent } from "../ui/card"

const OverviewCard = () => {
  return (
    <Card className=" col-span-2">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="space-x-2">
            <button className="px-4 py-1 rounded">Visitors</button>
            <button className="px-4 py-1 rounded">Last 30 days</button>
            <button className="px-4 py-1 rounded">+ Add</button>
          </div>
        </div>

        <div className="text-4xl font-semibold">13.49K</div>
        <div className="text-green-500">+469% (897)</div>

        <div className="mt-4 h-40 rounded-lg flex items-center justify-center">Gráfico</div>
      </CardContent>
    </Card>
  )
}

export default OverviewCard
