function solution(new_id) {
  var answer = "";
  let changeId = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "")
    .replace(/^$/, "a");
  if (changeId.length >= 16) {
    changeId = changeId.slice(0, 15);
  }
  changeId = changeId.replace(/\.$/, "");
  if (changeId.length <= 2) {
    while (changeId.length < 3) {
      const lastChar = changeId.slice(-1);
      changeId += lastChar;
    }
  }
  return changeId;
}
