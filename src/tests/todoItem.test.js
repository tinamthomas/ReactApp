import ToDoItem from '../todoItem';
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
const todoText = "Laundry";

test('should show edit button for todoItem', async() => {
    render(<ToDoItem todo={todoText} />);

    expect(screen.getByRole("button")).toHaveValue("Edit")
});