import { LOCALE } from '../config/app.config.js';

const FORMATEADOR_FECHA_CORTA = new Intl.DateTimeFormat(LOCALE, {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function formatearFechaCorta(fecha) {
  return FORMATEADOR_FECHA_CORTA.format(new Date(fecha));
}
