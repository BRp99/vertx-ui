import React from "react"

const ProfileCompaniesCard = ({ title, count, companies }) => {
  return (
    <div className="flex-1 h-full bg-[#000101] border border-[#1A1A1A] rounded-lg p-4 desktop:p-6 text-primary flex flex-col justify-between">
      <h2 className="text-lg text-primary font-extrabold mb-4">{title}</h2>

      <div className="text-[64px] text-primary font-bold leading-none mb-6">{count}</div>

      <div className="flex flex-col gap-5">
        {companies.map((company, idx) => (
          <div key={idx} className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
              {idx === 0 ? (
                <div className="w-[30px] h-[30px] rounded overflow-hidden">
                  <img src="/vertxWhite.png" alt="Vertx" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-[30px] h-[30px] rounded bg-primary" />
              )}

              <div className="flex flex-col text-sm">
                <div className="flex items-center gap-2 font-medium">
                  {company.name}
                  {company.tag && (
                    <span
                      className={`text-[10px] font-bold px-2 py-[2px] rounded ${
                        company.tag === "CEO" ? "bg-[#579560]" : company.tag === "PROPRIETOR" ? "bg-[#A9A9FF] text-black" : "bg-[#B1BDEB]"
                      }`}
                    >
                      {company.tag}
                    </span>
                  )}
                </div>
                {company.description && <span className="text-xs leading-snug text-primary">{company.description}</span>}
              </div>
            </div>

            <div>
              <div className="text-primary text-[8px] font-medium">View Profile</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileCompaniesCard
