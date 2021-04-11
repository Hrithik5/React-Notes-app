import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Typography, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    fields: {
        marginTop: 20,
        marginBottom: 10,
        display: 'block'
    }
})

function Create() {

    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title, details })
            }).then(() => history.push('/'))
        }
    }

    return (
        <div>
            <Container>
                <Typography
                    variant="h3"
                    color="secondary"
                    align="center"
                >
                    Create a New Note
                </Typography>

                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        onChange={(e) => setTitle(e.target.value)}
                        className={classes.fields}
                        label="Note Title"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={titleError}
                    />

                    <TextField
                        onChange={(e) => setDetails(e.target.value)}
                        className={classes.fields}
                        label="Note Details"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={detailsError}
                    />

                    <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
                    </Button>
                </form>


            </Container>
        </div>
    )
}

export default Create
