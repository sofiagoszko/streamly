import { describe, expect, it } from 'vitest';
import { formatearFechaCorta } from './formatearFecha.js';

describe('formatearFecha', () => {
  it('formatea una fecha corta como dd/mm/aaaa', () => {
    expect(formatearFechaCorta(new Date(2026, 9, 12, 15, 30))).toBe('12/10/2026');
  });
});
