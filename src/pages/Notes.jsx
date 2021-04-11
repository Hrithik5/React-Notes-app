import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import NotesCard from '../components/NotesCard'
import Masonary from 'react-masonry-css'

function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes);
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            <Masonary
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes.map(notes => (
                    <div key={notes.id}>
                        <NotesCard note={notes} handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonary>
        </Container>
    )
}

export default Notes
