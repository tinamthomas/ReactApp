import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import MovieTable from "../MovieTable"

test("Render Movies table",async()=>{
    render(<MovieTable></MovieTable>)
    expect(screen.getAllByRole("row")).toHaveLength(2);
    const columns=screen.getAllByRole("cell")
    expect(columns[0]).toHaveTextContent("Harry Potter")
    expect(columns[1]).toHaveTextContent("10")
    expect(columns[2]).toHaveTextContent("Edit")
    expect(columns[3]).toHaveTextContent("Back to the future")
    expect(columns[4]).toHaveTextContent("10")
    expect(columns[5]).toHaveTextContent("Edit")

})