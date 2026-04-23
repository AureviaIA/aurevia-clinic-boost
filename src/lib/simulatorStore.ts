import { useSyncExternalStore } from "react";

// Shared simulator state — single source of truth across CalculatorSection
// and CostOfInactionSection. Keeps both views perfectly synchronized.

export type SimulatorState = {
  leads: number;        // leads por mes
  noShowRate: number;   // porcentaje (0-100)
  avgTicket: number;    // ticket medio en €
};

const DEFAULT_STATE: SimulatorState = {
  leads: 100,
  noShowRate: 30,
  avgTicket: 200,
};

let state: SimulatorState = { ...DEFAULT_STATE };
const listeners = new Set<() => void>();

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

const getSnapshot = () => state;

export const setSimulator = (patch: Partial<SimulatorState>) => {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
};

export const useSimulator = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

// Derived calculations — single shared formula
// Builds a personalized WhatsApp message using current simulator data.
// Falls back to a generic message if data is missing/invalid.
export const buildSimulatorWaMessage = (s: SimulatorState = state): string => {
  return "Hola, quiero ver cómo funciona PatientFlow 24/7 en mi clínica";
};

export const buildSimulatorWaLink = (s: SimulatorState = state): string =>
  `https://api.whatsapp.com/send?phone=34640624484&text=${encodeURIComponent(buildSimulatorWaMessage(s))}`;

export const computeSimulator = (s: SimulatorState) => {
  const leadsPerdidos = s.leads * (s.noShowRate / 100);
  const ingresosPerdidos = leadsPerdidos * s.avgTicket;
  const ingresosRecuperados = ingresosPerdidos * 0.8;
  const ingresosRecuperadosAnual = ingresosRecuperados * 12;
  const perdidaAnual = ingresosPerdidos * 12;
  // 2 minutos por lead × 30 días → minutos/mes → horas/semana
  const horasAhorradasSemana = (s.leads * 2 * 30) / 60 / 4.33;
  return {
    leadsPerdidos,
    ingresosPerdidos,
    ingresosRecuperados,
    ingresosRecuperadosAnual,
    perdidaAnual,
    horasAhorradasSemana,
  };
};
