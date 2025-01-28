window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")

    /*** START PART TWO MODIFY  (Bianca Granata - part 2 _ 1-4) */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE*/ let firstParagraph = document.querySelector('p');
    firstParagraph.textContent = 'New text in paragraph one: text changed by Bianca on January 26th 2025 ';
    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE

    */
    let containers = document.getElementsByClassName('content-container');
    containers[0].style.backgroundColor = 'orange';
    containers[1].style.backgroundColor = 'purple';
    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE 
     * 
    */
    let firstImage = document.querySelector('img');
    firstImage.src = 'seven.png';
    /*************************************** */
    /* 4: Select the third paragraph element on the page and
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE 
    */
    let thirdParagraph = document.getElementsByTagName('p')[2];
    thirdParagraph.innerHTML = '<h2>TEST 123</h2>';
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
    //


    // 1-4: this creates the function that makes a new div and adds it to a parent element
    function customNewBoxCreate(parent) {
        //new div element
        const newDiv = document.createElement('div');

        // add the class 'testDiv' to it
        newDiv.classList.add('testDiv');

        // adsd it to the parent element that was passed in
        parent.appendChild(newDiv);


        return newDiv;
    }

    // 5,6: this creates the 10x10 grid
    // by first getting  the element with id 'new-grid'
    const gridContainer = document.getElementById('new-grid');

    // this creates nested loops for rows and columns
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            // This creates a new div
            const returnedDiv = customNewBoxCreate(gridContainer);

            // positioning the div w/  row and col 

            returnedDiv.style.left = col * 50 + 'px';
            returnedDiv.style.top = row * 50 + 'px';
        }
    }

    // 7: counts how many elements have class 'testDiv'
    const testDivs = document.getElementsByClassName('testDiv');
    console.log('Number of elements with class testDiv:', testDivs.length);
    // Output:  the number of elements with class testDiv: 100 ,We get 100 elements because it created a 10x10 grid
    // 10 rows × 10 columns = 100 total div elements



    /***EXPLANATION::
     * For the function it works because it takes a parent element 
 and creates a new div element using createElement. Which this then adds a class 'testDiv' to help style
 and identify the element and return it. For the nested loops it works because together they 
 create the 100 divs, the outer loop with the rows and the inner with the columns. For the positioning
 having the cols and rows multiplied by 50 creates the space which then creates the grid and the changes in the
 css file gives more detail on the positioning. Therefore all together it creates the visible grid.



     * 
     */

    /*************************************** */

}