// Rebuild map.html: D3 as local file, data + geojson embedded
const fs = require('fs');
const path = require('path');

const d3Local = 'd3.min.js';
const geojson = fs.readFileSync('china_fixed.geojson', 'utf8');
const datajs = fs.readFileSync('data.js', 'utf8');

// Read current (broken) file
let html = fs.readFileSync('map.html', 'utf8');

// Step 1: Find the <head> section - we need to fix the D3 script reference
// Find the <script>// https://d3js.org block and remove it, replace with local file ref
// The D3 code is massive and contains </script> strings - too risky to inline

// Strategy: Extract everything before the first <script> in <head>, then rebuild
// OR: Just find and replace the broken D3 inline with a local reference

// Find where the D3 script block starts (has the d3js.org comment)
const d3ScriptStart = html.indexOf('<script>// https://d3js.org');
if (d3ScriptStart === -1) {
  process.exit(1);
}

// Find the next </script> after D3 start (this is the D3 closing tag)
const d3ScriptEnd = html.indexOf('</script>', d3ScriptStart);
if (d3ScriptEnd === -1) {
  process.exit(1);
}

// Check: is this the correct closing tag? It should be right after the D3 code
const afterD3Close = html.substring(d3ScriptEnd + 9).trim();

// Find where the next <script> block starts after D3 (should be data.js)
// But first check: what comes between D3 end and the next <script>?
const possibleDataStart = html.indexOf('<script', d3ScriptEnd + 9);

// The file structure is:
// 1. HTML/CSS/style block (lines 1-89)
// 2. <script>//d3js.org v7.8.5... (D3 inline) </script>
// 3. <script> data.js content </script>
// 4. <script> main logic with initMap etc </script>

// Find the style block end - it's the </style> before the first <script>
const styleEnd = html.indexOf('</style>');

// Find the body HTML start
const bodyStart = html.indexOf('</head>');

// Find where the second <script> (data.js) starts
const dataScriptStart = html.indexOf('<script>', d3ScriptEnd);

// The main script - the one with initMap and all the logic
const mainScriptStart = html.indexOf('<script>', dataScriptStart + 1);
