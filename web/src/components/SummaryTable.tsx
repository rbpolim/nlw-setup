
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"

import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()

const minSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-2">
        {summaryDates.map(date => (
          <HabitDay key={date.toString()} />
        ))}

        {amountOfDaysToFill > 0 && (
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 border-2 border-zinc-800 bg-zinc-900 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))
        )}
      </div>
    </div>
  )
}
