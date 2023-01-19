import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  // Pegar o primeiro dia do ano
  const firstDayOfYear = dayjs().startOf("year");

  // Pegar data atual
  const today = new Date();

  // Criar um array de datas
  const dates = [];
  let compareDate = firstDayOfYear;

  // Enquanto a data atual for maior que a data do primeiro dia do ano
  while (compareDate.isBefore(today)) {
    // Adicionar a data atual ao array
    dates.push(compareDate.toDate());

    // Adicionar um dia a data atual
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
