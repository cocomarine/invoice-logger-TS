export interface HasFormatter {
  // ensuring format method returns string
  // whenever a class uses format method
  format(): string;
}