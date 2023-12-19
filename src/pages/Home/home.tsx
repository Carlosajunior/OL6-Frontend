import React from "react";
import { Grid, Paper, Modal, Box, Button, Menu, MenuItem, TableContainer, TableCell, TableHead, TableRow, Table, TableBody, TablePagination, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers, deleteUser, updateUser } from "../../controller/services";
import { AccountCircle, Delete, Edit, Logout, ExpandMore, KeyboardArrowDown, PersonOutline } from "@mui/icons-material";
import "./home.css"
import logo from "../../public/logo.png"
import { InputComponent } from "../../components/input";
import { FormComponents } from "../../components/form";

export const Home = () => {
    type User = {
        name: string,
        id: string,
        email: string,
        phone: string,
        tipo: string
    }

    const initialUser: User = {
        name: "",
        id: "",
        email: "",
        phone: "",
        tipo: ""
    }
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User>(initialUser)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
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
    <Grid className="con" container style={{fontFamily: "calibri"}}>
        <Modal
            open={openModal}
            onClose={()=>setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableEscapeKeyDown={true}
            >
            <Box sx={style}>
                <form className="home" onSubmit={updateClient}>
                    <Grid container spacing={2} style={{marginTop: "10px",fontFamily: "calibri"}}>
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
        <Grid item xs={12} style={{height: "100px", display: "flex", alignItems: "center", borderBottom: "2px solid #1c53ba"}}>
            <img src={logo} alt="logo" style={{width: "50px", marginLeft: "15px"}} />
            <div style={{marginLeft: "auto", marginRight: "25px"}}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{color: "white", backgroundColor: "#1c53ba", textTransform: "none", borderRadius: "10px"}}
                >
                    {<><PersonOutline style={{marginRight: "5px"}}/>{"Admin"} <KeyboardArrowDown/></>}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Menu>
            </div>
            {/*<Link className="link-text-for-signup" to="/login" style={{marginLeft: "auto", marginRight: "25px"}}>
                <Logout style={{fontSize: "30px", color: "black"}}/>
            </Link>*/}
        </Grid>
        <Grid container style={{justifyContent: "center", height: "89%", backgroundColor:"whitesmoke"}}>
            <Grid item xs={8}>
                {/*<p style={{fontSize:"32px", marginBottom: "5px", color: "#1c53ba"}}>Usuários cadastrados</p>*/}
                <Typography
                    sx={{ flex: '1 1 100%', padding: "10px 0px 0px 0px", fontSize: "32px" }}
                    variant="p"
                    id="tableTitle"
                    component="div"
                    >
                    Usuários cadastrados
                </Typography>
                <Paper style={{minHeight: "50px", padding: "0px", marginTop: "10px"}}>
                        {/*users.length > 0 && users.map((user: User)=> {
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
                        })*/}
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell className="teste">Nome</TableCell>
                                        <TableCell className="teste">Email</TableCell>
                                        <TableCell className="teste">Tipo</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {users.length > 0 && users.map((row) => {
                                        if(row.name !== 'Admin')
                                        return (                                        <>
                                            <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                            <TableCell align="right">
                                                <div>
                                                    <Edit className="cursor" onClick={()=> setUser(row)} style={{fontSize: "28px"}} />
                                                    <Delete className="cursor" onClick={()=> deleteClient(row.id)} style={{fontSize: "28px", marginLeft: "20px", color: "#c30505"}} />
                                                </div>
                                            </TableCell>
                                            </TableRow>
                                    </>)
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                title="Linhas por página"
                                labelRowsPerPage="Linhas por página"
                                labelDisplayedRows={({from, to, count})=>{ return `${from}–${to} até ${count !== -1 ? count : `more than ${to}`}`; }}
                                rowsPerPageOptions={[5, 10, 25]}
                                component={"div"}
                                count={users.length-1}
                                rowsPerPage={10}
                                page={0}
                                onPageChange={()=>{}}
                                onRowsPerPageChange={()=>{}}
                            />
                </Paper>
                
            </Grid>
        </Grid>
    </Grid>
  );
};
