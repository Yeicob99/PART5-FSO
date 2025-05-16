import { render, screen } from '@testing-library/react'
import {vi} from 'vitest'
import Blog from './Blog'

test('renders title and author, but not url or likes by default', () => {
    const blog = {
        title: 'Test Blog',
        author: {name: 'Test Author', id: "123"},   
        url: 'https://testblog.com',
        likes: 10,     

    }

    const user = {
        id: "123"
    }

    render(<Blog blog={blog} user={user} handleLike={vi.fn()} handleDelete={vi.fn()} />)

    const title = screen.getByText('Test Blog')
    expect(title).toBeDefined()



    const url = screen.queryByText('https://testblog.com')
    const likes = screen.queryByText('Likes: 10')
    const author = screen.queryByText('Test Author')
    expect(url).toBeNull()
    expect(likes).toBeNull()

})