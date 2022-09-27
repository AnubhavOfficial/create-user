import React, { useState, useEffect } from "react";
import Styles from "./userstyle";
import CreateIcon from "@mui/icons-material/Create";
import Avatar from "@material-ui/core/Avatar";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  makeStyles,
} from "@material-ui/core";
import Usercard from "./card";

const useStyles = makeStyles(Styles);
// const getLocalData = () => {
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };
const User = ({ data }) => {
  const [lists, setlists] = useState(data);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    let list = {
      name,
      email,
      phone,
      address,
    };
    if (name === "" && email === "") {
      alert("Please enter values");
    } else if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email");
    } else {
      // lists ? setlists([...lists, list]) : setlists(list);
      setlists([...lists, list]);
      console.log(name, email, phone, address);
      alert("Congratulation, You have listed up!");
    }
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
  };
  // useEffect(() => {
  //   let data = localStorage.getItem("lists");
  //   if (data) {
  //     setlists(JSON.parse(data));
  //   } else {
  //     setlists([]);
  //   }
  // }, []);

  useEffect(() => {
    // let data = localStorage.getItem("lists");
    // if (data) {
    setlists(data);
    localStorage.setItem("lists", JSON.stringify(lists));
    // }
  }, [data, lists]);
  const deleteCard = (email) => {
    console.log("Delete");
    const updateData = lists.filter((element) => {
      return element.email !== email;
    });
    setlists(updateData);
  };
  const classes = useStyles();
  return (
    <div className="App">
      <h1 className="heading">USER DATA </h1>
      <CreateIcon />
      <div className="user">
        <div className="new-user">
          <div className={classes.main}>
            <Avatar className={classes.avatar}>U</Avatar>
            <form className={classes.form} onSubmit={createUser}>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="name" className={classes.labels}>
                  NAME
                </InputLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  className={classes.inputs}
                  disableUnderline={true}
                  onChange={(e) => setname(e.target.value)}
                />
              </FormControl>

              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="email" className={classes.labels}>
                  E-Mail
                </InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className={classes.inputs}
                  disableUnderline={true}
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormControl>

              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="phone" className={classes.labels}>
                  NUMBER
                </InputLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="number"
                  className={classes.inputs}
                  disableUnderline={true}
                  onChange={(e) => setphone(e.target.value)}
                />
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="address" className={classes.labels}>
                  ADDRESS
                </InputLabel>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  className={classes.inputs}
                  disableUnderline={true}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </FormControl>

              <Button
                variant="outlined"
                fullWidth
                className={classes.button}
                type="submit"
                onClick={createUser}
              >
                Create User
              </Button>
            </form>
          </div>
        </div>
        {lists && (
          <div className="user-list">
            {lists.length > 0 ? (
              <Usercard lists={lists} deleteCard={deleteCard} />
            ) : (
              <p className="nolisted">No User is Listed Yet! :-{")"}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
