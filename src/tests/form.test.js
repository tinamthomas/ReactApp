import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import RenderForm from '../RenderForm'
import Form from "./../Form"
test.only('input validation',async()=>{
    const parentCallback=jest.fn()
    render(<Form parentCallback={parentCallback}></Form>)

    const input = screen.getByTestId("textInput")
    fireEvent.change(input, { target: { value: '123' } })
    const save=screen.getByTestId("saveButton");
    fireEvent.click(save)

    expect(parentCallback).toHaveBeenLastCalledWith('123')
})