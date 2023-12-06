import { TMonth, TSemesterCode, TSemesterCodeWithNameMapper, TSemesterName } from './semester.interface';

export const semesterNameSchema: TSemesterName[] = ['Autumn', 'Summar', 'Fall'];

export const semesterCodeSchema: TSemesterCode[] = ['01', '02', '03'];

export const months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


// --- this 'const' is for checking if the semester code is valid with name
export const SemesterCodeWithNameMapper: TSemesterCodeWithNameMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};