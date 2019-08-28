import { isModuleDeclaration } from "@babel/types";

export const generateBoard = () => {
  console.log('Generating Board...');
  return [[0,1],[0,1],[0,1]];
};

export const clickMe = () => {
  console.log('Clicky...');
}