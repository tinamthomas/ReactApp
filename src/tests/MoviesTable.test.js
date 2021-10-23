import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import MovieTable from "../MovieTable"

test("Render Movies table",async()=>{
    const tableDetails=[{movieName:"Harry Potter",rating:"10"},{movieName:"Back to the future",rating:"10"}]
    render(<MovieTable tableDetails={tableDetails}></MovieTable>)

    expect(screen.getAllByRole("row")).toHaveLength(2);
    const columns=screen.getAllByRole("cell")
    expect(columns[0]).toHaveTextContent("Harry Potter")
    expect(columns[1]).toHaveTextContent("10")
    expect(columns[2]).toHaveTextContent("Edit")
    expect(columns[3]).toHaveTextContent("Back to the future")
    expect(columns[4]).toHaveTextContent("10")
    expect(columns[5]).toHaveTextContent("Edit")

})
test("On Clicking edit get save button",async()=>{
    const tableDetails=[{movieName:"Harry Potter",rating:"10"}]
    
    render(<MovieTable tableDetails={tableDetails}></MovieTable>)

    fireEvent.click(screen.getByRole("button"))    
    const buttons=screen.getAllByRole("button")
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent("Save")
    expect(buttons[1]).toHaveTextContent("Cancel")
})