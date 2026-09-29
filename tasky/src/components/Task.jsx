import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = (props) => {
    const priorityColours = {
        Low: '#5bc47b',
        Medium: '#e6a23c',
        High: '#d9534f'
    };

    const chipColours = {
        Low: 'success',
        Medium: 'warning',
        High: 'error'
    };

    return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
                sx={{
                    backgroundColor: props.done ? 'lightgrey' : priorityColours[props.priority],
                    borderRadius: 3,
                    boxShadow: 4,
                    p: 2,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-4px)' }
                }}
            >
                <CardHeader
                    title={props.title}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        textAlign: 'center'
                    }}
                />

                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                            padding: '20px'
                        }}
                    >
                        <Typography component="p" variant="subtitle2" color="text.primary">
                            Due: {props.deadline}
                        </Typography>
                    </Box>

                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="center"
                        sx={{ fontStyle: 'italic' }}
                    >
                        {props.description}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Chip
                            label={props.priority}
                            color={chipColours[props.priority]}
                            size="small"
                            sx={{ fontWeight: 'bold', border: '2px solid white' }}
                        />
                    </Box>
                </CardContent>

                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        px: 1,
                        pb: 1,
                        gap: 1
                    }}
                >
                    <Tooltip title="Mark as complete">
                        <Button
                            variant="contained"
                            size="small"
                            color="success"
                            startIcon={<CheckCircleIcon />}
                            onClick={props.markDone}
                            sx={{ whiteSpace: 'nowrap', px: 1.5 }}
                        >
                            Done
                        </Button>
                    </Tooltip>

                    <Tooltip title="Delete this task">
                        <Button
                            variant="contained"
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={props.deleteTask}
                            sx={{ whiteSpace: 'nowrap', px: 1.5 }}
                        >
                            Delete
                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Task;