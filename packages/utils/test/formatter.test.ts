import { describe, it, expect } from 'vitest';
import {
  formatDate,
  formatKRW,
  formatTime,
  formatTitle,
  formatUSD,
  generateSKU,
  maximumImageSize,
  normalizeInput,
  sanitySlugifier,
} from '../src';

describe('format title', () => {
  it('should return a string with all words capitalize', () => {
    expect(formatTitle('hi hi')).toBe('Hi Hi');
    expect(formatTitle('     hi                hi             hi       ')).toBe(
      'Hi Hi Hi',
    );
  });
});

describe('sanity slugifier', () => {
  it('should slugify any input', () => {
    expect(sanitySlugifier('Hi hi')).toBe('hi-hi');
    expect(sanitySlugifier('Hey $ai L#ng')).toBe('hey-ai-lng');
    expect(sanitySlugifier('Hey-$ai+L#ng')).toBe('hey-ailng');
  });
});

describe('format date', () => {
  it('should format any Date inputs', () => {
    expect(formatDate('1996/09/24')).toBe('Sep 24, 1996');
    expect(formatDate(new Date(1996, 3, 28))).toBe('Apr 28, 1996');
  });
});

describe('generate sku', () => {
  it('should generate random sku number with name input', () => {
    expect(generateSKU('sai')).toEqual(expect.stringContaining('SAI-'));
    expect(generateSKU('ha')).toEqual(expect.stringContaining('HAX-'));
  });
});

describe('normalize input', () => {
  it('should trim the text into 3 characters', () => {
    expect(normalizeInput('HeyYOu')).toBe('HEY');
    expect(normalizeInput('hi')).toBe('HIX');
  });
});

describe('format KRW', () => {
  it('should format number into korean won', () => {
    expect(formatKRW(5000)).toBe('₩5,000');
    expect(formatKRW(23456)).toBe('₩23,456');
  });
});

describe('format USD', () => {
  it('should format number into US dollar', () => {
    expect(formatUSD(100)).toBe('$100.00');
    expect(formatUSD(23.55)).toBe('$23.55');
  });
});

describe('Maximum Image Size', () => {
  it('should return the input into megbyte size', () => {
    expect(maximumImageSize(1)).toBe(1048576);
  });
});

describe('format time', () => {
  it('should return a time string', () => {
    expect(formatTime('1996/09/24 15:30:00')).toBe('3:30:00 PM');
    expect(formatTime(new Date('1995-12-17T03:24:00'))).toBe('3:24:00 AM');
  });
});
