"use client";

type Stat = { 
  label: string; 
  value: string | string[]; 
};

export default function Chip({ label, value }: Stat) {
  // 🎯 หยอดแทนบรรทัดแปลงค่าเดิมตรงนี้เลยครับ
  const valueArray = Array.isArray(value) 
    ? value 
    : typeof value === "string" 
      ? value.split(/,/) // หั่นแยกชิปออโต้ทันที ถ้าเจอช่องว่าง หรือเครื่องหมายจุลภาค (,)
      : [value];

  return (
    <div className="flex flex-col items-center gap-2 px-0 py-2">
      <span className="text-xs text-body text-center tracking-wider">{label}</span>
      
      <div className="flex flex-wrap items-center justify-center gap-2">
        {valueArray.map((item, index) => (
          <span 
            key={index}
            className="inline-flex items-center justify-center text-sm font-body text-white px-4 py-2 border border-[#686868] !rounded-full overflow-hidden whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}