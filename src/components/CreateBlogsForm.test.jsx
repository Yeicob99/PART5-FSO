import {render, screen } from '@testing-library/react'
import CreateBlogsForm from './CreateBlogsForm'
import { fireEvent } from '@testing-library/react'



test('rendering props sent by the client from the create blogs form', () => {
    const form = {
        author: 'testAuthor',
        url: 'testAuthor',
        likes: 'https/testblog.com',
    }

    const createBlog = vi.fn()
    
    render(<CreateBlogsForm createBlog={createBlog} />)

    const titleInput = screen.getByPlaceholderText('title')
    const urlInput = screen.getByPlaceholderText('url')
    const authorInput = screen.getByPlaceholderText('author')

    fireEvent.change(titleInput, { target: {value: 'New Blog Title'}})
    fireEvent.change(urlInput, { target: {value: 'https://testblog.com'}})
    fireEvent.change(authorInput, { target: {value: 'Crystal'}})

    const createButton = screen.getByText('Create')
    fireEvent.click(createButton)

    expect(createBlog).toHaveBeenCalledTimes(1)
    expect(createBlog).toHaveBeenCalledWith({
        title: 'New Blog Title',
        url: 'https://testblog.com',
        author: 'Crystal',
    })

})