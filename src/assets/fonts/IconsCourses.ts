export type IconsCoursesId =
  | "back"
  | "class"
  | "proffy"
  | "study";

export type IconsCoursesKey =
  | "Back"
  | "Class"
  | "Proffy"
  | "Study";

export enum IconsCourses {
  Back = "back",
  Class = "class",
  Proffy = "proffy",
  Study = "study",
}

export const ICONS_COURSES_CODEPOINTS: { [key in IconsCourses]: string } = {
  [IconsCourses.Back]: "61697",
  [IconsCourses.Class]: "61698",
  [IconsCourses.Proffy]: "61699",
  [IconsCourses.Study]: "61700",
};
