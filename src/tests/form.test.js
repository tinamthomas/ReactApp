import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import RenderForm from '../RenderForm'
import Form from "./../Form"
test.only('input validation',async()=>{
    const name="A"
    const age="1"
    const parentCallback=jest.fn()
    render(<Form parentCallback={parentCallback}></Form>)

    fireEvent.change(screen.getByTestId("textInput"), { target: { value: name} })
    fireEvent.change(screen.getByTestId("ageInput"), { target: { value: age } })
    fireEvent.click(screen.getByTestId("saveButton"))

    expect(parentCallback).toHaveBeenLastCalledWith({name,age})
})