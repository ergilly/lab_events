document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('form has been submitted');
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const newTitle = document.createTextNode(title);
    const newAuthor = document.createTextNode(author);
    const newCategory = document.createTextNode(category);
    let tableRef = document.querySelector('table');
    const newRow = tableRef.insertRow(-1)
    const newItem1 = newRow.insertCell(0)
    const newItem2 = newRow.insertCell(1)
    const newItem3 = newRow.insertCell(2)
    newItem1.appendChild(newTitle);
    newItem2.appendChild(newAuthor);
    newItem3.appendChild(newCategory);
    newList.appendChild(newItem);
  })
  form.addEventListener('reset', (event) => {
    event.reset()
  })
})

// console.log('form has been submitted');
//     console.log(event.target.first_name.value);
//     console.log(event.target.last_name.value);
//     event.preventDefault();
//     const firstName = event.target.first_name.value
//     const lastName = event.target.last_name.value
//
//     const resultParag = document.querySelector('#form-result');
//     resultParag.textContent = `Your name is: ${firstName} ${lastName}`
