const lines = [{ line: 'bbbb'}, {line: 'zzzz'}, {line: '1111' }];

lines.map((line) => {
  console.log(line);
});

const sorted = lines.sort((l1,l2) => l1.line.localeCompare(l2.line));
sorted.map((line) => {
  console.log(line);
});
