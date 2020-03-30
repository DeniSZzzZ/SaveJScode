let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

let newOption = new Option("Классика", "classic",false,true);
genres.append(newOption);

newOption.selected = true;