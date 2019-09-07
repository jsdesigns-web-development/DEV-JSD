/*
  Backlog:
--------------------------------------------------------------------------------
  - On page load, loop through each file from fileNames()
  1. add div elements to html
  2. add nav elements to html
  3. add style information to html
--------------------------------------------------------------------------------
  - add #navLinks .itemLinks to html:
    Note: incriment by -550px
    ```
      <li class="itemLinks" data-pos="0px"></li>
      <li class="itemLinks" data-pos="-550px"></li>
    ```
--------------------------------------------------------------------------------
  - change div ids from `itemOne` to `item1`
    ```
      <div id="itemOne" class="content"></div>
    ```
--------------------------------------------------------------------------------
  - add `item1` style information to head
    ```
    #item1 {
        background-color: #ADFF2F;
        background-image: url("img/attach51213_20190820_183236.jpg");
    }
    ```
--------------------------------------------------------------------------------





/* Add new Div                                                                */

// return div's html
function divString(num) {
  return "<div id=\"item" + num + "\" class=\"content\"></div>"
}
/*                                                                Add new Div */
/* loop through fileNames                                                     */
function navString(num) {
  if(i == 0) {
    return '<li class=\"itemLinks\" data-pos=\"0px\"></li>';
  } else {
    return '<li class=\"itemLinks\" data-pos=\"-' + (num * 550) + 'px' + '\"></li>';
  }
}

function styleString(num) {
  return '#item' + num + ' {\n background-image: url("' + directoryPath() + fileNames()[num] + "\")\n}";
}

function insertBlock(targetId, content){
  $('#' + targetId).append(content);
}


// Generate HTML and CSS strings that will later be inserted into the HTML file.
var divBlock = "";
var navBlock = "";
var styleBlock = "";

var i;
for (i=0; i < fileNames().length; i++) {
  //console.log(fileNames()[i]);
  // add div
  //console.log(divString(i));
  divBlock += divString(i) + "\n";
  // add nav
  //console.log(navString(i));
  navBlock += navString(i) + "\n";
  // add style
  //console.log(styleString(i));
  styleBlock += styleString(i) + "\n";
}

let wrapperWidth = fileNames().length * 550;

styleBlock += "#wrapper" + " {\n width:" + wrapperWidth + "px; \n}";

/*                                                     loop through fileNames */
