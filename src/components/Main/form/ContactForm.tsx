import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Icon,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import axios, { AxiosResponse, AxiosTransformer } from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      display: "flex",
      flexWrap: "wrap",
      margin: theme.spacing(1),
    },
    root: {
      marginBottom: 20,
    },
    color: {
      color: "white",
      marginBottom: 5,
    },
    back: {
      background: "#333",
    },
    ful: {
      width: "100%",
    },
    err: {
      "& .Mui-error": {
        color: "#ccc",
      },
      "& .MuiFormHelperText-root": {
        color: "#ccc",
      },
    },
    progress: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      position: "absolute",
    },
  })
);

export const ContactForm: React.FC = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errName, seterrName] = useState<boolean>(true);
  const [errEmail, seterrEmail] = useState<boolean>(true);
  const [errSubject, seterrSubject] = useState<boolean>(true);
  const [errMessage, seterrMessage] = useState<boolean>(true);
  const [required, setRequired] = useState<boolean>(false);
  const [progress, setProgress] = useState(false);
  const [send, setSend] = useState(false);
  const classes = useStyles();
  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 2) {
      seterrName(false);
    } else {
      seterrName(true);
    }
    setFormInputs((prewState) => {
      return { ...prewState, name: e.target.value };
    });
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>): any => {
    if (new RegExp(/[\w-]+@([\w-]+\.)+[\w-]+/gm).test(e.target.value)) {
      seterrEmail(false);
    } else {
      seterrEmail(true);
    }
    setFormInputs((prewState) => {
      return { ...prewState, email: e.target.value };
    });
  };
  const handleSubject = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 2) {
      seterrSubject(false);
    } else {
      seterrSubject(true);
    }
    setFormInputs({
      ...formInputs,
      subject: e.target.value,
    });
  };
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.target.value.length > 5) {
      seterrMessage(false);
    } else {
      seterrMessage(true);
    }
    setFormInputs({
      ...formInputs,
      message: e.target.value,
    });
  };
  const handleOnSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setProgress(true);
    if (errName || errEmail || errSubject || errMessage) {
      setRequired(true);
      setProgress(false);
      return;
    } else {
      try {
        const form = document.getElementById("contact-form") as HTMLFormElement;
        const mail: any = await new FormData(form);
        await axios
          .post("https://nodemail-email.herokuapp.com/send", mail)
          .then((response: AxiosResponse<AxiosTransformer>) => {
            if (response.status === 200) {
              setSend(true);
              setProgress(false);
            }
          });
      } catch (error) {
        console.log("backend crashed :( ", error);
        setProgress(false);
      }
    }
  };
  return (
    <Fragment>
      <Container>
        <Grid container alignContent="center" alignItems="center">
          <form
            id="contact-form"
            method="POST"
            encType="multipart/form-data"
            name="sendMessageForm"
            onSubmit={handleOnSubmit}
            className={classes.ful}
            noValidate
            autoComplete="off"
          >
            <FormControl
              className={classes.root}
              required
              fullWidth
              size="medium"
            >
              <TextField
                disabled={send ? true : false}
                className={classes.err}
                helperText={required ? "This field is required!" : ""}
                type="text"
                value={formInputs.name}
                onChange={handleName}
                label="Name"
                id="name"
                required
                name="name"
                InputProps={{
                  className: classes.color,
                  startAdornment: (
                    <InputAdornment position="start">
                      {formInputs.name.length < 2 ? (
                        <CancelIcon color="primary" />
                      ) : (
                        <CheckCircleIcon color="secondary" />
                      )}
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                disabled={send ? true : false}
                className={classes.err}
                helperText={required ? "Email is not vallid!" : ""}
                type="email"
                value={formInputs.email}
                onChange={handleEmail}
                required
                label="E-mail"
                id="email"
                name="email"
                InputProps={{
                  className: classes.color,
                  startAdornment: (
                    <InputAdornment position="start">
                      {errEmail ? (
                        <CancelIcon color="primary" />
                      ) : (
                        <CheckCircleIcon color="secondary" />
                      )}
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                disabled={send ? true : false}
                className={classes.err}
                helperText={required ? "This field is required!" : ""}
                type="text"
                onChange={handleSubject}
                value={formInputs.subject}
                required
                label="Subject"
                id="subject"
                name="subject"
                InputProps={{
                  className: classes.color,
                  startAdornment: (
                    <InputAdornment position="start">
                      {errSubject ? (
                        <CancelIcon color="primary" />
                      ) : (
                        <CheckCircleIcon color="secondary" />
                      )}
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                disabled={send ? true : false}
                className={classes.err}
                helperText={required ? "This field is required!" : ""}
                type="textarea"
                onChange={handleMessage}
                value={formInputs.message}
                required
                multiline
                label="Message"
                id="message"
                name="message"
                rows={3}
                InputProps={{
                  className: classes.color,
                  startAdornment: (
                    <InputAdornment position="start">
                      {errMessage ? (
                        <CancelIcon color="primary" />
                      ) : (
                        <CheckCircleIcon color="secondary" />
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="outlined"
                color="primary"
                disabled={send ? true : false}
                endIcon={
                  send ? (
                    <CheckCircleIcon color="secondary" />
                  ) : (
                    <Icon>send</Icon>
                  )
                }
              >
                {progress ? (
                  <div className={classes.progress}>
                    <CircularProgress size={30} color="secondary" />
                  </div>
                ) : (
                  ""
                )}
                Send
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Container>
    </Fragment>
  );
};
