

export default function PreparationCard({prepName}) {
  return (
    <>
    <div className="bg-[#21283a] p-3">
        <p className="text-textSecondary">PREPARE BY TOPICS</p>
         <h2 className="text-textPrimary">{prepName}</h2>

         <button className="bg-[#4acc5b]  p-2 rounded-lg">Continue Preparation</button>
    </div>

    </>
  )
}
