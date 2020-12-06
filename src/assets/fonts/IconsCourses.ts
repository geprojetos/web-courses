export type IconsCoursesId =
  | "class"
  | "proffy"
  | "study";

export type IconsCoursesKey =
  | "Class"
  | "Proffy"
  | "Study";

export enum IconsCourses {
  Class = "class",
  Proffy = "proffy",
  Study = "study",
}

export const ICONS_COURSES_CODEPOINTS: { [key in IconsCourses]: string } = {
  [IconsCourses.Class]: "61697",
  [IconsCourses.Proffy]: "61698",
  [IconsCourses.Study]: "61699",
};
