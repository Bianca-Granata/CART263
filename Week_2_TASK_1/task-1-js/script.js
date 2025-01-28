window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")

    /*** START PART TWO MODIFY  (Bianca Granata - part 2 _ 1-4) */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE
     * let firstParagraph = document.querySelector('p');
    firstParagraph.textContent = 'New text in paragraph one: text changed by Bianca on January 26th 2025 ';
    */
    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE
     *  let containers = document.getElementsByClassName('content-container');
    containers[0].style.backgroundColor = 'orange';
    containers[1].style.backgroundColor = 'purple';
    */

    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE 
     * let firstImage = document.querySelector('img');
    firstImage.src = 'seven.png';
    */

    /*************************************** */
    /* 4: Select the third paragraph element on the page and
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE 
     * let thirdParagraph = document.getElementsByTagName('p')[2];
    thirdParagraph.innerHTML = '<h2>TEST 123</h2>';

    */
    /*************************************** */
    /*** END PART TWO MODIFY */
    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    
    /***CODE */


    /***EXPLANATION::
     * 
     * 
     */

    /*************************************** */

}