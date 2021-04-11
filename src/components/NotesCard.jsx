import React from 'react'
import { Card, CardHeader, CardContent, IconButton, Typography, Avatar, makeStyles } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: '#1a237e'
    }
})

function NotesCard({ note, handleDelete }) {

    const classes = useStyles()

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.title[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton
                            onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                />

                <CardContent>
                    <Typography vairant='body2' color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NotesCard