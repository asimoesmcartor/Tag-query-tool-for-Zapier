output = { hasUseCases: false };

//Make sure to assign the "inputData" to "tags"
var string = inputData.tags;

var array = string.split(',');

var i = [];

//Iterator tool
Array.prototype.contains = function(needle) {
  for (i in this) {
    if (this[i] == needle) return true;
  }
  return false;
};

//Tags that are being searched
const tagsToSearch = ['tag1', 'tag2', 'tag3'];

//Array that contain the tags that are found by the query tool
const tagsFound = [];

const tagsToSearchLength = tagsToSearch.length;

//Query tool that checks the array of tags
//Adds the found tags into the "tagsFound" array
for (var index = 0; index < tagsToSearchLength; index++) {
  if (array.contains(tagsToSearch[index])) {
    tagsFound.push(tagsToSearch[index]);
  }
}

//Checks to see whether that tagsFound array contains items
//Prints out the found tags to console as a string
if (tagsFound === undefined || tagsFound.length == 0) {
  // tagsFound array is empty or does not exist
  // Couldn't find any tags
} else {
  output['hasUseCases'] = true;
  console.log('' + tagsFound);
}

//You can now map the JavaScript console logs in Zapier and this will output the tags that were found.
