import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import MovieTable from "../MovieTable"
import {rest} from 'msw'
import {setupServer} from 'msw/node'

//Set up mock server for tests 
const movies = [
    {movieName:"Matilda", rating: "10"}, 
    {movieName: "Flubber", rating: "9"}
];

const server = setupServer(
    rest.get('http://localhost:3004/movies', (req, res, ctx) => {
      return res(ctx.json(movies))
    }),
  );
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("Render Movies table", async ()=>{
    render(<MovieTable/>)

    await waitFor(() => screen.getAllByRole('row')) //this line makes it wait till at least one row is shown

    expect(screen.getAllByRole("row")).toHaveLength(movies.length);
    const columns=screen.getAllByRole("cell")
    expect(columns[0]).toHaveTextContent(movies[0].movieName)
    expect(columns[1]).toHaveTextContent(movies[0].rating)
    expect(columns[2]).toHaveTextContent("Edit")
    expect(columns[3]).toHaveTextContent(movies[1].movieName)
    expect(columns[4]).toHaveTextContent(movies[1].rating)
    expect(columns[5]).toHaveTextContent("Edit")

})
test("On Clicking edit get save button",async()=>{
    render(<MovieTable/>)

    await waitFor(() => screen.getAllByRole('row'))
    
    fireEvent.click(screen.getAllByRole("button")[0])    
    const buttons=screen.getAllByRole("button")
    expect(buttons).toHaveLength(4)
    expect(buttons[0]).toHaveTextContent("Save")
    expect(buttons[1]).toHaveTextContent("Cancel")
})