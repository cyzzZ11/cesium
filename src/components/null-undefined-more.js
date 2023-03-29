// @ts-nocheck

export {
  twoEqualNull,
  twoEqualNullEmptyString,
  twoEqualNullEmptyStringZero,
  twoEqualObjectKeyTypeValue
};

function twoEqualNull(value) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] == null) {
        return true;
      }
    }
    return false;
  } else {
    if (value == null) {
      return true;
    } else {
      return false;
    }
  }
}

function twoEqualNullEmptyString(value) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] == null || value[i] === '') {
        return true;
      }
    }
    return false;
  } else {
    if (value == null || value === '') {
      return true;
    } else {
      return false;
    }
  }
}

function twoEqualNullEmptyStringZero(value) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] == null || value[i] === '' || value[i] === 0) {
        return true;
      }
    }
    return false;
  } else {
    if (value == null || value === '' || value === 0) {
      return true;
    } else {
      return false;
    }
  }
}

// letObject：window 对象
// type：类型
// value：1. 等于，判断值；2. 数组、字符串、对象，默认值
function twoEqualObjectKeyTypeValue(letObject, key, type = null, value = null) {
  if (type == '等于') {
    if (letObject != null && letObject[key] != null && letObject[key] == value) {
      return true;
    } else {
      return false;
    }
  } else if (type == '不等于') {
    if (letObject != null && letObject[key] != null && letObject[key] == value) {
      return false;
    } else {
      return true;
    }
  } else if (type == '数字') {
    if (letObject != null && letObject[key] != null) {
      return letObject[key];
    } else {
      return value;
    }
  } else if (type == '字符串') {
    if (letObject != null && letObject[key] != null && letObject[key] != '') {
      return letObject[key];
    } else {
      return value;
    }
  } else if (type == '数组') {
    if (letObject != null && letObject[key] != null && letObject[key].length != 0) {
      return letObject[key];
    } else {
      return value;
    }
  } else if (type == '对象') {
    if (letObject != null && letObject[key] != null) {
      return {
        ...value,
        ...letObject[key]
      };
    } else {
      return value;
    }
  } else {
    return null;
  }
}
