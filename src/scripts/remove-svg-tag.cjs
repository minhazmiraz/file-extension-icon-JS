"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
// Load the JSON file
var inputFilePath = path.join(__dirname, '../icons/temp/vsi/file/15.json');
var svgs = require(inputFilePath);
// Create the output directory if it doesn't exist
var outputDir = path.join(__dirname, '../icons/json/vsi/file');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}
// Initialize an object to hold the alphabetical groups
var alphabeticalGroups = {};
// Group the SVGs by the first letter of their keys
Object.keys(svgs).forEach(function (key) {
    var firstLetter = key.charAt(0).toUpperCase();
    if (!alphabeticalGroups[firstLetter]) {
        alphabeticalGroups[firstLetter] = {};
    }
    alphabeticalGroups[firstLetter][key] = svgs[key];
});
// Write each group to a separate JSON file
Object.keys(alphabeticalGroups).forEach(function (letter) {
    var filePath = path.join(outputDir, "".concat(letter, ".json"));
    let existingData = {};

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
        existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    // Merge the existing data with the new data
    const mergedData = { ...existingData, ...alphabeticalGroups[letter] };

    // Write the merged data to the file
    fs.writeFileSync(filePath, JSON.stringify(mergedData, null, 2));
});
console.log('SVGs have been separated into alphabetical JSON files successfully.');
