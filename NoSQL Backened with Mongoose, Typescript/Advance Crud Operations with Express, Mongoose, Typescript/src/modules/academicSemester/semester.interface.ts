
export type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TSemesterName = 'Autumn' | 'Summar' | 'Fall';
export type TSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TSemesterName;
  code: TSemesterCode;
  year: string;
  startMonth: TMonth;
  endMonth: TMonth;
};


// --- this 'type' is for checking if the semester code is valid with name
export type TSemesterCodeWithNameMapper = {
  [key: string]: string;
};