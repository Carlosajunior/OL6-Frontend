import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../../controller/services";
export const Home = () => {
    type user ={
        name: string
    }
    type GetUserResponse = {
        data: {
            email: string,
            password: string
        },
        message: string,
        success: boolean,
        time: number,
        timestamp: number
    };
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getData()
    }, [])

    const getData = () => {
        getUsers()
        .then((data) => {
            if(data){
                console.log("...")
                //setUsers()
            }
        })
        .then((err) => {
            console.log(err)
        });
    }

  return (
    <Grid container>
        <Grid xs={12}>
            {/*menu */}
        </Grid>
        {users.map((user: user)=> {
            return (
                <Grid xs={12}>
                    {/*Listagens de usuários*/}
                    <Grid container>
                        <Grid xs={2}>
                            {/* Icone usuário */}
                        </Grid>
                        <Grid xs={6}>
                            {user.name}
                        </Grid>
                        <Grid xs={4}>
                            {/* Botões de ação */}
                        </Grid>
                    </Grid>
                </Grid>
            )
        })}
    </Grid>
  );
};
