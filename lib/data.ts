import { type EventId, events } from "@/config/events";
import { type PartnerId, partners } from "@/config/partners";

/**
 * Resolves an array of partner slugs into full partner objects.
 */
export function resolvePartners(ids: readonly PartnerId[]) {
  return ids.map((id) => ({ id, ...partners[id] }));
}

/**
 * Returns a single event with its partners resolved to full objects.
 */
export function getEventById(id: EventId) {
  const event = events.find((e) => e.id === id);
  if (!event) return null;
  return {
    ...event,
    partnersData: resolvePartners(event.partners as unknown as PartnerId[]),
  };
}

/**
 * Returns all events of a given type with partners resolved.
 */
export function getEventsByType(type: "ai" | "blockchain") {
  return events
    .filter((e) => e.type === type)
    .map((e) => ({
      ...e,
      partnersData: resolvePartners(e.partners as unknown as PartnerId[]),
    }));
}
