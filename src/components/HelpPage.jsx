import React from "react";

const HelpPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Help Page</h1>
      <p>
        Welcome to the Todo List application! Here are some instructions to help
        you get started:
      </p>
      <h2>Adding a Todo Item</h2>
      <p>
        To add a new todo item, type your task into the input field at the
        bottom of the page and click the "Add" button.
      </p>
      <h2>Marking a Todo Item as Done</h2>
      <p>
        To mark a todo item as done, simply click on the item. It will be
        crossed out to indicate that it is completed.
      </p>
      <h2>Editing a Todo Item</h2>
      <p>
        To edit a todo item, click the "Edit" button next to the item. A modal
        will appear where you can update the text of the item.
      </p>
      <h2>Deleting a Todo Item</h2>
      <p>
        To delete a todo item, click the "X" button next to the item. The item
        will be removed from the list.
      </p>
      <h2>Pagination</h2>
      <p>
        Use the pagination controls at the bottom of the page to navigate
        through your todo items.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need further assistance, please contact our
        Edmond.
      </p>
    </div>
  );
};

export default HelpPage;
