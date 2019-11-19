/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    let result;
    let letterRegex = /[a-z]/i;
    let fractionRegex = /[\/]/g;
    let unitIndex = letterRegex.exec(input).index;

    if (unitIndex == 0) {
      result = 1;
    } else {
      result = input.substring(0, unitIndex).replace(/\s/g, '');
      if (fractionRegex.test(result) == true) {
        if (result.match(fractionRegex).length !== 1) {
          result = 'Invalid Number';
        } else {
          result = result.split('/').reduce((a,b) => a/(+b||0))
        }
      } else {
        result = Number(result);
      }
    }
    return result;
  };

  this.getUnit = function(input) {
    let result;
    const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    let letterRegex = /[a-z]/i;
    let unitIndex = letterRegex.exec(input).index;
    result = input.substring(unitIndex);
    return validUnits.includes(result)? result : 'Invalid Unit';
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
