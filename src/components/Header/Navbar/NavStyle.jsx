import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    navWrapper:{
        flexGrow:1
    },
    header:{
        background:"#42474E"
    },
    rightIcon:{
        flexGrow:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
    }
}))

export default useStyles