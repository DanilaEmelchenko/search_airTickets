import { convertDurationToMinutes } from "./convertDurationToMinutes";
import { Ticket } from "../state/aviTicketsSlice";

export const filterTickets = (tickets: Ticket[], filters: string[]) => {
  return tickets.filter((ticket) => {
    const cheap = parseFloat(ticket.price.replace(/ /g, ""));
    const durationInMinutes = convertDurationToMinutes(ticket.duration);

    if (filters.includes("cheap") && cheap > 10000) return false;
    if (filters.includes("fast") && durationInMinutes > 120) return false;
    if (filters.includes("optimal") && !(cheap <= 15000 && durationInMinutes <= 120)) return false;

    if (filters.includes("noneTransfer") && ticket.transferCount !== "Без пересадок") return false;
    if (filters.includes("oneTransfer") && ticket.transferCount !== "1 пересадка") return false;
    if (filters.includes("twoTransfer") && ticket.transferCount !== "2 пересадки") return false;
    if (filters.includes("threeTransfer") && ticket.transferCount !== "3 пересадки") return false;

    const companyFilters = filters.filter((f) => ["Победа", "Red Wings", "S7 Airlines"].includes(f));
    if (companyFilters.length > 0 && !companyFilters.includes(ticket.company)) return false;

    return true;
  });
};
