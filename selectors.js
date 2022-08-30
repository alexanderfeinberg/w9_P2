const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seeds = document.getElementsByClassName("seed")
    console.log(seeds)

    // 2. Get all seedless fruit elements
    // Your code here
    const seadless = document.querySelectorAll("li.seadless")
    console.log(seadless)
    // 3. Get first seedless fruit element
    // Your code here
    const firstSeadless = document.querySelectorAll("li.seadless")[0]
    console.log(firstSeadless)
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const youSpan = document.querySelector("span")
    console.log(youSpan)

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChild = document.getElementById("wrapper").children
    console.log(wrapperChild)
    // 6. Get all odd number list items in the list
    // Your code here

    const odds = document.querySelectorAll("li.odd")
    console.log(odds)

    // 7. Get all even number list items in the list
    // Your code here
    const evens = document.querySelectorAll("ol > li:not(.odd)")
    console.log(evens)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const companies = document.querySelectorAll("section#three > p a")
    companies.forEach(comp => console.log(comp.innerText))
    // 9. Get "Amazon" list element
    // Your code here

    const amazon = document.querySelector("a.shopping")
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorn = document.querySelectorAll("section#three > ul li")
    console.log(unicorn)
}

window.onload = select;
