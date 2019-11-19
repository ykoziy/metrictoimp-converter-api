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
    let unit = initUnit.toLowerCase();
    switch (unit) {
      case "gal" : return "l";
      case "l"   : return "gal";
      case "mi"  : return "km";
      case "km"  : return "mi";
      case "lbs" : return "kg";
      case "kg"  : return "lbs";
      default    : return 'Invalid Unit';
    }
  };

  this.spellOutUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    switch (unit) {
      case "gal" : return "gallons";
      case "l"   : return "liters";
      case "mi"  : return "miles";
      case "km"  : return "kilometers";
      case "lbs" : return "pounds";
      case "kg"  : return "kilograms";
      default    : return 'Invalid Unit';
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    switch (unit) {
      case "kg"  : return initNum/lbsToKg;
      case "lbs" : return initNum*lbsToKg;
      case "l"   : return initNum/galToL;
      case "gal" : return initNum*galToL;
      case "km"  : return initNum/miToKm;
      case "mi"  : return initNum*miToKm;
      default    : return "ERROR";
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };

}

module.exports = ConvertHandler;
