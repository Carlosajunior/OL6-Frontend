import { Grid, Paper, Modal, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, deleteUser, updateUser } from "../../controller/services";
import { AccountCircle, Delete, Edit, Logout } from "@mui/icons-material";
import "./home.css"
import logo from "../../public/logo.png"
import { InputComponent } from "../../components/input";
import { FormComponents } from "../../components/form";

export const Home = () => {
    type User = {
        name: string,
        id: string,
        email: string,
        phone: string
    }

    const initialUser: User = {
        name: "",
        id: "",
        email: "",
        phone: ""
    }
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User>(initialUser)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const style = {
        position: 'absolute' as 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: "30px"
      };
    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        if(user?.id)
            setOpenModal(true)
    }, [user])

    useEffect(()=>{
        if(!openModal)
            setUser(initialUser)
    }, [openModal])

    const getData = () => {
        getUsers()
        .then((data) => {
            if(data){
                console.log(data)
                setUsers(data)
            }
        })
        .then((err) => {
            console.log(err)
        });
    }

    const deleteClient = (id) => {
        deleteUser(id)
        .then((data) => {
        if(data){
            console.log(data)
            let result = users.filter((user) => user.id !== id)
            setUsers(result)
        }
        })
        .then((err) => {
            console.log(err)
        });
    }

    const updateClient = (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
            phone: { value: string };
            name: {value: string}
          };
          const email = target.email.value;
          const password = target.password.value;
          const phone = target.phone.value;
          const name = target.name.value;
        updateUser(email, password, phone, name, user.id)
        .then((data) => {
        if(data){
            setOpenModal(false)
        }
        })
        .then((err) => {
            console.log(err)
        });
    }

  return (
    <Grid container style={{fontFamily: "calibri"}}>
        <Modal
            open={openModal}
            onClose={()=>setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableEscapeKeyDown={true}
            >
            <Box sx={style}>
                <form className="home" onSubmit={updateClient}>
                    <Grid container spacing={2} style={{marginTop: "10px"}}>
                        <Grid item xs={6}>
                            <InputComponent
                                inputName="name"
                                inputType="text"
                                inputPlaceholder="Nome"
                                value={user?.name}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputComponent
                                inputName="email"
                                inputType="email"
                                inputPlaceholder="Email"
                                value={user?.email}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputComponent
                                inputName="password"
                                inputType="password"
                                inputPlaceholder="Senha"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputComponent
                                inputName="phone"
                                inputType="text"
                                inputPlaceholder="Telefone"
                                value={user?.phone}
                            />
                        </Grid>
                        <Grid item xs={6} style={{marginLeft: "auto"}}>
                            <Button style={{margin: "10px"}} variant="outlined" type="submit">Atualizar</Button>
                            <Button variant="outlined" onClick={()=>setOpenModal(false)}>Fechar</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            {/*<Grid container>
                <Grid item xs={6}>
                    <InputComponent
                        inputName="password"
                        inputType="password"
                        inputPlaceholder="Password"
                    />
                </Grid>
            </Grid>*/}
        </Modal>
        <Grid item xs={12} style={{height: "100px", backgroundColor: "#1c53ba", display: "flex", alignItems: "center"}}>
            <img src={logo} alt="logo" style={{width: "50px", marginLeft: "15px"}} />
            <Link className="link-text-for-signup" to="/login" style={{marginLeft: "auto", marginRight: "25px"}}>
                <Logout style={{fontSize: "30px", color: "black"}}/>
            </Link>
        </Grid>
        <Grid container style={{justifyContent: "center", marginTop: "20px"}}>
            <Grid item xs={8}>
                <Paper style={{minHeight: "50px", padding: "15px"}}>
                        {users.length > 0 && users.map((user: User)=> {
                            return (
                                <Paper style={{marginBottom: "10px", minHeight: "50px", display: "flex", alignItems: "center", padding: "10px"}} >
                                    <Grid key={user.id} item xs={12}>
                                        <Grid container style={{alignItems: "center"}} className="teste">
                                            <Grid item xs={1}>
                                                <AccountCircle style={{fontSize: "45px"}}/>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <strong>{"Nome: "}</strong>
                                                <span style={{marginRight: "10px"}}>{user.name}</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <strong>{"Email: "}</strong>
                                                <span style={{marginRight: "10px"}}>{user.email}</span>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <div style={{marginLeft: "230px"}}>
                                                <Edit className="cursor" onClick={()=> setUser(user)} style={{fontSize: "30px"}} />
                                                <Delete className="cursor" onClick={()=> deleteClient(user.id)} style={{fontSize: "30px", marginLeft: "20px", color: "#c30505"}} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        })}
                </Paper>
            </Grid>
        </Grid>
    </Grid>
  );
};
