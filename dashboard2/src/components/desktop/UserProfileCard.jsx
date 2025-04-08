import { Card, CardContent } from "../ui/card"

const UserProfileCard = () => {
  return (
    <Card className="w-full bg-tertiary pt-5">
      <CardContent className="bg-background border rounded-lg p-4 flex flex-col h-full">
        <div className="flex flex-col desktop:flex-row items-center desktop:items-start gap-6 desktop:gap-8 w-full">
          <div className="w-full max-w-[120px] aspect-square rounded-full overflow-hidden">
            <img src="/src/assets/images/avatar.png" alt="Avatar Profile" className="w-full h-full object-cover object-center block" />
          </div>

          <div className="flex flex-col gap-2 items-center desktop:items-start text-center desktop:text-left w-full">
            <div className="flex items-center gap-4 desktop:gap-40">
              <span className="text-primary font-bold text-[24px] block desktop:hidden">Mr.ABC</span>
              <span className="text-primary font-bold text-[24px] hidden desktop:block">Mr A</span>
              <img src="/src/assets/images/verified.png" alt="Verified Badge" className="w-[18px] h-[18px]" />
            </div>

            <div className="flex items-center gap-2 text-sm text-primary">
              <span className="text-sx font-medium">Co-Founder & CEO @Vertx</span>
              <img src="/vertxWhite.png" alt="Vertx Logo" className="w-2 h-2" />
            </div>

            <span className="text-xs bg-primary text-black px-2 py-0.5 rounded font-medium">Entrepreneur</span>

            <div className="w-[120px] desktop:w-[160px]">
              <img src="/src/assets/images/socials.png" alt="Social Media" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserProfileCard
