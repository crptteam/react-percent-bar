export function getTotalCount(values) {
  return values.reduce(
    (total, current) => total + (current.count ? current.count : 0),
    0
  );
}

export function getTotalPercent(values) {
  return values.reduce(
    (total, current) => total + (current.percent ? current.percent : 0),
    0
  );
}

export function getPercentFromTotalPercentByValuesAndPercent(values, percent) {
  const total = getTotalPercent(values);
  return 100 / total * percent;
}

export function formatForThousands(text) {
  return (text + "")
    .split("")
    .reverse()
    .filter(l => l != " ")
    .map((l, i) => ((i + 1) % 3 ? l : " " + l))
    .reverse()
    .join("");
}

export function getAllPlainValuesAsObj(obj) {
  const plain = {};
  Object.keys(obj).forEach(
    key => (typeof obj[key] !== "object" ? (plain[key] = obj[key]) : null)
  );
  return plain;
}

export function getThemeAsPlainObjectByKeys(theme, ...keys) {
  const plain = getAllPlainValuesAsObj(theme);

  keys.forEach(key => theme[key] && Object.assign(plain, theme[key]));

  return plain;
}

export function innerMerge(obj, ...others) {
  others.forEach(v => {
    for (const key in v) {
      if (typeof obj[key] === "object" && typeof v[key] === "object") {
        obj[key] = innerMerge({}, obj[key], v[key]);
      } else {
        obj[key] = v[key];
      }
    }
  });

  return obj;
}
