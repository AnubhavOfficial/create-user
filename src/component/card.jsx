import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';


  
function Usercard({lists, deleteCard}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log("Card Expanded");
  };
  return lists.map(list=>(
    <Card sx={{ maxWidth: 345, textAlign: "left"}}>
      <CardHeader
      sx={{backgroundColor: "#6AA121"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            U
          </Avatar>
        }
        title={
          <Typography key={list.email} sx={{float: "left"}}>
            {list.name}
          </Typography>
        }
      />
      <CardContent>
          <Typography key={list.email}>
           {list.email}
          </Typography>
        </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <DeleteIcon onClick={()=>deleteCard(list.email)}/>
        </IconButton>
        <IconButton key={list.email}
          onClick={handleExpandClick}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph key={list.email}>
          Phone Number: {list.phone}
          </Typography>
          <Typography key={list.email}>
          Address: {list.address}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  ))
    
}

export default Usercard;