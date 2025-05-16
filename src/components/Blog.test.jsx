import { render, screen } from '@testing-library/react'
import {vi} from 'vitest'
import Blog from './Blog'
import { fireEvent } from '@testing-library/react'

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

    expect(screen.queryByText('https://testblog.com')).toBeNull()
    expect(screen.queryByText('Likes: 10')).toBeNull()

    const button = screen.getByText('View Details')
    fireEvent.click(button)

    expect(screen.getByText('https://testblog.com')).toBeDefined()
    expect(screen.getByText('Likes: 10')).toBeDefined()
})