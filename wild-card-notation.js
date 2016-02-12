/**
 * Created by NAyalin on 2/12/16.
 */

function WildCardNotation (pref, suff) {
  this.pref = pref ? pref : '${{';
  this.suff = suff ? suff : '}}';
}

WildCardNotation.prototype.isValid = function (str) {
  if (typeof str === 'string'){
    return (str.indexOf(this.pref) > -1) && (str.indexOf(this.suff) > -1)
  } else {
    return false;
  }
};

WildCardNotation.prototype.getWildCards = function (str) {
  if (this.isValid(str)){
    var result = [];
    var raw = str.split(this.suff);

    for (var i = 0; i < raw.length ; i++){
      var tempStr = raw[i].substr(raw[i].indexOf(this.pref) + this.pref.length);

      if (tempStr)
        result.push(tempStr);
    }

    return result ? result : null;
  } else {
    return null;
  }
};

WildCardNotation.prototype.setValueToWildCard = function (str, val, wildcard) {
  if (this.isValid(str)) {
    return str.replace(this.pref + wildcard + this.suff, val);
  } else {
    return false;
  }
};

WildCardNotation.prototype.setValues = function (str, values, wildcards) {
  if (this.isValid(str)) {


    // retrieve wildcards if not set
    if (! wildcards) {
      wildcards = this.getWildCards(str);
    }

    // change values to array if it is not
    if (values.prop && values.prop.constructor === Array) {
      var tempArr = [];
      tempArr.push(values);
      values = tempArr;
    }

    // if wildcards is less than values, do not proceed!
    if (wildcards.length < values.length) {
      throw new Error('The number of wildcards is less than the number of' +
          ' values!');
    }

    for (var i = 0; i < values.length; i++) {
      str = this.setValueToWildCard(str, values[i], wildcards[i]);
    }

    return str;
  } else {
    return false;
  }
};

module.exports = WildCardNotation;
