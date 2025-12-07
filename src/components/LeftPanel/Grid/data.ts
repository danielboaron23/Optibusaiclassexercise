
export interface Shift {
  id: string;
  title: string; // e.g. "1025 (EA)"
  time: string; // e.g. "05:00-12:00"
  type: 'default' | 'error' | 'warning';
}

export interface Driver {
  id: string;
  name: string;
  avatar: string; // Initials usually
  shiftLabel: string; // e.g. "Early"
  employeeId: string;
  seniority: number;
}

export const MOCK_DRIVERS: Driver[] = [
  { id: 'd1', name: 'James Joyce', avatar: 'AB', shiftLabel: 'Early', employeeId: '324099', seniority: 4 },
  { id: 'd2', name: 'James Joyce', avatar: 'AB', shiftLabel: 'Early', employeeId: '324099', seniority: 4 },
  { id: 'd3', name: 'James Joyce', avatar: 'AB', shiftLabel: 'Early', employeeId: '324099', seniority: 4 },
  { id: 'd4', name: 'James Joyce', avatar: 'AB', shiftLabel: 'Early', employeeId: '324099', seniority: 4 },
  { id: 'd5', name: 'James Joyce', avatar: 'AB', shiftLabel: 'Early', employeeId: '324099', seniority: 4 },
];

export const MOCK_DAYS = [
  { day: 'FRI', date: 3, status: 'good' },
  { day: 'SAT', date: 3, status: 'good' }, // Wait, date is 3 again in screenshot? Maybe placeholder. I'll increment.
  { day: 'SUN', date: 3, status: 'good' },
  { day: 'MON', date: 3, status: 'good' },
  { day: 'TUE', date: 3, status: 'good' },
  { day: 'WED', date: 3, status: 'good' },
  { day: 'THU', date: 3, status: 'good' },
  { day: 'FRI', date: 3, status: 'good' },
  { day: 'SAT', date: 3, status: 'good' },
  { day: 'SUN', date: 3, status: 'good' },
];
// Fixing dates to look real
export const REAL_DAYS = [
    { day: 'FRI', date: 16, status: 'good' },
    { day: 'SAT', date: 17, status: 'good' },
    { day: 'SUN', date: 18, status: 'good' },
    { day: 'MON', date: 19, status: 'good' },
    { day: 'TUE', date: 20, status: 'good' },
    { day: 'WED', date: 21, status: 'good' },
    { day: 'THU', date: 22, status: 'good' },
    { day: 'FRI', date: 23, status: 'good' },
    { day: 'SAT', date: 24, status: 'good' },
    { day: 'SUN', date: 25, status: 'good' },
];

export const MOCK_SHIFTS: Record<string, Record<number, Shift>> = {
  'd1': {
      0: { id: 's1', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
      1: { id: 's2', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
      // ... populate more if needed
  },
  'd2': {
      2: { id: 's3', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
      3: { id: 's4', title: '1025 (EA)', time: '05:00-12:00', type: 'default' },
  }
};
