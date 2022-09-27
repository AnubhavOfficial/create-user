const textLight = "#E1D9D1";

const Styles = theme => ({
  main: {
    display: "block",
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    }
  },
  avatar: {
    marginTop: 20,
    position: "relative",
    background: "red",
    width: "70px",
    height: "70px",
    fontSize: "40px"
  },
  form: {
    margin: theme.spacing(4)
  },
  labels: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "18px",
    lineHeight: "4px",
    fontFamily: "PT Mono, monospace",
    fontWeight: "bolder",
    color: `black`
  },

  inputs: {
    background: "rgba(255,255,255,.30)",
    position: "relative",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "Cutive Mono, monospace",
    color: textLight,
    fontSize: "14px",
    fontWeight:"bold",
    padding: `${theme.spacing(1)}px`,
    borderRadius: "8px",
    border: "1px solid",
    boxShadow: "1px 1px 20px rgba(169,198,217,0.29457423) ",
    "&:hover": {
      background: "rgba(169,198,217,0.36457423) "
    }
  },

  button: {
    color: "#FDEEF4",
    background: "red",
    fontWeight: "bolder",
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(6),
    padding: `${theme.spacing(1)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",

    "&:hover": {
      background: "rgba(169,198,217,0.8)",
      color: textLight
    }
  }
});

export default Styles;