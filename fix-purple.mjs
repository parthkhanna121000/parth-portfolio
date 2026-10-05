import fs from "fs";
import path from "path";

const rules = [
  [/#22C55E/gi, "#7C3AED"],
  [/#4ADE80/gi, "#A78BFA"],
  [/#86EFAC/gi, "#C4B5FD"],
  [/#031008/gi, "#FFFFFF"],
  [/rgba\(\s*34\s*,\s*197\s*,\s*94/gi, "rgba(124,58,237"],
  [/rgba\(\s*74\s*,\s*222\s*,\s*128/gi, "rgba(167,139,250"],
  [/%2322C55E/gi, "%237C3AED"],
  [/%234ADE80/gi, "%23A78BFA"],
  [/%2307110D/gi, "%2309090B"],
  [/emerald-400/g, "violet-400"],
];

const walk = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)],
    );

for (const dir of ["components", "app"]) {
  for (const f of walk(dir).filter((f) => /\.(tsx|ts)$/.test(f))) {
    const before = fs.readFileSync(f, "utf8");
    let after = before;
    for (const [re, to] of rules) after = after.replace(re, to);
    if (after !== before) {
      fs.writeFileSync(f, after);
      console.log("updated", f);
    }
  }
}
