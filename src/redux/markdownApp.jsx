const CHANGE_CLICK='CHANGE_CLICK'
const CHANGE_TEXT='CHANGE_TEXT'

export function changeClick(prop){
    return{
        type:CHANGE_CLICK,
        payload:prop
    }
}
export function changeText(text){
    return{
        type:CHANGE_TEXT,
        payload:text
    }
}
const helpText = 
`Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Ismail BOYACI](http://github.com/ismailboyaci)*`;

const initialState={
    clicked:false,
    userText:'# This is user input',
    helpText:helpText,
}

export default function reducer(state=initialState,action){
    switch(action.type){

        case CHANGE_CLICK:
            return Object.assign({},state,{clicked:action.payload});

        case CHANGE_TEXT:
            return Object.assign({},state,{userText:action.payload});

        default:
            return state;
    }
}