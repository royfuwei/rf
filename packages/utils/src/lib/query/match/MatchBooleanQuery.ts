import { BooleanFilterOperator, ObjectData } from "@rfjs/common";
import _ = require("lodash");
import { typeTransfer } from "../../data";

export class MatchBooleanQuery {
  isMatch = false;
  validPath = true;
  matchs: boolean[] = [];
  values: boolean[]
  targets: boolean[];
  constructor(
    private field: string,
    private operator: BooleanFilterOperator,
    value: any,
    private data: ObjectData,
  ) {
    const target = _.get(this.data, this.field);
    if (_.isUndefined(target)) {
      this.validPath = false;
    }
    const targets = [].concat(target).map(i => typeTransfer(i, 'boolean'));
    const transVals = [].concat(value).map(i => typeTransfer(i, 'boolean'));
    this.values = transVals;
    this.targets = targets;
    if (_.isNull(target) || _.isUndefined(target)) {
      this.targets = [];
    }
    if (typeof this[this.operator] == 'function' ) {
      this.isMatch = this[this.operator]();
    }
  }

  private eq() {
    this.matchs = this.values.reduce((pre, cur) => {
      let isMatch = false;
      const targetMatchs = this.targets.reduce((tarPre, target) => {
        const isTargetMatch = target == cur;
        if (isTargetMatch) tarPre.push(isTargetMatch);
        return tarPre;
      }, <boolean[]>[]);
      isMatch =  targetMatchs.length == this.targets.length;
      if (isMatch) pre.push(cur);
      return pre;
    }, <boolean[]>[]);
    return this.matchs.length == this.values.length;
  }
  
  private neq() {
    const neq = !this.eq();
    const neqMatchs = this.values.filter(i => !this.matchs.includes(i));
    this.matchs = neqMatchs;
    return neq;
  }
  private isnull() {
    return this.targets.length == 0;
  }
  private isnotnull() {
    return !this.isnull();
  }
}