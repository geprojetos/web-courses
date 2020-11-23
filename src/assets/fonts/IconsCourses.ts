export type IconsCoursesId =
  | "class"
  | "study";

export type IconsCoursesKey =
  | "Class"
  | "Study";

export enum IconsCourses {
  Class = "class",
  Study = "study",
}

export const ICONS_COURSES_CODEPOINTS: { [key in IconsCourses]: string } = {
  [IconsCourses.Class]: "61697",
  [IconsCourses.Study]: "61698",
};
