import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#090C10',
      color:"#fff"
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    search:{
      marginTop:"6rem",
    },
    searchForm:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    search_input:{
      width:"50vw"
    }

  }));

export default useStyles