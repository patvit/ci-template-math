// jshint esversion:6
import MathClass from './MathClass';

export default class Daemon extends MathClass {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
