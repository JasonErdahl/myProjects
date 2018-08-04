
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");



if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

if (search === "show") {
  console.log("Searching for TV Show");
} else {
  console.log("Searching for TV Actor");
}
