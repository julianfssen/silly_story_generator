const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    let random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    if (customName.value !== ''){
        let name = customName.value;
        newStory = newStory.replace(/bob/gi, name);
    }

    if(document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature =  Math.round(94);

    }
  
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/gi, xItem);
    newStory = newStory.replace(/:inserty:/gi, yItem);
    newStory = newStory.replace(/:insertz:/gi, zItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}